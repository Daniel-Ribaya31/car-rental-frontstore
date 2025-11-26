"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  title?: string; 
  faqs: FAQItem[];
}

export function FAQAccordion({ title, faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={`mb-14`}>
      {/* Title (only renders if provided) */}
      {title && (
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
          {title}
        </h2>
      )}

      <div className="space-y-4" ref={containerRef}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer transition-all"
            onClick={() => toggleFAQ(index)}
          >
            {/* Question */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>

              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </div>

            {/* Answer with animation */}
            <div
              className={`
                overflow-hidden 
                transition-all duration-500 ease-in-out
                ${
                  openIndex === index
                    ? "max-h-96 opacity-100 translate-y-0 mt-3"
                    : "max-h-0 opacity-0 -translate-y-2"
                }
              `}
            >
              <p className="text-gray-600 text-sm sm:text-base pb-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}