export default function GetStarted() {
  return (
    <section className="bg-[#525C56] text-white py-24">
      <div className="max-w-2xl mx-auto px-6 md:px-16 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
          Get started today.
        </h2>

        <p className="text-base leading-relaxed mb-8">
          If you&apos;re considering therapy, taking the first step can feel like a lot.
          Reaching out is simply a way to begin a conversation and see if this feels like the right fit for you.
        </p>

        <div className="flex justify-center">
          <button className="border border-white px-8 py-3 text-base tracking-wide hover:bg-white hover:text-[#7b7a4a] transition">
            GET IN TOUCH →
          </button>
        </div>
      </div>
    </section>
  );
}
