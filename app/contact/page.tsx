import Navbar from "../components/Navbar";
import Image from "next/image";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact – Dr. Maya",
  description:
    "Reach out to schedule a free consultation with Dr. Maya, licensed psychologist in Santa Monica, CA.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-[#2f3a1f]">
      <Navbar />

      {/* Main Container */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 pt-10 ">

        {/* Split Layout: Image & Form */}
        <div className="flex flex-col lg:flex-row w-full mb-0">

          {/* Left: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
            {/* 
              By not giving an explicit height to the relative container in lg view,
              and using stretch alignment (which flex rows use by default),
              this div will naturally be exactly as tall as the form side.
              The `Image` with `fill` will cover this exact height.
            */}
            <Image
              src="/contact_table_setting.png"
              alt="Table setting with flowers and glasses"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: Form */}
          <div className="w-full lg:w-1/2 bg-[#F6F4EF] p-10 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center">

            <h1 className="font-heading text-4xl md:text-5xl tracking-wide mb-6 text-[#2f3a1f]">
              GET IN TOUCH
            </h1>

            <p className="text-sm leading-relaxed text-[#2f3a1f] opacity-80 mb-12">
              Ready to take the next step? Fill out the form below to schedule your free 20-minute phone consultation. I look forward to connecting with you and exploring how we can work together.
            </p>

            <form className="w-full">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Name*"
                  required
                  className="w-full bg-white px-5 py-4 text-sm text-[#2f3a1f] placeholder-[#8a7968] outline-none"
                />
                <input
                  type="email"
                  placeholder="E-Mail*"
                  required
                  className="w-full bg-white px-5 py-4 text-sm text-[#2f3a1f] placeholder-[#8a7968] outline-none"
                />
              </div>

              {/* Row 2: Phone */}
              <div className="mb-4">
                <input
                  type="tel"
                  placeholder="Phone*"
                  required
                  className="w-full bg-white px-5 py-4 text-sm text-[#2f3a1f] placeholder-[#8a7968] outline-none"
                />
              </div>

              {/* Row 3: Message */}
              <div className="mb-8">
                <textarea
                  placeholder="Message..."
                  rows={5}
                  required
                  className="w-full bg-white px-5 py-4 text-sm text-[#2f3a1f] placeholder-[#8a7968] outline-none resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#2f3a1f] text-white px-8 py-3 text-sm tracking-widest lowercase hover:bg-opacity-90 transition-opacity"
              >
                send message
              </button>
            </form>
          </div>
        </div>

      </section>
      <Footer />
    </main>
  );
}
