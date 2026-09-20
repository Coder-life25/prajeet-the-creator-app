"use client";

import { useState } from "react";

export default function FAQAccordion({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="animate-fade-up animation-delay-100 space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-2xl border border-dark-800/50 bg-dark-800/20 overflow-hidden transition-colors hover:border-dark-700/50 relative"
        >
          <button
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
            className="w-full px-5 py-5 sm:px-6 flex items-center justify-between text-left hover:bg-dark-800/30 transition-colors"
          >
            <span className="text-base font-semibold text-white pr-4">
              {faq.question}
            </span>
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full bg-dark-800/50 flex items-center justify-center transition-transform duration-300 ${openFaq === i ? "rotate-180 bg-primary-500/10 text-primary-400" : "text-dark-400"}`}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openFaq === i ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-5 sm:px-6 pb-5 pt-2">
              <p className="text-base text-dark-300 leading-relaxed border-t border-dark-800/50 pt-4">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
