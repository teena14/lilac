export default function Specialties() {
  return (
    <section className="px-6 lg:px-16 py-24">
      <h3 className="text-center text-3xl mb-16 font-medium">
        My Specialties
      </h3>

      <div className="grid md:grid-cols-3 gap-10">
        {["Self-Esteem", "Relationships", "Burnout"].map(item => (
          <div key={item} className="border p-6">
            <h4 className="mb-4 font-medium">{item}</h4>
            <p className="text-sm mb-6">
              Supporting text goes here.
            </p>
            <div className="relative h-56 rounded-full overflow-hidden">
              <Image src="/spec.jpg" alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import Image from "next/image";