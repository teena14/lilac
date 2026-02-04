export default function FAQ() {
  return (
    <section className="grid lg:grid-cols-2 px-6 lg:px-16 py-24 gap-16">
      <div className="relative h-[400px]">
        <Image src="/faq.jpg" alt="" fill className="object-cover rounded-t-full" />
      </div>

      <div>
        <h3 className="text-3xl mb-8 font-medium">FAQs</h3>
        {[
          "Do you take insurance?",
          "What are your rates?",
          "Do you have openings?",
        ].map(q => (
          <div key={q} className="border-t py-4 flex justify-between">
            <span>{q}</span>
            <span>+</span>
          </div>
        ))}
      </div>
    </section>
  );
}
import Image from "next/image";