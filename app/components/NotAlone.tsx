import Image from "next/image";

export default function NotAlone() {
  return (
    <section className="grid lg:grid-cols-2">

      {/* LEFT IMAGE */}
      <div className="relative min-h-[400px] lg:min-h-full">
        <Image
          src="/not-alone.jpeg"
          alt="Woman sitting calmly"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="bg-[#cfcbd6] flex flex-col">

        {/* Content */}
        <div className="px-6 lg:px-20 pt-20 pb-16 max-w-lg">
          <h2 className="text-3xl lg:text-4xl font-medium mb-6">
            You don&apos;t have to do this all alone.
          </h2>

          <p className="text-sm mb-6">
            If you are facing any of these, there&apos;s hope:
          </p>

          <ul className="space-y-3 text-sm mb-8 list-disc list-inside">
            <li>Persistent feelings of sadness or hopelessness</li>
            <li>Trouble focusing or making decisions</li>
            <li>Difficulty maintaining relationships</li>
            <li>Feeling constantly exhausted or unmotivated</li>
            <li>A pervasive sense of being overwhelmed</li>
          </ul>

          <p className="text-sm leading-relaxed">
            With empathy and guidance, we&apos;ll work together to navigate
            the challenges life throws your way.
          </p>
        </div>

        {/* Divider + CTA */}
        <div className="border-t border-[#2f3a1f] py-6 flex justify-center">
          <button className="text-sm tracking-wide hover:underline">
            WORK WITH ME →
          </button>
        </div>

      </div>
    </section>
  );
}
