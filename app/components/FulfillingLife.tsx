import Image from "next/image";

export default function FulfillingLife() {
  return (
    <section className="bg-[#E9DEC8]">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        <div className="grid grid-rows-[1fr_auto] pt-24 order-2 md:order-1">
          <div className="px-6 md:px-16 max-w-lg mb-8 md:mb-0">
            <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
              Does This Feel Familiar?
            </h2>

            <p className="text-base mb-6 leading-relaxed">
              You are thoughtful, capable, and used to handling a lot on your own.
              From the outside, you are managing - but internally, it can feel very different - anxious, stressed, or worn down.
            </p>

            <p className="text-base leading-relaxed">
              Therapy can be a quiet place to pause, breathe, and feel
              more supported as you make sense of what you&apos;re carrying.
            </p>
          </div>

          <div className="group border-t border-[#2f3a1f] w-full py-6 flex justify-center transition cursor-pointer hover:bg-[#6B5B4F] hover:text-white hover:border-[#6B5B4F]">
            <button className="text-base tracking-wide px-6 py-3 transition border-0 bg-transparent">
              LEARN MORE →
            </button>
          </div>
        </div>

        <div className="relative min-h-[400px] md:min-h-full order-1 md:order-2">
          <Image
            src="/fulfilling.jpeg"
            alt="Lifestyle flatlay"
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
