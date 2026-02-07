'use client';

import { useState } from 'react';

const items = [
  {
    title: 'Education',
    content:
      "Dr. Maya Reynolds holds a Doctor of Psychology (PsyD) degree and completed her graduate training with a focus on adult mental health, including anxiety, trauma, and stress-related concerns.",
  },
  {
    title: 'Licensure',
    content:
      "She is a licensed clinical psychologist in the state of California and provides psychotherapy to adults through her private practice in Santa Monica and via secure telehealth across California.",
  },
  {
    title: 'Clinical Training & Experience',
    content:
      "Dr. Maya completed extensive supervised clinical training working with adults navigating anxiety, panic, trauma, burnout, and the ongoing effects of chronic stress. Her experience includes both short-term, focused therapy and longer-term depth-oriented work.",
  },
  {
    title: 'Professional Development',
    content:
      "Dr. Maya maintains active licensure and stays aligned with current ethical standards and evidence-based practices in clinical psychology.",
  },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f1eee8] py-24">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <h2 className="font-heading text-center text-3xl md:text-4xl font-medium mb-8">
          My Professional Background
        </h2>

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
                  <div className="pb-6 text-base leading-relaxed max-w-xl">
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
