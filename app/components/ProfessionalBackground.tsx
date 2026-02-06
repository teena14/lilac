'use client';

import { useState } from 'react';

const items = [
  {
    title: 'Education',
    content:
      'I hold a Master&apos;s degree in Counseling Psychology and have completed extensive clinical training in individual and group therapy.',
  },
  {
    title: 'Licensure',
    content:
      'I am a licensed mental health professional in the state of Minnesota and adhere to all ethical and professional standards.',
  },
  {
    title: 'Certifications',
    content:
      'I am certified in evidence-based therapeutic approaches including CBT and trauma-informed care.',
  },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f1eee8] py-24">
      <div className="max-w-3xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-center text-3xl lg:text-4xl font-medium mb-10">
          My Professional Background
        </h2>


        {/* Accordion */}
        <div className="border-t border-[#2f3a1f]">
          {items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.title} className="border-b border-[#2f3a1f]">
                <button
                  className="w-full flex items-center justify-between py-3 text-left"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                >
                  <span className="text-base">
                    {item.title}
                  </span>

                  <span className="text-xl">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-6 text-sm leading-relaxed max-w-xl">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
