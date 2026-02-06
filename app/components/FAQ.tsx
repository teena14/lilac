'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'Do you take insurance?',
    answer:
      'I do not accept insurance at this time. However, I can provide a superbill upon request that you may submit to your insurance provider.',
  },
  {
    question: 'What are your rates?',
    answer:
      'Session rates vary depending on the type and length of session. Please reach out directly for current pricing information.',
  },
  {
    question: 'Do you have any openings?',
    answer:
      'Availability changes regularly. The best way to find out is to contact me directly so we can discuss current openings.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f4ef] py-24">
      <div className="grid lg:grid-cols-2 gap-16 px-6 lg:px-16 items-start">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
      <div className="relative w-[70%] h-[520px] lg:h-[580px]">
          <Image
            src="/faq.jpeg"
            alt="Dried flowers"
            fill
            className="object-cover rounded-t-full"
          />
        </div>
        </div>

        {/* RIGHT FAQ */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl lg:text-4xl font-medium mb-12">
            FAQs
          </h2>

          <div className="border-t border-[#2f3a1f]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-[#2f3a1f]">
                  <button
                    className="w-full flex items-center justify-between py-6 text-left"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                  >
                    <span className="text-sm">
                      {faq.question}
                    </span>

                    <span className="text-xl">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-sm leading-relaxed max-w-md">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
