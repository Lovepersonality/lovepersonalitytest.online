"use client";
import { useState } from "react";

const questions = [
  {
    question: "What is your ideal romantic date?",
    options: [
      { text: "Candle-lit Dinner 🍷", type: "dreamer" },
      { text: "Adventure Outdoors 🥾", type: "adventurer" },
      { text: "Fun at a Festival 🎉", type: "charmer" },
      { text: "Deep Talks Under Stars 🌌", type: "thinker" }
    ],
  },
  {
    question: "Which gift would make you happiest?",
    options: [
      { text: "A heartfelt letter 💌", type: "dreamer" },
      { text: "Tickets to a concert 🎫", type: "charmer" },
      { text: "A surprise trip ✈️", type: "adventurer" },
      { text: "A thoughtful book 📚", type: "thinker" }
    ],
  },
  {
    question: "How do you express love?",
    options: [
      { text: "Words of affirmation 💖", type: "dreamer" },
      { text: "Acts of adventure 🌍", type: "adventurer" },
      { text: "Playful teasing 😏", type: "charmer" },
      { text: "Listening deeply 👂", type: "thinker" }
    ],
  },
];

const results = {
  dreamer: {
    title: "Romantic Dreamer",
    emoji: "💖",
    desc: "You cherish deep connections, meaningful gestures, and believe in soulmates. You bring warmth and depth to relationships.",
    color: "from-pink-400 to-pink-500",
    share: "I'm a Romantic Dreamer! Take the Love Personality Test to discover your type at https://lovepersonalitytest.online"
  },
  adventurer: {
    title: "Adventurous Lover",
    emoji: "🌍",
    desc: "Excitement and novelty keep your love alive! You inspire your partner to try new things and see the world with you.",
    color: "from-violet-400 to-violet-500",
    share: "I'm an Adventurous Lover! Discover your love type at https://lovepersonalitytest.online"
  },
  charmer: {
    title: "Playful Charmer",
    emoji: "😏",
    desc: "You light up every room with your wit and energy. Love is fun, and you make every moment memorable.",
    color: "from-yellow-400 to-orange-400",
    share: "I'm a Playful Charmer! Find your romantic style at https://lovepersonalitytest.online"
  },
  thinker: {
    title: "Thoughtful Thinker",
    emoji: "🌌",
    desc: "You’re introspective, a great listener, and value meaningful conversations. Your love is deep and understanding.",
    color: "from-emerald-400 to-teal-400",
    share: "I'm a Thoughtful Thinker! What's your love type? https://lovepersonalitytest.online"
  }
};

function ResultCard({ result, onRestart }: { result: any, onRestart: () => void }) {
  function share() {
    if (navigator.share) {
      navigator.share({
        title: "My Love Personality Test Result",
        text: result.share,
        url: "https://lovepersonalitytest.online"
      });
    } else {
      navigator.clipboard.writeText(result.share);
      alert("Result copied! Share it anywhere.");
    }
  }
  return (
    <section className="w-full max-w-xl mx-auto" aria-label="Quiz Results">
      <div className={`rounded-2xl shadow-xl p-10 text-center text-white bg-gradient-to-br ${result.color}`}>
        <div className="text-6xl mb-4">{result.emoji}</div>
        <h2 className="text-3xl font-extrabold mb-2">{result.title}</h2>
        <p className="mb-6 text-lg">{result.desc}</p>
        <button
          className="px-8 py-3 rounded-lg bg-white/80 text-pink-700 font-bold shadow hover:bg-white transition mr-2"
          onClick={onRestart}
        >
          Try Again
        </button>
        <button
          className="px-8 py-3 rounded-lg bg-pink-600 text-white font-bold shadow hover:bg-pink-700 transition"
          onClick={share}
          aria-label="Share your result"
        >
          Share Result
        </button>
      </div>
    </section>
  );
}

export default function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  function handleOption(type: string) {
    setAnswers([...answers, type]);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  }

  function getResult() {
    // Find the most selected type
    const tally: Record<string, number> = {};
    answers.forEach(a => { tally[a] = (tally[a] || 0) + 1 });
    const sorted = Object.entries(tally).sort((a, b) => b[1] - a[1]);
    return results[sorted[0][0] as keyof typeof results];
  }

  if (showResult) {
    return <ResultCard result={getResult()} onRestart={() => {
      setStep(0); setAnswers([]); setShowResult(false);
    }} />;
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100">
      <div className="w-full max-w-xl mx-auto mt-12 mb-10">
        <div className="bg-white/80 rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-xs text-gray-500 mb-2">
            Question {step + 1} of {questions.length}
          </div>
          <h2 className="text-2xl font-bold mb-6">{questions[step].question}</h2>
          <div className="space-y-3">
            {questions[step].options.map((opt) => (
              <button
                key={opt.text}
                onClick={() => handleOption(opt.type)}
                className={`w-full px-6 py-4 rounded-xl bg-gradient-to-r hover:scale-105 transition-all duration-200 font-semibold text-lg shadow text-white ${
                  opt.type === "dreamer" ? "from-pink-400 to-pink-500" :
                  opt.type === "adventurer" ? "from-violet-400 to-violet-500" :
                  opt.type === "charmer" ? "from-yellow-400 to-orange-400" :
                  "from-emerald-400 to-teal-400"
                }`}
              >
                {opt.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}