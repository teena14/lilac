import Image from "next/image";

export default function ImLilac() {
  return (
    <section className="bg-[#f7f4ef] py-24">
      <div className="grid lg:grid-cols-2 items-center gap-7 px-6 lg:px-16">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            Hi, I&apos;m Lilac.
          </h2>

          <p className="text-sm leading-relaxed mb-8 ">
            I&apos;m committed to providing a safe and supportive environment
            where we can explore your thoughts, feelings, and behaviors. With
            empathy and guidance, we&apos;ll work together to navigate the
            challenges life throws your way.
          </p>

            <div className="flex justify-center">
            <button className="border border-[#2f3a1f] px-6 py-3 text-sm tracking-wide hover:bg-[#2f3a1f] hover:text-white transition">
                LET&apos;S CHAT →
            </button>
            </div>

        </div>

        {/* RIGHT IMAGE GROUP */}
        <div className="relative flex justify-center">

          {/* Main image */}
          <div className="relative w-[70%] h-[520px] lg:h-[600px]">
            <Image
              src="/im-lilac-main.jpeg"
              alt="Lilac holding flowers"
              fill
              className="object-cover rounded-t-full"
            />
          </div>

          {/* Small overlapping image */}
          <div className="absolute -bottom-10 -right-4 w-60 h-60">
            <Image
              src="/im-lilac-small.jpeg"
              alt="Flowers close-up"
              fill
              className="object-cover rounded-full"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
