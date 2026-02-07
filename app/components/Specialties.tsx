import Image from "next/image";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "Support for ongoing worry, overthinking, physical tension, and feeling constantly on edge. Therapy focuses on helping you feel more regulated, steady, and at ease in daily life.",
    image: "/specialty-1.jpeg",
  },
  {
    title: "Trauma & Past Experiences",
    description:
      "Carefully paced therapy for experiences that still feel present. This includes both single events and long-standing patterns that continue to affect safety, confidence, or relationships.",
    image: "/specialty-2.jpeg",
  },
  {
    title: "Burnout & Chronic Stress",
    description:
      "Support for emotional exhaustion and ongoing pressure. I often work with professionals and high-achieving adults who feel disconnected after long periods of stress.",
    image: "/specialty-3.jpeg",
  },
];

export default function Specialties() {
  return (
    <section className="bg-[#f7f4ef] py-24">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-medium">
          My Specialties
        </h2>
      </div>

      <div className="grid gap-8 px-6 md:px-16 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="border border-[#2f3a1f] bg-[#E5E6E1] p-8 grid grid-rows-[1fr_auto]"
          >
            <div className="mb-8">
              <h3 className="font-heading text-lg font-medium mb-4 text-left">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-left">
                {item.description}
              </p>
            </div>

            <div className="relative w-60 h-60 mx-auto">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>

        ))}
      </div>
    </section>
  );
}
