import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center relative bg-gradient-to-br from-pink-100 via-rose-50 to-violet-100">
      <section className="z-10 mt-12 mb-10 text-center max-w-2xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-violet-500 to-teal-400 text-transparent bg-clip-text mb-4 font-display">
          Love Personality Test
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 mb-8 font-semibold">
          Discover your romantic type with the best relationship quiz!
        </h2>
        <p className="mb-6 text-gray-800">
          Take our fun, insightful, and free quiz to reveal your unique love personality. Are you a Dreamer, Adventurer, Charmer, or Thinker? Find out now!
        </p>
        <Link
          href="/quiz"
          className="inline-block px-8 py-3 rounded-lg bg-pink-500 text-white text-lg font-semibold shadow hover:bg-pink-600 transition"
        >
          Start the Quiz
        </Link>
      </section>
      <footer className="mt-12 mb-4 text-xs text-gray-500 text-center w-full z-10">
        &copy; {new Date().getFullYear()} LovePersonalityTest.online. All rights reserved.
      </footer>
    </main>
  );
}