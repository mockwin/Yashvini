"use client";

import { useState } from "react";
import Link from "next/link";
import TeluguFaqSection from "@/components/TeluguFaqSection";
import TreatmentIllustration from "@/components/TreatmentIllustrations";

const faqs = [
  { q: "What is considered normal hair fall per day?", a: "Losing 50–100 hairs per day is considered normal as part of the hair growth cycle. If you notice more than this consistently — especially clumps on your pillow or comb — it is worth consulting a dermatologist." },
  { q: "What blood tests are needed for hair fall diagnosis?", a: "Dr. Sireesha typically recommends a complete blood count (CBC), serum ferritin (iron stores), thyroid function tests (TSH, T3, T4), Vitamin D, Vitamin B12, and zinc levels to identify nutritional or hormonal causes." },
  { q: "Can hair fall be stopped completely?", a: "In many cases — especially when the cause is nutritional deficiency or a temporary trigger — hair fall can be effectively controlled and reversed. Genetic hair loss (androgenetic alopecia) requires long-term management to slow progression." },
  { q: "How long does hair fall treatment take to show results?", a: "Most patients notice reduced shedding within 6–8 weeks of starting treatment. Visible new growth takes 3–6 months. PRP therapy results become visible at 3–4 months after the first session." },
  { q: "Is hair fall treatment available for women in Nandyala?", a: "Yes. Female hair thinning and hair fall is commonly treated at Yashvini Clinic. Dr. Sireesha specialises in both male and female pattern hair loss and provides gender-specific treatment plans." },
  { q: "What is the difference between PRP and minoxidil for hair loss?", a: "Minoxidil is a topical or oral medication applied daily to stimulate hair growth. PRP (Platelet-Rich Plasma) is an in-clinic procedure using your own growth factors. Both can be used in combination for better results." },
  { q: "Does stress cause hair fall?", a: "Yes. Severe stress triggers a condition called telogen effluvium, where a large number of hair follicles prematurely enter the resting (shedding) phase. This typically occurs 2–3 months after the stressful event." },
  { q: "Can I prevent hair fall with diet?", a: "A diet rich in iron, zinc, biotin, Vitamin D, and protein helps support healthy hair growth. However, supplementation and medical treatment may be needed if blood tests reveal deficiencies." },
];

export default function HairFallPage() {
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
                <span className="text-white/80">Hair Fall Treatment</span>
              </nav>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                Hair Treatment
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hair Fall Treatment in Nandyala</h1>
              <p className="text-lg text-white/75 max-w-2xl">
                Comprehensive diagnosis and treatment for hair loss at Yashvini Skin &amp; Hair Clinic. Dr. Sireesha identifies the root cause and creates a personalised treatment plan.
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
              <TreatmentIllustration type="hair-fall" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              {/* What is hair fall */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Understanding Hair Fall</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>
                  Hair fall (medically known as alopecia or effluvium depending on the type) is one of the most common concerns among patients visiting Yashvini Skin &amp; Hair Clinic. While losing 50–100 hairs daily is normal, noticeable thinning, bald patches, or a widening hair part line are signs that warrant professional attention.
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                  Hair loss affects both men and women across all age groups and has multiple causes — from nutritional deficiencies and thyroid disorders to hormonal changes and genetic predisposition. Correct diagnosis is the essential first step before any treatment.
                </p>
              </div>

              {/* Causes */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Common Causes of Hair Fall</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: "🩸", cause: "Iron deficiency (low ferritin)" },
                    { icon: "🦋", cause: "Thyroid disorders (hypo/hyperthyroidism)" },
                    { icon: "🥗", cause: "Nutritional deficiencies (Vit D, B12, zinc, protein)" },
                    { icon: "⚗️", cause: "Hormonal imbalance (PCOS, post-pregnancy)" },
                    { icon: "😰", cause: "Physical or emotional stress (telogen effluvium)" },
                    { icon: "🧬", cause: "Genetic / hereditary hair loss (androgenetic alopecia)" },
                    { icon: "💊", cause: "Medication side effects (chemotherapy, blood thinners)" },
                    { icon: "🔬", cause: "Autoimmune (alopecia areata)" },
                    { icon: "🍽️", cause: "Crash dieting or extreme calorie restriction" },
                    { icon: "🌊", cause: "Post-illness hair shedding (post-COVID, post-fever)" },
                  ].map((c) => (
                    <div key={c.cause} className="flex items-start gap-3 p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <span className="text-xl">{c.icon}</span>
                      <span className="text-sm" style={{ color: "#2D2D2D" }}>{c.cause}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diagnosis */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>How We Diagnose Hair Loss</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                  At Yashvini Clinic, Dr. Sireesha uses a thorough diagnostic approach before recommending any treatment — because treating hair loss without knowing the cause is ineffective.
                </p>
                <div className="space-y-3">
                  {[
                    { step: "1", title: "Detailed History", desc: "When did hair fall start? Family history, diet, medications, stress, recent illness, and pregnancy history." },
                    { step: "2", title: "Scalp Examination", desc: "Visual and dermoscopic examination of the scalp and hair follicles to assess pattern and density." },
                    { step: "3", title: "Pull Test", desc: "Gentle pull to assess the degree of active shedding from the scalp." },
                    { step: "4", title: "Blood Tests", desc: "CBC, ferritin, thyroid panel, Vitamin D, B12, zinc — to identify treatable underlying causes." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4 p-4 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0" style={{ backgroundColor: "#1A6B6B" }}>{s.step}</div>
                      <div>
                        <p className="font-semibold text-sm mb-1" style={{ color: "#2D2D2D" }}>{s.title}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatments */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-5" style={{ color: "#1A6B6B" }}>Hair Fall Treatments at Yashvini Clinic</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: "🩺", title: "Nutritional Treatment", desc: "Iron, Vitamin D, B12, and zinc supplementation based on blood test results. Dietary counselling." },
                    { icon: "💊", title: "Topical Minoxidil", desc: "FDA-approved topical treatment applied to the scalp daily. Available in 2% (women) and 5% (men) strengths." },
                    { icon: "💉", title: "PRP Therapy", desc: "Platelet-Rich Plasma from your own blood injected into the scalp to stimulate dormant follicles and reduce shedding." },
                    { icon: "🔬", title: "Mesotherapy", desc: "Microinjections of vitamins, minerals, and growth factors directly into the scalp for targeted nourishment." },
                    { icon: "💡", title: "Low-Level Laser Therapy", desc: "Photobiomodulation to improve scalp circulation and stimulate follicle activity." },
                    { icon: "⚗️", title: "Hormonal Management", desc: "For PCOS-related or post-menopausal hair loss, hormonal evaluation and appropriate management." },
                  ].map((t) => (
                    <div key={t.title} className="p-4 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <div className="text-2xl mb-2">{t.icon}</div>
                      <h3 className="font-bold text-sm mb-1" style={{ color: "#2D2D2D" }}>{t.title}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Home Care &amp; Aftercare Tips</h2>
                <div className="space-y-2">
                  {[
                    "Use a gentle, sulfate-free shampoo — over-shampooing or harsh shampoos worsen hair loss",
                    "Avoid tight hairstyles (tight braids, ponytails) that cause traction alopecia",
                    "Reduce heat styling — frequent blow-drying, straightening, and curling weaken hair shafts",
                    "Eat a protein-rich diet — hair is made of keratin, a protein. Include eggs, lentils, nuts, and dairy",
                    "Manage stress through exercise, sleep, and relaxation techniques",
                    "Apply prescribed minoxidil or topical medication consistently — daily use is critical",
                    "Attend follow-up appointments — hair loss treatment requires monitoring over several months",
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3 text-sm p-2" style={{ color: "#6B6B6B" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "#1A6B6B" }}>{i + 1}.</span>
                      {tip}
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                  <strong style={{ color: "#D45F3C" }}>Medical Disclaimer:</strong> Hair loss treatment outcomes vary depending on the cause, type, and duration of hair loss, patient age, and compliance with the treatment plan. This information is educational only and not a substitute for a personalised medical consultation.
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
                  q: "జుట్టు రాలుట ఎందుకు జరుగుతుంది?",
                  a: "జుట్టు రాలడానికి అనేక కారణాలు ఉన్నాయి: పోషకాహార లోపం (ఇనుము, విటమిన్ D, B12), థైరాయిడ్ సమస్యలు, హార్మోన్ మార్పులు, ఒత్తిడి, PCOS, మరియు జన్యు కారకాలు. రక్త పరీక్ష ద్వారా కారణం నిర్ధారించవచ్చు.",
                  en: "Hair fall can occur due to nutritional deficiency (iron, vitamin D, B12), thyroid problems, hormonal changes, stress, PCOS, and genetic factors. Blood tests can confirm the cause.",
                },
                {
                  q: "జుట్టు రాలుట ఆగడానికి ఏం చేయాలి?",
                  a: "ముందుగా వైద్యుడిని కలవడం అవసరం. రక్త పరీక్షలు చేయించుకోవాలి. పోషకాహారం, మందులు, PRP చికిత్స, మరియు తల చర్మ చికిత్స అవసరాన్ని బట్టి సూచించబడతాయి.",
                  en: "First, see a doctor. Get blood tests. Nutritional support, medications, PRP therapy, and scalp treatment will be recommended based on the cause.",
                },
                {
                  q: "PRP చికిత్స జుట్టుకు ఉపయోగమా?",
                  a: "అవును. PRP (Platelet-Rich Plasma) చికిత్స నిద్రాణంగా ఉన్న జుట్టు వేర్లను మేల్కొల్పడానికి సహాయపడుతుంది. సాధారణంగా 3–4 sessions అవసరమవుతాయి, ప్రతి 4–6 వారాలకు ఒకసారి.",
                  en: "Yes. PRP (Platelet-Rich Plasma) therapy helps awaken dormant hair follicles. Generally 3–4 sessions are needed, once every 4–6 weeks.",
                },
                {
                  q: "ప్రసవం తర్వాత జుట్టు రాలుట సాధారణమా?",
                  a: "అవును. ప్రసవం తర్వాత 2–4 నెలలకు జుట్టు రాలుట చాలా సాధారణం. ఇది telogen effluvium అని పిలుస్తారు. సాధారణంగా 6–12 నెలల్లో జుట్టు తిరిగి పెరుగుతుంది. పోషక సప్లిమెంట్లు తీసుకోవడం సహాయపడుతుంది.",
                  en: "Yes. Hair fall 2–4 months after delivery is very common, called telogen effluvium. Hair generally regrows within 6–12 months. Taking nutritional supplements helps.",
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
                    { label: "PRP Hair Therapy", href: "/hair-treatments/prp-therapy" },
                    { label: "Alopecia Treatment", href: "/hair-treatments/alopecia" },
                    { label: "Dandruff Treatment", href: "/hair-treatments/dandruff" },
                    { label: "Hair Thinning", href: "/hair-treatments/hair-thinning" },
                    { label: "Telogen Effluvium", href: "/hair-treatments/telogen-effluvium" },
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
          <h2 className="text-2xl font-bold text-white mb-3">Concerned About Hair Fall?</h2>
          <p className="text-white/70 mb-7 text-sm">Get a proper diagnosis and personalised treatment plan from Dr. Sireesha at Yashvini Clinic, Nandyala.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
            <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
