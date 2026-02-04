export default function Challenges() {
  return (
    <section className="grid lg:grid-cols-2 bg-[#d6d3dc]">
      
      <div className="relative min-h-[500px]">
        <Image src="/woman.jpg" alt="" fill className="object-cover" />
      </div>

      <div className="p-12 flex flex-col justify-center">
        <h3 className="text-3xl mb-6 font-medium">
          You don’t have to do this all alone.
        </h3>
        <ul className="space-y-3 text-sm">
          <li>• Persistent feelings of sadness</li>
          <li>• Trouble focusing</li>
          <li>• Difficulty maintaining relationships</li>
          <li>• Feeling exhausted</li>
        </ul>
        <button className="mt-8 text-sm underline">
          WORK WITH ME →
        </button>
      </div>
    </section>
  );
}
import Image from "next/image";