import Image from 'next/image';

export default function OfficeSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-16 text-center">
        <h2 className="font-heading text-2xl md:text-3xl font-medium mb-8">
          A Space for Calm and Privacy
        </h2>

        <div className="relative w-full h-[260px] md:h-[350px] lg:h-[400px] mb-8 overflow-hidden rounded-[50px] md:rounded-[120px] lg:rounded-[180px]">
          <Image
            src="/office.jpeg"
            alt="Therapy office"
            fill
            className="object-cover"
          />
        </div>

        <p className="text-base leading-relaxed max-w-3xl mx-auto">
          Sessions take place in a calm and private office designed to support
          focused, uninterrupted conversation. Soft light, simple surroundings,
          and a steady pace of conversation help create a space where you can
          slow down and speak openly.
        </p>

      </div>
    </section>
  );
}
