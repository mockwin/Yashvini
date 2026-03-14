"use client";

import { useState } from "react";

export interface TeluguFaq {
  q: string;   // Telugu question
  a: string;   // Telugu answer
  en: string;  // English translation of answer
}

export default function TeluguFaqSection({ faqs }: { faqs: TeluguFaq[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm">
      {/* Heading */}
      <div className="mb-5">
        <h2 className="text-2xl font-bold" style={{ color: "#1A6B6B" }}>
          తెలుగులో సమాధానాలు
        </h2>
        <p className="text-xs mt-1" style={{ color: "#6B6B6B" }}>
          Frequently Asked Questions — in Telugu &amp; English
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border"
            style={{ borderColor: "#F5EDEA" }}
          >
            <button
              className="w-full flex justify-between items-start px-5 py-4 text-left gap-3"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="font-semibold text-sm leading-snug" style={{ color: "#2D2D2D" }}>
                {faq.q}
              </span>
              <span className="flex-shrink-0 text-lg" style={{ color: "#1A6B6B" }}>
                {open === i ? "−" : "+"}
              </span>
            </button>

            {open === i && (
              <div className="px-5 pb-5 space-y-2">
                <p className="text-sm leading-relaxed" style={{ color: "#2D2D2D" }}>
                  {faq.a}
                </p>
                <p className="text-xs leading-relaxed italic border-t pt-2" style={{ color: "#6B6B6B", borderColor: "#F5EDEA" }}>
                  {faq.en}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
