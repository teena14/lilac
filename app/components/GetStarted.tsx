export default function GetStarted() {
  return (
    <section className="bg-[#7b7a4a] text-white py-28">
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-medium mb-6">
          Get started today.
        </h2>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-12">
          Ready to take the first step towards a happier, healthier you?
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <button className="border border-white px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-[#7b7a4a] transition">
            GET IN TOUCH →
          </button>
        </div>

      </div>
    </section>
  );
}
