"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TeluguFaqSection, { TeluguFaq } from "@/components/TeluguFaqSection";
import TreatmentIllustration from "@/components/TreatmentIllustrations";

export interface FAQ { q: string; a: string }
export interface TreatmentItem { icon: string; title: string; desc: string }
export interface PhaseItem { phase: string; icon: string; points: string[] }

interface TreatmentPageProps {
  badge: string;
  h1: string;
  subtitle: string;
  illustration?: string;
  whatIsTitle: string;
  whatIsContent: string[];
  causes: { icon: string; cause: string }[];
  symptomsOrTypes: { title: string; desc: string }[];
  treatments: TreatmentItem[];
  phases: PhaseItem[];
  aftercareTips: string[];
  benefits?: string[];
  faqs: FAQ[];
  teluguFaqs?: TeluguFaq[];
  relatedLinks: { label: string; href: string }[];
  ctaHeading: string;
  disclaimer?: string;
}

export default function TreatmentPage({
  badge, h1, subtitle, illustration, whatIsTitle, whatIsContent, causes,
  symptomsOrTypes, treatments, phases, aftercareTips, benefits,
  faqs, teluguFaqs, relatedLinks, ctaHeading, disclaimer,
}: TreatmentPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                {badge}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{h1}</h1>
              <p className="text-lg text-white/75 max-w-2xl">{subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                  Book Consultation
                </Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            {illustration && (
              <div className="hidden lg:flex flex-shrink-0 w-64 h-64 rounded-3xl items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
                <TreatmentIllustration type={illustration} size={200} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Main */}
            <div className="lg:col-span-2 space-y-8">

              {/* What Is */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>{whatIsTitle}</h2>
                {whatIsContent.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed mb-3 last:mb-0" style={{ color: "#6B6B6B" }}>{p}</p>
                ))}
              </div>

              {/* Causes */}
              {causes.length > 0 && (
                <div className="bg-white rounded-2xl p-7 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Causes</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {causes.map((c) => (
                      <div key={c.cause} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                        <span className="text-xl">{c.icon}</span>
                        <span className="text-sm" style={{ color: "#2D2D2D" }}>{c.cause}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Symptoms / Types */}
              {symptomsOrTypes.length > 0 && (
                <div className="bg-white rounded-2xl p-7 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Symptoms &amp; Types</h2>
                  <div className="space-y-3">
                    {symptomsOrTypes.map((s) => (
                      <div key={s.title} className="flex gap-3 p-4 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                        <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#D45F3C" }} />
                        <div>
                          <p className="font-semibold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>{s.title}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Treatments */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>Treatment Options at Yashvini Clinic</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {treatments.map((t) => (
                    <div key={t.title} className="p-4 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <div className="text-2xl mb-2">{t.icon}</div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: "#2D2D2D" }}>{t.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>What to Expect</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {phases.map((p) => (
                    <div key={p.phase} className="p-4 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="text-2xl mb-2">{p.icon}</div>
                      <h3 className="font-bold text-sm mb-3" style={{ color: "#1A6B6B" }}>{p.phase}</h3>
                      <ul className="space-y-1.5">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-1.5 text-xs" style={{ color: "#6B6B6B" }}>
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {benefits && benefits.length > 0 && (
                <div className="bg-white rounded-2xl p-7 shadow-sm">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((b) => (
                      <div key={b} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ backgroundColor: "#FAF8F5", color: "#2D2D2D" }}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: "#1A6B6B" }}>✓</span>{b}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aftercare */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Aftercare &amp; Home Care</h2>
                <div className="space-y-2">
                  {aftercareTips.map((tip, i) => (
                    <div key={i} className="flex gap-3 text-sm p-2" style={{ color: "#6B6B6B" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "#1A6B6B" }}>{i + 1}.</span>{tip}
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                  <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                  {disclaimer ?? "Results vary from patient to patient. This content is for informational purposes only and is not a substitute for a personalised in-person medical consultation with Dr. Sireesha."}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: "#F5EDEA" }}>
                      <button className="w-full flex justify-between items-center px-5 py-4 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        <span className="font-medium text-sm pr-4" style={{ color: "#2D2D2D" }}>{faq.q}</span>
                        <span className="flex-shrink-0 text-lg" style={{ color: "#1A6B6B" }}>{openFaq === i ? "−" : "+"}</span>
                      </button>
                      {openFaq === i && <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{faq.a}</div>}
                    </div>
                  ))}
                </div>
              </div>

              {/* Telugu FAQs */}
              {teluguFaqs && teluguFaqs.length > 0 && (
                <TeluguFaqSection faqs={teluguFaqs} />
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full rounded-xl mb-4 overflow-hidden">
                  <Image src="/dr-sireesha.png" alt="Dr. Sireesha — MD Dermatology" width={300} height={200} className="w-full h-auto object-cover" />
                </div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</p>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>💬 WhatsApp</a>
                <a href="tel:+918712144205" className="block text-center mt-3 text-sm font-medium hover:underline" style={{ color: "#1A6B6B" }}>📞 +91 87121 44205</a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Related Treatments</h3>
                <ul className="space-y-2">
                  {relatedLinks.map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "#1A6B6B" }}>
                        <span>→</span>{r.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#1A6B6B" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">{ctaHeading}</h2>
          <p className="text-white/70 mb-7 text-sm">Book a consultation with Dr. Sireesha at Yashvini Skin &amp; Hair Clinic, Nandyala.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
            <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
