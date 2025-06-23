'use client';

import { useState } from 'react';

// 12 example questions - you can edit the text if you want!
const questions = [
  { question: "How do you express affection?", answers: ["Words", "Gifts", "Touch", "Quality Time"] },
  { question: "What makes you feel closest to someone?", answers: ["Deep talks", "Going on adventures", "Laughing together", "Acts of service"] },
  { question: "Your ideal date night is...", answers: ["Candlelit dinner", "Outdoor adventure", "Movie marathon", "Surprise getaway"] },
  { question: "When hurt, you prefer to...", answers: ["Talk it out", "Take space", "Distract yourself", "Write your feelings"] },
  { question: "You are most attracted to...", answers: ["Kindness", "Confidence", "Creativity", "Ambition"] },
  { question: "Which gift would thrill you most?", answers: ["Heartfelt letter", "Surprise trip", "Thoughtful playlist", "Personalized jewelry"] },
  { question: "In a partner, you value...", answers: ["Loyalty", "Passion", "Playfulness", "Support"] },
  { question: "Biggest relationship pet peeve?", answers: ["Lack of communication", "Routine", "Neglect", "Jealousy"] },
  { question: "Love is...", answers: ["A journey", "An adventure", "A mystery", "A masterpiece"] },
  { question: "You fall for someone who...", answers: ["Makes you laugh", "Listens deeply", "Surprises you", "Shares your dreams"] },
  { question: "Which song describes your love life?", answers: ["Endless Love", "Crazy in Love", "Love Story", "Bleeding Love"] },
  { question: "Your friends describe you as...", answers: ["Romantic", "Dreamer", "Realist", "Adventurer"] },
];

// Example result (you can expand this to calculate different results)
const personalityResult = {
  type: "The Romantic Dreamer",
  teaser: "You are The Romantic D...",
  full: "You are The Romantic Dreamer! You value deep connections and cherish meaningful moments. Your ideal relationship is filled with passion, understanding, and shared dreams.",
  highlights: [
    "Passionate and caring",
    "Seeks deep connection",
    "Loves meaningful gestures",
  ],
};

export default function HomePage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showFinal, setShowFinal] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const handleSelect = (answer: string) => {
    setAnswers([...answers, answer]);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowFinal(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep via-primary to-accent px-4">
      <div className="bg-white/80 rounded-xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-playfair text-deep mb-6 text-center font-bold">
          Love Personality Test
        </h1>
        {!showFinal ? (
          <div>
            <div className="text-xl font-semibold text-primary mb-4 text-center">
              {`Question ${current + 1} of ${questions.length}`}
            </div>
            <div className="text-lg font-poppins text-gray-800 mb-8 text-center">
              {questions[current].question}
            </div>
            <div className="space-y-4">
              {questions[current].answers.map((ans) => (
                <button
                  key={ans}
                  onClick={() => handleSelect(ans)}
                  className="block w-full bg-accent/90 hover:bg-accent text-white text-lg rounded-lg py-3 font-bold shadow-md transition"
                >
                  {ans}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            {!unlocked ? (
              <>
                <div className="text-2xl font-bold text-primary mb-4 animate-pulse">
                  {personalityResult.teaser}
                </div>
                <button
                  onClick={() => setUnlocked(true)}
                  className="mt-4 bg-deep hover:bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg transition text-lg"
                >
                  Unlock Full Result
                </button>
              </>
            ) : (
              <div>
                <div className="text-2xl font-bold text-primary mb-4">
                  {personalityResult.type}
                </div>
                <div className="text-lg font-poppins text-gray-800 mb-4">
                  {personalityResult.full}
                </div>
                <ul className="mb-6 text-left">
                  {personalityResult.highlights.map((hl, i) => (
                    <li key={i} className="text-deep font-semibold">
                      • {hl}
                    </li>
                  ))}
                </ul>
                {/* You can add confetti here for extra effect! */}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}