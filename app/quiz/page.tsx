"use client";
import { useState } from "react";
import Confetti from "react-confetti";

const quizData = [
  {
    q: "How do you show affection in a relationship?",
    a: [
      { v: "dreamer", t: "I plan romantic surprises (The Romantic Dreamer)" },
      { v: "guardian", t: "I’m always there to support my partner (The Loyal Guardian)" },
      { v: "flirt", t: "I keep things playful and spontaneous (The Playful Flirt)" },
      { v: "introvert", t: "I prefer deep, quiet moments together (The Mysterious Introvert)" }
    ]
  },
  {
    q: "Your idea of the perfect date is...",
    a: [
      { v: "dreamer", t: "A moonlit walk or candlelit dinner" },
      { v: "guardian", t: "A cozy night in, making my partner feel secure" },
      { v: "flirt", t: "A fun event with lots of laughs" },
      { v: "introvert", t: "An intimate conversation in a quiet spot" }
    ]
  },
  {
    q: "What do you value most in love?",
    a: [
      { v: "dreamer", t: "Romance and shared dreams" },
      { v: "guardian", t: "Loyalty and dependability" },
      { v: "flirt", t: "Excitement and playfulness" },
      { v: "introvert", t: "Depth and understanding" }
    ]
  },
  {
    q: "How do you handle conflict?",
    a: [
      { v: "dreamer", t: "Try to smooth it over with kind words" },
      { v: "guardian", t: "Calmly talk things through" },
      { v: "flirt", t: "Deflect with humor or charm" },
      { v: "introvert", t: "Withdraw and reflect quietly" }
    ]
  },
  // ...add more questions as desired
];

const profileTitles = {
  dreamer: "The Romantic Dreamer",
  guardian: "The Loyal Guardian",
  flirt: "The Playful Flirt",
  introvert: "The Mysterious Introvert"
};

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>(Array(quizData.length).fill(""));
  const [showResult, setShowResult] = useState(false);
  const [profileKey, setProfileKey] = useState("");
  const [profileTitle, setProfileTitle] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [paying, setPaying] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [error, setError] = useState("");

  const allAnswered = answers.every(ans => ans);

  function handleAnswer(idx: number, val: string) {
    const arr = [...answers];
    arr[idx] = val;
    setAnswers(arr);
    setError("");
  }

  function handleNext() {
    if (answers[step]) setStep(step + 1);
    else setError("Please select an option to proceed.");
  }

  function handlePrev() {
    setStep(step - 1);
    setError("");
  }

  function handleSubmitQuiz() {
    const counts = { dreamer: 0, guardian: 0, flirt: 0, introvert: 0 };
    answers.forEach(a => counts[a]++);
    const key = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b) as keyof typeof profileTitles;
    setProfileKey(key);
    setProfileTitle(profileTitles[key]);
    setShowResult(true);
    setStep(quizData.length);
    setError("");
  }

  async function handlePay() {
    setPaying(true); setError("");
    // @ts-ignore: Paystack global
    const handler = window.PaystackPop && window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      email: userEmail,
      amount: 499 * 100, // $4.99 USD
      currency: "USD",
      callback: async (response: any) => {
        const res = await fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            reference: response.reference,
            email: userEmail,
            name: userName,
            profileKey
          })
        }).then(res => res.json());
        if (res.success && res.token) {
          setConfetti(true);
          setTimeout(() => {
            window.location.href = `/profile/${profileKey}?token=${res.token}`;
          }, 1800);
        } else {
          setError("We could not verify your payment. Please try again or contact support.");
          setPaying(false);
        }
      },
      onClose: function () {
        setError("Payment was closed. Please try again.");
        setPaying(false);
      }
    });
    handler && handler.openIframe();
  }

  return (
    <>
      {confetti && <Confetti />}
      <main className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-6 mt-8 mb-4">
        <h1 className="font-playfair text-3xl text-center mb-3">Discover Your Love Personality</h1>
        <div className="text-center text-green-600 font-bold mb-2">Verified & Secure</div>
        {!showResult ? (
          <>
            <div className="flex items-center justify-center mb-4">
              <span>Question {step + 1} of {quizData.length}</span>
              <progress value={step + 1} max={quizData.length} className="ml-4 w-56"></progress>
            </div>
            <div className="mb-2 font-semibold">{quizData[step].q}</div>
            <div>
              {quizData[step].a.map((opt, i) => (
                <label key={i} className="block mb-2">
                  <input
                    type="radio"
                    name={`q${step}`}
                    value={opt.v}
                    checked={answers[step] === opt.v}
                    onChange={() => handleAnswer(step, opt.v)}
                    className="mr-2"
                  />
                  {opt.t}
                </label>
              ))}
            </div>
            {error && <div className="text-red-600 mt-2">{error}</div>}
            <div className="flex gap-2 mt-4">
              {step > 0 && <button onClick={handlePrev} className="btn">Back</button>}
              {step < quizData.length - 1 && (
                <button onClick={handleNext} className="btn">
                  Next
                </button>
              )}
              {step === quizData.length - 1 && (
                <button
                  onClick={e => { e.preventDefault(); allAnswered ? handleSubmitQuiz() : setError("Answer all questions."); }}
                  className="btn"
                >
                  Reveal My Personality
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="mt-4 mb-1 text-2xl text-center">
              Your Love Personality is: <span className="text-pink-600">{profileTitle}</span>
            </h2>
            <p className="text-center mb-6">
              To unlock your full personalized profile, expert advice, and download, please fill in your details and pay securely below.
            </p>
            <form
              className="flex flex-col gap-3 mx-auto max-w-md"
              onSubmit={e => { e.preventDefault(); handlePay(); }}
            >
              <input
                type="text"
                placeholder="Full Name"
                value={userName}
                onChange={e => setUserName(e.target.value)}
                className="input"
                required
                autoComplete="name"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={userEmail}
                onChange={e => setUserEmail(e.target.value)}
                className="input"
                required
                autoComplete="email"
              />
              <button
                type="submit"
                className="btn"
                disabled={paying || !userName || !userEmail || !userEmail.includes("@")}
              >
                {paying ? "Processing Payment..." : "Unlock for $4.99"}
              </button>
              {error && <div className="text-red-600">{error}</div>}
            </form>
          </>
        )}
      </main>
      <style jsx>{`
        .btn {
          background: #ff3366;
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.7rem 2rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn:disabled {
          background: #ffc0cb;
          cursor: not-allowed;
        }
        .input {
          border: 1px solid #ffd6e0;
          border-radius: 8px;
          padding: 0.7rem;
          font-size: 1rem;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </>
  );
}