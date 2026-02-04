import Image from "next/image";

const specialties = [
  {
    title: "Self-Esteem",
    description:
      "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
    image: "/specialty-1.jpeg",
  },
  {
    title: "Relationships",
    description:
      "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
    image: "/specialty-2.jpeg",
  },
  {
    title: "Burnout",
    description:
      "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
    image: "/specialty-3.jpeg",
  },
];

export default function Specialties() {
  return (
    <section className="bg-[#f7f4ef] py-24">
      {/* Section heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-medium">
          My Specialties
        </h2>
      </div>

      {/* Cards */}
      <div className="grid gap-10 px-6 lg:px-16 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item) => (
          <div
            key={item.title}
            className="border border-[#2f3a1f] p-8 grid grid-rows-[1fr_auto]"
          >
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4 text-left">
                {item.title}
              </h3>

              <p className="text-sm leading-relaxed text-left">
                {item.description}
              </p>
            </div>

            <div className="relative w-40 h-40 mx-auto">
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
