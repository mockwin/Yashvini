"use client";

import { useState } from "react";
import Link from "next/link";
import TeluguFaqSection from "@/components/TeluguFaqSection";
import TreatmentIllustration from "@/components/TreatmentIllustrations";

const faqs = [
  { q: "Is laser hair removal permanent?", a: "Laser hair removal provides long-term, significant hair reduction — typically 70–90% reduction in hair density after a full course of sessions. Some maintenance sessions may be needed annually. It is not termed 'permanent removal' but is the most effective long-term solution." },
  { q: "Is laser hair removal safe for Indian and South Indian skin tones?", a: "Yes, when performed correctly. South Indian skin (Fitzpatrick III–V) requires specific laser wavelengths — diode laser (810nm) or Nd:YAG (1064nm) — and appropriate settings to minimise the risk of burns or pigmentation changes. Dr. Sireesha uses equipment suitable for darker skin tones." },
  { q: "How many sessions of laser hair removal are needed?", a: "Most patients require 6–8 sessions spaced 4–6 weeks apart. The exact number depends on the treatment area, hair colour, hair thickness, and individual response. A consultation will give you a personalised estimate." },
  { q: "Is laser hair removal painful?", a: "Most patients describe the sensation as a warm rubber-band snap. Modern laser devices have built-in cooling systems that significantly reduce discomfort. A numbing cream can be applied before the procedure if needed." },
  { q: "What areas can be treated with laser hair removal?", a: "Common areas include upper lip, chin, underarms, bikini/Brazilian, legs, arms, back, chest, and abdomen. Almost any area with unwanted hair can be safely treated." },
  { q: "Can I get laser hair removal during summer in Andhra Pradesh?", a: "Yes, but strict sun protection is essential — avoid sun exposure for 2–4 weeks before and after each session, and apply SPF 50+ daily. Tanned skin increases the risk of side effects." },
  { q: "How much does laser hair removal cost in Nandyala?", a: "Cost depends on the area being treated and the number of sessions required. Please visit or call Yashvini Skin & Hair Clinic for a personalised consultation and transparent pricing." },
  { q: "What should I do before my laser hair removal session?", a: "Shave the treatment area 24 hours before your session. Avoid waxing or threading for 4–6 weeks before (the laser needs the hair root to be present). Avoid sun exposure and apply sunscreen regularly." },
];

export default function LaserHairRemovalPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
            <div className="flex-1">
              <nav className="text-xs text-white/50 mb-4">
                <Link href="/" className="hover:text-white">Home</Link> /{" "}
                <Link href="/cosmetology/laser-hair-removal" className="hover:text-white">Cosmetology</Link> /{" "}
                <span className="text-white/80">Laser Hair Removal</span>
              </nav>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                Cosmetology
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Laser Hair Removal in Nandyala</h1>
              <p className="text-lg text-white/75 max-w-2xl">
                Safe, clinically proven laser hair removal for South Indian skin tones at Yashvini Skin &amp; Hair Clinic. Long-term hair reduction with minimal downtime.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                  Book Consultation
                </Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
            <div className="hidden lg:flex flex-shrink-0 w-64 h-64 rounded-3xl items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <TreatmentIllustration type="laser-hair-removal" size={200} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* What is LHR */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>What is Laser Hair Removal?</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Laser hair removal is a medical procedure that uses concentrated beams of light (laser) to target and disable hair follicles, significantly reducing unwanted hair growth over a series of sessions. It is one of the most requested cosmetic procedures in India, offering a long-lasting alternative to waxing, threading, and shaving.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  At Yashvini Skin &amp; Hair Clinic, Dr. Sireesha uses laser technology appropriate for South Indian and Andhra Pradesh skin tones (Fitzpatrick skin types III–V), with built-in cooling for patient comfort and safety.
                </p>
              </div>

              {/* How it Works */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>How Does Laser Hair Removal Work?</h2>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Laser Energy Targets Melanin", desc: "The laser emits a specific wavelength of light that is absorbed by the melanin (pigment) in the hair shaft." },
                    { step: "2", title: "Heat Damages the Follicle", desc: "The absorbed energy converts to heat, which travels down the hair shaft to the follicle — disabling its ability to produce new hair." },
                    { step: "3", title: "Only Active Follicles are Targeted", desc: "Laser only affects hair in the active growth (anagen) phase — which is why multiple sessions are needed to catch all follicles in this phase." },
                    { step: "4", title: "Surrounding Skin is Protected", desc: "The integrated cooling system protects the skin surface, making the procedure safe and minimally uncomfortable." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 p-4 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: "#1A6B6B" }}>{s.step}</div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: "#2D2D2D" }}>{s.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment Areas */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Treatment Areas</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {["Upper Lip", "Chin & Jawline", "Underarms", "Bikini / Brazilian", "Full Legs", "Arms", "Back", "Chest / Abdomen", "Face (Full)", "Neck", "Feet & Toes", "Shoulders"].map((area) => (
                    <div key={area} className="flex items-center gap-2 p-3 rounded-xl text-sm" style={{ backgroundColor: "#FAF8F5", color: "#2D2D2D" }}>
                      <span style={{ color: "#C9A84C" }}>✓</span> {area}
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>What to Expect</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { phase: "Before", icon: "📋", points: ["Shave treatment area 24h before", "Avoid waxing/threading 4–6 weeks prior", "Avoid sun exposure for 2 weeks", "Apply sunscreen daily in the weeks before", "Arrive with clean, product-free skin"] },
                    { phase: "During", icon: "💡", points: ["Protective eyewear provided", "Cooling gel applied to treatment area", "Laser pulses applied — warm, snapping sensation", "Session duration: 15 min (small area) to 90 min (full legs)", "Minimal discomfort for most patients"] },
                    { phase: "After", icon: "🌿", points: ["Mild redness/swelling — settles in hours", "Avoid sun exposure for 48–72 hours", "Apply SPF 50+ daily", "No waxing between sessions — shaving only", "Next session in 4–6 weeks"] },
                  ].map((p) => (
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
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Benefits of Laser Hair Removal</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "70–90% long-term hair reduction after full course",
                    "Eliminates ingrown hairs caused by shaving or waxing",
                    "No downtime — return to daily activities immediately",
                    "Saves time and cost compared to lifetime waxing",
                    "Suitable for most body areas including sensitive areas",
                    "Safe for South Indian skin tones when performed correctly",
                  ].map((b) => (
                    <div key={b} className="flex items-start gap-3 p-3 rounded-xl text-sm" style={{ backgroundColor: "#FAF8F5", color: "#2D2D2D" }}>
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#1A6B6B" }}>✓</span> {b}
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                  <strong style={{ color: "#D45F3C" }}>Medical Disclaimer:</strong> Results of laser hair removal vary depending on hair colour, thickness, skin type, hormonal factors, and the number of sessions completed. This information is educational only. A proper consultation with Dr. Sireesha is required before proceeding with treatment.
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
              <TeluguFaqSection faqs={[
                {
                  q: "లేజర్ హెయిర్ రిమూవల్ శాశ్వతంగా జుట్టు తొలగిస్తుందా?",
                  a: "లేజర్ హెయిర్ రిమూవల్ దీర్ఘకాలిక hair reduction (70–90%) అందిస్తుంది. శాశ్వతంగా పూర్తిగా తొలగించదు, కానీ waxing, threading తో పోలిస్తే చాలా నయం. సాధారణంగా 6–8 sessions అవసరం.",
                  en: "Laser hair removal provides long-term hair reduction (70–90%). It does not permanently remove all hair, but is far superior to waxing or threading. Generally 6–8 sessions are needed.",
                },
                {
                  q: "లేజర్ హెయిర్ రిమూవల్ South Indian చర్మానికి సురక్షితమా?",
                  a: "అవును, సరైన laser మరియు settings వాడినప్పుడు సురక్షితం. South Indian skin (Fitzpatrick III–V) కు diode laser (810nm) లేదా Nd:YAG (1064nm) laser appropriate. Dr. Sireesha darker skin tones కు safe protocols వాడతారు.",
                  en: "Yes, it is safe when the right laser and settings are used. Diode laser (810nm) or Nd:YAG (1064nm) is appropriate for South Indian skin (Fitzpatrick III–V). Dr. Sireesha uses safe protocols for darker skin tones.",
                },
                {
                  q: "లేజర్ హెయిర్ రిమూవల్ కు ముందు ఏమి చేయాలి?",
                  a: "Session కు 24 గంటల ముందు shave చేయాలి. 4–6 వారాల ముందు waxing లేదా threading చేయకూడదు. సూర్యరశ్మి తగులకుండా ఉండాలి. Clean, product-free skin తో రావాలి.",
                  en: "Shave 24 hours before the session. Avoid waxing or threading for 4–6 weeks before. Avoid sun exposure. Come with clean, product-free skin.",
                },
              ]} />
            </div>

            {/* SIDEBAR */}
            <div className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full h-32 rounded-xl mb-4 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, #1A6B6B, #2D9B9B)" }}>👩‍⚕️</div>
                <h3 className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</h3>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>💬 WhatsApp</a>
                <a href="tel:+918712144205" className="block text-center mt-3 text-sm font-medium hover:underline" style={{ color: "#1A6B6B" }}>📞 +91 87121 44205</a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Related Treatments</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Chemical Peels", href: "/cosmetology/chemical-peels" },
                    { label: "HydraFacial", href: "/cosmetology/hydrafacial" },
                    { label: "Skin Brightening", href: "/cosmetology/skin-brightening" },
                    { label: "Microneedling", href: "/cosmetology/microneedling" },
                    { label: "Anti-Aging Treatment", href: "/cosmetology/anti-aging" },
                  ].map((r) => (
                    <li key={r.href}>
                      <Link href={r.href} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "#1A6B6B" }}>
                        <span>→</span> {r.label}
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
          <h2 className="text-2xl font-bold text-white mb-3">Ready for Smooth, Hair-Free Skin?</h2>
          <p className="text-white/70 mb-7 text-sm">Book a laser hair removal consultation with Dr. Sireesha at Yashvini Skin &amp; Hair Clinic, Nandyala.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
            <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
