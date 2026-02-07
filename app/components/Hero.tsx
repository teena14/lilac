import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 px-6 md:px-16 py-24 items-center">
      <div className="flex justify-center">
        <div className="relative w-[85%] h-[520px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/hero.jpeg"
            alt="Lilac flowers"
            fill
            className="object-cover rounded-t-full"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-medium leading-tight mb-6">
          A Calm Place to Begin
        </h2>

        <p className="text-base mb-8 max-w-md">
          Therapy for adults navigating anxiety, trauma, and burnout in Santa Monica, CA.
        </p>

        <button className="border border-[#2f3a1f] px-6 py-3 text-base tracking-wide hover:bg-[#2f3a1f] hover:text-white transition">
          Book a free consult →
        </button>
      </div>

    </section>
  );
}
