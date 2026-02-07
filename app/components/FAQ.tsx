'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: "Is therapy right for me if I'm still functioning day to day?",
    answer:
      "Many people I work with are managing work, relationships, and responsibilities while feeling anxious, overwhelmed, or disconnected internally. You don't have to be in crisis to start therapy—if things feel heavier than you'd like to carry alone, this can be a supportive place to explore that.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "My approach is warm, collaborative, and paced with care. We'll work together to understand what's contributing to your current challenges while helping you feel more grounded and supported in daily life.",
  },
  {
    question: "Do you offer in-person or virtual sessions?",
    answer:
      "I offer in-person therapy in Santa Monica, California, as well as secure telehealth sessions for adults located in California. We can talk about which option feels like the best fit for you.",
  },
  {
    question: "How do I get started?",
    answer:
      "The first step is scheduling a free consultation. This gives us a chance to connect briefly, ask questions, and see whether working together feels like a good fit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#E9DEC8] py-24">
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-16 items-start">
        <div className="flex justify-center">
          <div className="relative w-[70%] h-[520px] md:h-[560px] lg:h-[580px]">
            <Image
              src="/faq.jpeg"
              alt="Dried flowers"
              fill
              className="object-cover rounded-t-full"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center h-full">
          <h2 className="font-heading text-3xl md:text-4xl font-medium mb-8">
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
                    <span className="text-base">
                      {faq.question}
                    </span>

                    <span className="text-xl">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pb-6 text-base leading-relaxed max-w-md">
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
