"use client";

import { useState } from "react";
import Link from "next/link";
import TeluguFaqSection from "@/components/TeluguFaqSection";
import TreatmentIllustration from "@/components/TreatmentIllustrations";

const faqs = [
  { q: "What causes acne?", a: "Acne is caused by a combination of excess oil (sebum) production, clogged pores, bacteria (Cutibacterium acnes), and inflammation. Hormonal changes, stress, diet, and certain medications can trigger or worsen acne." },
  { q: "How long does acne treatment take to show results?", a: "Most patients see initial improvement in 4–6 weeks. Complete clearance typically takes 3–6 months depending on the type and severity of acne. Consistency with the prescribed treatment plan is essential." },
  { q: "Is acne treatment permanent?", a: "Treatments can significantly reduce and clear acne, but maintenance is often needed. Hormonal acne, in particular, may need ongoing management. Our goal is long-term control, not just short-term clearing." },
  { q: "Can adults get acne treatment at Yashvini Clinic?", a: "Absolutely. Adult acne is increasingly common, particularly among women in their 20s–40s. Dr. Sireesha treats acne in patients of all ages, from teenagers to adults." },
  { q: "What is the difference between acne and pimples?", a: "Pimples are a type of acne. Acne is a broader skin condition that includes blackheads, whiteheads, papules, pustules, nodules, and cysts. Not all acne looks the same." },
  { q: "Do chemical peels help with acne?", a: "Yes. Superficial chemical peels (salicylic acid, glycolic acid) can reduce active acne, unclog pores, and improve skin texture. Dr. Sireesha recommends peels as part of a comprehensive treatment plan." },
  { q: "Will my acne scars go away with treatment?", a: "Acne scars can be significantly improved with treatments such as chemical peels, microneedling, and laser therapy. Complete erasure is not always possible, but visible improvement of 40–70% is achievable." },
  { q: "Is it safe to pop pimples at home?", a: "No. Picking or popping pimples at home increases the risk of infection, worsening inflammation, and permanent scarring. Always consult a dermatologist for safe extraction or treatment." },
];

export default function AcneTreatmentPage() {
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
                <Link href="/skin-treatments/acne-treatment" className="hover:text-white">Skin Treatments</Link> /{" "}
                <span className="text-white/80">Acne Treatment</span>
              </nav>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                Skin Treatment
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Acne Treatment in Nandyala</h1>
              <p className="text-lg text-white/75 max-w-2xl">
                Evidence-based acne treatment for all skin types — from mild pimples to severe cystic acne — at Yashvini Skin &amp; Hair Clinic, Nandyala.
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
              <TreatmentIllustration type="acne" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* What is Acne */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>What is Acne?</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Acne is one of the most common skin conditions in India, affecting an estimated 85% of people at some point in their lives. It occurs when hair follicles become clogged with oil (sebum) and dead skin cells, leading to the formation of pimples, blackheads, whiteheads, cysts, or nodules — most commonly on the face, chest, back, and shoulders.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  While acne is often associated with teenage years, adult acne is increasingly common — especially among women due to hormonal fluctuations. Left untreated, acne can lead to permanent scarring and significant psychological impact on confidence and social wellbeing.
                </p>
              </div>

              {/* Causes */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Causes of Acne</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: "💧", cause: "Excess sebum (oil) production" },
                    { icon: "🦠", cause: "Cutibacterium acnes bacteria" },
                    { icon: "⚗️", cause: "Hormonal changes (androgens, PCOS)" },
                    { icon: "🍽️", cause: "High glycaemic diet (white rice, sugar, dairy)" },
                    { icon: "😰", cause: "Stress and sleep disruption" },
                    { icon: "💊", cause: "Certain medications (steroids, lithium)" },
                    { icon: "🧴", cause: "Comedogenic skincare or cosmetics" },
                    { icon: "👨‍👩‍👧", cause: "Genetic predisposition" },
                  ].map((c) => (
                    <div key={c.cause} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm" style={{ color: "#2D2D2D" }}>{c.cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Symptoms */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Types &amp; Symptoms</h2>
                <div className="space-y-3">
                  {[
                    { type: "Blackheads & Whiteheads", desc: "Clogged pores that appear dark (open) or white (closed) on the skin surface. Usually non-inflammatory." },
                    { type: "Papules & Pustules", desc: "Small raised red bumps (papules) or pus-filled spots (pustules). Moderate inflammatory acne." },
                    { type: "Nodules & Cysts", desc: "Large, painful, deep lumps under the skin. Severe acne — most likely to cause scarring if untreated." },
                    { type: "Acne Scars", desc: "Post-acne marks including red/brown discolouration (PIH), ice-pick, boxcar, or rolling scars." },
                  ].map((s) => (
                    <div key={s.type} className="flex gap-3 p-4 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#D45F3C" }} />
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: "#2D2D2D" }}>{s.type}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Acne Treatments at Yashvini Clinic</h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
                  Dr. Sireesha creates a personalised acne treatment plan based on your skin type, acne severity, and lifestyle. A combination of medical and procedural treatments often gives the best results.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "💊", title: "Topical Therapy", desc: "Retinoids, benzoyl peroxide, salicylic acid, clindamycin, and niacinamide-based formulations tailored to your skin." },
                    { icon: "💉", title: "Oral Medications", desc: "Antibiotics (doxycycline), isotretinoin (Accutane), or hormonal therapy for women — prescribed after thorough evaluation." },
                    { icon: "🧪", title: "Chemical Peels", desc: "Salicylic acid, glycolic, or Jessner's peels to unclog pores, reduce oil, and improve skin texture — in a series of sessions." },
                    { icon: "🔬", title: "Comedone Extraction", desc: "Professional, sterile extraction of blackheads and whiteheads — safer and more effective than home squeezing." },
                    { icon: "💡", title: "Laser & Light Therapy", desc: "Targeted light-based therapy to reduce acne-causing bacteria and inflammation in persistent or moderate-severe acne." },
                    { icon: "✨", title: "Acne Scar Treatment", desc: "Microneedling, fractional laser, chemical peels, and TCA CROSS for ice-pick, boxcar, and rolling scars." },
                  ].map((t) => (
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
                  {[
                    { phase: "Before", icon: "📋", points: ["Complete skin consultation with Dr. Sireesha", "Skin type and severity assessment", "Discussion of treatment goals and timeline", "Patch test if required for peels/laser"] },
                    { phase: "During", icon: "🏥", points: ["Gentle cleansing of the treatment area", "Application of prescribed topical or procedure", "Minimal discomfort — most procedures are well-tolerated", "30–60 minutes per session"] },
                    { phase: "After", icon: "🌿", points: ["Temporary redness (settles in hours–days)", "Strict sun protection required", "Follow prescribed skincare routine", "Follow-up in 4–6 weeks to review progress"] },
                  ].map((p) => (
                    <div key={p.phase} className="p-4 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="text-2xl mb-2">{p.icon}</div>
                      <h3 className="font-bold text-sm mb-3" style={{ color: "#1A6B6B" }}>{p.phase}</h3>
                      <ul className="space-y-1.5">
                        {p.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-1.5 text-xs" style={{ color: "#6B6B6B" }}>
                            <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Aftercare Instructions</h2>
                <div className="space-y-3">
                  {[
                    "Apply prescribed topical medications consistently — twice daily as directed",
                    "Use a non-comedogenic, fragrance-free moisturiser daily",
                    "Apply SPF 50+ sunscreen every morning — sun exposure worsens acne and post-acne marks",
                    "Avoid picking, squeezing, or touching your face unnecessarily",
                    "Wash your face twice daily with a gentle, soap-free cleanser",
                    "Avoid comedogenic makeup products — look for 'oil-free' or 'non-comedogenic' on labels",
                    "Keep follow-up appointments — acne treatment requires monitoring and adjustments",
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3 text-sm" style={{ color: "#6B6B6B" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "#1A6B6B" }}>{i + 1}.</span>
                      {tip}
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                  <strong style={{ color: "#D45F3C" }}>Medical Disclaimer:</strong> Results vary from patient to patient. Acne treatment timelines depend on the type and severity of acne, skin type, and adherence to the treatment plan. This content is for educational purposes only and is not a substitute for in-person medical consultation.
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>Frequently Asked Questions</h2>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: "#F5EDEA" }}>
                      <button
                        className="w-full flex justify-between items-center px-5 py-4 text-left"
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      >
                        <span className="font-medium text-sm pr-4" style={{ color: "#2D2D2D" }}>{faq.q}</span>
                        <span className="flex-shrink-0 text-lg" style={{ color: "#1A6B6B" }}>{openFaq === i ? "−" : "+"}</span>
                      </button>
                      {openFaq === i && (
                        <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{faq.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Telugu FAQs */}
              <TeluguFaqSection faqs={[
                {
                  q: "మొటిమలు ఎందుకు వస్తాయి?",
                  a: "మొటిమలు వచ్చే కారణాలు: హార్మోన్ మార్పులు, అధిక నూనె ఉత్పత్తి, బ్యాక్టీరియా, ఆహారం, మరియు జన్యు కారకాలు. PCOS ఉన్న మహిళల్లో హార్మోన్ వల్ల మొటిమలు ఎక్కువగా వస్తాయి.",
                  en: "Acne is caused by hormonal changes, excess oil production, bacteria, diet, and genetic factors. Women with PCOS are more prone to hormonal acne.",
                },
                {
                  q: "మొటిమలు తగ్గించడానికి ఏ చికిత్స మంచిది?",
                  a: "మొటిమలకు ఉత్తమ చికిత్స మీ చర్మ రకం మరియు తీవ్రతపై ఆధారపడుతుంది. యాష్వినీ క్లినిక్ లో చర్మవ్యాధి నిపుణుడు మీ చర్మాన్ని పరీక్షించి వ్యక్తిగత చికిత్స ప్రణాళికను ఇస్తారు.",
                  en: "The best acne treatment depends on your skin type and severity. The dermatologist at Yashvini Clinic will examine your skin and provide a personalised treatment plan.",
                },
                {
                  q: "మొటిమలు పోవడానికి ఎంత కాలం పడుతుంది?",
                  a: "చికిత్స ప్రారంభించిన తర్వాత 6–8 వారాల్లో మెరుగుదల కనిపిస్తుంది. పూర్తి ఫలితాలు 3–6 నెలలు పడవచ్చు. క్రమంగా మరియు నిరంతరంగా చికిత్స చేయడం అవసరం.",
                  en: "Improvement is visible within 6–8 weeks of starting treatment. Full results may take 3–6 months. Consistent treatment is essential.",
                },
                {
                  q: "మొటిమలు పేల్చడం సరైనదా?",
                  a: "వద్దు! మొటిమలు పేల్చడం వల్ల మచ్చలు పడతాయి, ఇన్ఫెక్షన్ వ్యాపిస్తుంది. ఎప్పుడూ మొటిమలు పేల్చకండి. క్లినిక్ లో నిపుణుడైన వ్యక్తి ద్వారా మాత్రమే extraction చేయించుకోండి.",
                  en: "No! Popping pimples causes scarring and spreads infection. Never pop pimples. Only allow extraction by a professional at a clinic.",
                },
              ]} />
            </div>

            {/* SIDEBAR */}
            <div className="space-y-5">
              {/* Doctor Card */}
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full h-32 rounded-xl mb-4 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, #1A6B6B, #2D9B9B)" }}>👩‍⚕️</div>
                <h3 className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</h3>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                  Book Appointment
                </Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#25D366" }}>
                  💬 WhatsApp
                </a>
                <a href="tel:+918712144205" className="block text-center mt-3 text-sm font-medium hover:underline" style={{ color: "#1A6B6B" }}>
                  📞 +91 87121 44205
                </a>
              </div>

              {/* Related Treatments */}
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Related Treatments</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Acne Scar Treatment", href: "/skin-treatments/acne-scars" },
                    { label: "Chemical Peels", href: "/cosmetology/chemical-peels" },
                    { label: "Microneedling", href: "/cosmetology/microneedling" },
                    { label: "Pigmentation Treatment", href: "/skin-treatments/pigmentation" },
                    { label: "Skin Brightening", href: "/cosmetology/skin-brightening" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Struggling with Acne? Let&apos;s Help.</h2>
          <p className="text-white/70 mb-7 text-sm">Book a consultation with Dr. Sireesha at Yashvini Skin &amp; Hair Clinic, Nandyala.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
              Book Appointment
            </Link>
            <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
