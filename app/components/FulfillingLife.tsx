import Image from "next/image";

export default function FulfillingLife() {
  return (
    <section className="bg-[#f7f4ef]">
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        
        {/* LEFT COLUMN */} 

        <div className="grid grid-rows-[1fr_auto] pt-20 order-2 lg:order-1">


        {/* Text */}
        <div className="px-6 lg:pl-20 max-w-md mb-10 lg:mb-0">

            <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            Live a fulfilling life.
            </h2>

            <p className="text-sm mb-6 leading-relaxed">
            Life can be challenging—especially when you&apos;re trying to balance
            your personal and professional life.
            </p>

            <p className="text-sm leading-relaxed">
            It&apos;s easy to feel like you&apos;re alone in facing these challenges,
            but I want you to know that I&apos;m here to help.
            </p>
        </div>

        {/* Divider + CTA */}
        <div className="border-t border-[#2f3a1f] w-full py-6 flex justify-center">
            <button className="text-sm tracking-wide hover:underline">
                GET IN TOUCH →
            </button>
        </div>


        </div>


        {/* RIGHT COLUMN */}
        <div className="relative min-h-[400px] lg:min-h-full order-1 lg:order-2">

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
