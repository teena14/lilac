import Image from "next/image";

export default function NotAlone() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[400px] md:min-h-full">
        <Image
          src="/not-alone.jpeg"
          alt="Woman sitting calmly"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-[#E9DEC8] flex flex-col">
        <div className="px-6 md:px-16 pt-24 pb-24">
          <h2 className="font-heading max-w-lg text-3xl md:text-4xl font-medium mb-6">
            You don&apos;t have to do this all alone.
          </h2>

          <p className="text-base mb-6">
            If you are facing any of these, there&apos;s hope:
          </p>

          <ul className="space-y-3 text-base mb-8 list-disc list-inside max-w-2xl">
            <li>Ongoing anxiety, worry, or feeling constantly on edge</li>
            <li>Difficulty slowing your thoughts or relaxing your body</li>
            <li>Feeling emotionally exhausted or burned out from prolonged stress</li>
            <li>Lingering effects of past experiences that still affect daily life</li>
            <li>A sense of always pushing through, even when you&apos;re worn down</li>
          </ul>

          <p className="text-base leading-relaxed max-w-lg">
            Working together, we focus on understanding what&apos;s been building beneath the
            surface and helping you feel more regulated, present, and connected in your daily life.
          </p>
        </div>

        <div className="group border-t border-[#2f3a1f] py-6 flex justify-center transition cursor-pointer hover:bg-[#6B5B4F] hover:text-white hover:border-[#6B5B4F]">
          <button className="text-base tracking-wide px-6 py-3 transition border-0 bg-transparent">
            WORK WITH ME →
          </button>
        </div>
      </div>
    </section>
  );
}
