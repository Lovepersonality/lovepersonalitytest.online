import Quiz from "./components/Quiz";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center relative">
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        {/* Optional: SVG gradient or animation */}
      </div>
      <section className="z-10 mt-12 mb-10 text-center max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-violet-500 to-teal-400 text-transparent bg-clip-text mb-4 font-display">
          Love Personality Test – Discover Your Romantic Type
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
          Take the best relationship quiz of 2025. Reveal your unique love style in minutes!
        </h2>
        <p className="mb-4 text-gray-800">
          <strong>Why take this quiz?</strong> Our fun, research-inspired test is designed for singles and couples who want to understand themselves and their partners better. Find out if you're a Dreamer, Adventurer, Charmer, or Thinker!
        </p>
        <p className="mb-2 text-gray-700">
          <em>100% free • Instant results • No signup required</em>
        </p>
      </section>
      <Quiz />
      <section className="mt-8 mb-8 px-4 max-w-2xl mx-auto" id="faq" aria-label="Frequently Asked Questions">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="mb-2">
          <strong>What is the Love Personality Test?</strong>
          <div className="text-gray-700 mb-2">
            It’s a quick, online quiz to help you discover your romantic strengths and style, based on relationship psychology.
          </div>
        </div>
        <div className="mb-2">
          <strong>Is this quiz really free?</strong>
          <div className="text-gray-700 mb-2">
            Yes! No signup, no payment, just fun and insights.
          </div>
        </div>
        <div className="mb-2">
          <strong>Can I share my results?</strong>
          <div className="text-gray-700 mb-2">
            Absolutely! There’s a share button after you finish the quiz.
          </div>
        </div>
      </section>
      <footer className="mt-12 mb-4 text-xs text-gray-500 text-center w-full z-10">
        &copy; {new Date().getFullYear()} LovePersonalityTest.online. All rights reserved.
      </footer>
    </main>
  );
}