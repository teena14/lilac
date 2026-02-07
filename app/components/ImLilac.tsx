import Image from "next/image";

export default function ImLilac() {
  return (
    <section className="bg-[#f1eee8] py-24">
      <div className="grid md:grid-cols-2 items-center gap-12 px-6 md:px-16">
        <div className="order-2 md:order-1">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">
            Hi, I&apos;m Dr. Maya.
          </h2>

          <p className="text-base leading-relaxed mb-8">
            I work with adults who are feeling anxious, stressed, or worn down,
            often while continuing to function and care for others. My goal is
            to offer a steady, supportive space where you can slow down, feel
            understood, and begin making sense of what you&apos;re carrying.
          </p>

          <div className="flex justify-center">
            <button className="border border-[#2f3a1f] px-6 py-3 text-base tracking-wide hover:bg-[#2f3a1f] hover:text-white transition">
              LET&apos;S TALK →
            </button>
          </div>
        </div>

        <div className="relative flex justify-center order-1 md:order-2">
          <div className="relative w-[70%] h-[520px]  lg:h-[600px]">
            <Image
              src="/im-lilac-main.jpeg"
              alt="Lilac holding flowers"
              fill
              className="object-cover rounded-t-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
