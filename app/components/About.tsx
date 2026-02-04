export default function About() {
  return (
    <section className="grid lg:grid-cols-2 gap-16 px-6 lg:px-16 py-24">
      <div>
        <h3 className="text-3xl font-medium mb-6">Hi, I’m Lilac.</h3>
        <p className="text-sm leading-relaxed max-w-md">
          I'm committed to providing a safe and supportive environment...
        </p>
        <button className="mt-8 border px-6 py-3 text-sm">
          LET'S CHAT →
        </button>
      </div>

      <div className="relative h-[420px]">
        <Image
          src="/about.jpg"
          alt=""
          fill
          className="object-cover rounded-t-full"
        />
      </div>
    </section>
  );
}
import Image from "next/image";