import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-16 pb-8">
      <h1 className="font-playfair text-5xl text-center mb-2 text-primary drop-shadow">Discover Your Love Personality <span className="bg-accent text-white px-2 py-1 rounded ml-2">Verified</span></h1>
      <p className="text-center text-2xl mb-7 font-poppins">Unlock your deepest romantic archetype with our expert-designed, dopamine-boosting quiz. Trusted by thousands—see why we’re #1 in the world for love insights!</p>
      <div className="flex justify-center mb-8">
        <Link href="/quiz" className="bg-primary text-white text-2xl px-8 py-3 rounded-full shadow-lg hover:bg-deep transition font-bold animate-bounce">Start The Quiz</Link>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl text-center mb-3 text-accent">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-90 shadow-lg rounded-xl p-6">
            <p className="italic">“I never knew a quiz could feel so personal and spot-on. The report blew me away. Worth every penny!”</p>
            <div className="mt-2 font-bold text-primary">— Jemimah S.</div>
          </div>
          <div className="bg-white bg-opacity-90 shadow-lg rounded-xl p-6">
            <p className="italic">“My partner and I both took it for fun, but the insights genuinely improved our relationship. Highly recommend!”</p>
            <div className="mt-2 font-bold text-primary">— Brian T.</div>
          </div>
        </div>
      </section>
      <div className="flex flex-col items-center mt-12 text-sm text-gray-700 gap-1">
        <Link href="/legal/terms" className="underline">Terms</Link> | <Link href="/legal/privacy" className="underline">Privacy</Link> | <Link href="/legal/refund" className="underline">Refund</Link> | <Link href="/contact" className="underline">Contact</Link>
      </div>
    </main>
  );
}