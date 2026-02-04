import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid lg:grid-cols-2 gap-12 px-6 lg:px-16 py-20 items-center">

      {/* Image */}
    <div className="flex justify-center">
      <div className="relative w-[85%] h-[520px] lg:h-[700px]">
        <Image
          src="/hero.jpeg"
          alt="Lilac flowers"
          fill
          className="object-cover rounded-t-full"
          priority
        />
      </div>
    </div>


      {/* Text */}
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl lg:text-5xl font-medium leading-tight mb-6">
          Live your life <br /> in full bloom
        </h2>

        <p className="text-sm mb-8 max-w-md">
          Therapy for Adults in Minneapolis, MN.
        </p>

        <button className="border border-[#2f3a1f] px-6 py-3 text-sm tracking-wide hover:bg-[#2f3a1f] hover:text-white transition">
          CONNECT WITH ME →
        </button>
      </div>

    </section>
  );
}
