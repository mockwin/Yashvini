"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const treatments = [
  { icon: "🧴", title: "Acne Treatment", desc: "Effective solutions for pimples, blackheads, and acne marks", href: "/skin-treatments/acne-treatment" },
  { icon: "💆", title: "Hair Fall Treatment", desc: "Diagnose and treat hair loss caused by nutrition, hormones, or genetics", href: "/hair-treatments/hair-fall-treatment" },
  { icon: "🌟", title: "Pigmentation", desc: "Even out skin tone and reduce dark patches on face and body", href: "/skin-treatments/pigmentation" },
  { icon: "✨", title: "Laser Hair Removal", desc: "Permanent hair reduction using safe, clinically proven laser technology", href: "/cosmetology/laser-hair-removal" },
  { icon: "💉", title: "PRP Hair Therapy", desc: "Platelet-rich plasma to stimulate dormant follicles and reduce hair thinning", href: "/hair-treatments/prp-therapy" },
  { icon: "🌿", title: "Chemical Peels", desc: "Exfoliate and renew skin texture, tone, and radiance in a series of sessions", href: "/cosmetology/chemical-peels" },
];

const specialties = [
  { icon: "🏥", title: "Dermatology", desc: "Medical diagnosis and treatment of skin conditions including acne, eczema, psoriasis, vitiligo, fungal infections, and more.", href: "/skin-treatments/acne-treatment" },
  { icon: "💈", title: "Trichology", desc: "Specialised care for hair and scalp conditions — hair fall, dandruff, alopecia, PRP therapy, and hair thinning.", href: "/hair-treatments/hair-fall-treatment" },
  { icon: "💎", title: "Cosmetology", desc: "Advanced aesthetic treatments including chemical peels, laser hair removal, microneedling, HydraFacial, and anti-aging.", href: "/cosmetology/laser-hair-removal" },
];

const faqs = [
  { q: "Is Yashvini Skin & Hair Clinic open on weekends?", a: "Yes, the clinic is open Monday to Saturday from 9 AM to 7 PM, and on Sundays from 10 AM to 1 PM. We recommend calling ahead to confirm appointment availability." },
  { q: "What is the cost of PRP hair treatment in Nandyala?", a: "The cost of PRP hair treatment varies depending on the number of sessions required and individual assessment. Please contact us or visit the clinic for a personalised consultation and accurate pricing." },
  { q: "Do you treat children with skin conditions at Yashvini Clinic?", a: "Yes, Dr. Sireesha treats patients of all ages, including children with conditions such as eczema, skin allergies, fungal infections, and other paediatric skin concerns." },
  { q: "How long does acne treatment take to show results?", a: "Most patients see initial improvement within 4–6 weeks. Complete clearance may take 3–6 months depending on the severity. Consistent follow-up and adherence to the prescribed treatment plan is key." },
  { q: "Do you offer laser hair removal in Nandyala?", a: "Yes, we offer safe laser hair removal suitable for South Indian skin tones. Most patients require 6–8 sessions spaced 4–6 weeks apart for optimal results." },
  { q: "Can I book an appointment online at Yashvini Clinic?", a: "You can request an appointment via our Contact page, or directly message us on WhatsApp at +91 87121 44205. Walk-ins are also welcome subject to availability." },
];

const testimonials = [
  { name: "Priya R.", condition: "Acne Treatment", stars: 5, text: "After trying many face washes and home remedies, I finally found a treatment that works. Dr. Sireesha explained everything clearly and I started seeing results within a month. Very grateful!" },
  { name: "Ravi K.", condition: "Hair Fall Treatment", stars: 5, text: "I was losing a lot of hair and tried several things on my own. After proper blood tests and a treatment plan here, my hair fall has reduced significantly in just 3 months." },
  { name: "Sunitha M.", condition: "Chemical Peel & HydraFacial", stars: 5, text: "The HydraFacial and chemical peel sessions have genuinely transformed my skin. The clinic is clean, professional, and the doctor takes time to explain every step. Highly recommend." },
];

const blogPosts = [
  { title: "Why More Indians Are Losing Hair in Their 20s", excerpt: "Stress, nutrition deficiency, and hormonal changes are contributing to early hair loss. Here's what dermatologists recommend.", href: "/blog/hair-loss-in-20s" },
  { title: "South Indian Skin & Melasma: What Actually Works", excerpt: "Melasma is especially common in Fitzpatrick III–V skin types. We break down the most effective, safe treatment options.", href: "/blog/melasma-south-indian-skin" },
  { title: "Fungal Infections: Why Steroid Creams Are Making It Worse", excerpt: "The widespread misuse of steroid-antifungal combination creams in India is causing a silent epidemic. Here's what you need to know.", href: "/blog/fungal-infection-steroid-creams" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 tracking-wide" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
                🏥 Nandyala&apos;s Trusted Dermatology Clinic
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Expert Skin &amp; Hair Care in{" "}
                <span style={{ color: "#C9A84C" }}>Nandyala</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Advanced dermatology, trichology, and cosmetic treatments by{" "}
                <strong className="text-white">Dr. Sireesha, MD Dermatology</strong>. Personalised, evidence-based care for every skin and hair concern.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D45F3C" }}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:+918712144205"
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-white/60 text-white hover:border-white transition-colors"
                >
                  📞 Call Now
                </a>
              </div>
              <p className="mt-6 text-sm text-white/50">
                Consultations available in Telugu &amp; English
              </p>
            </div>
            {/* Stats card */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {[
                { num: "5000+", label: "Patients Treated" },
                { num: "15+", label: "Years of Experience" },
                { num: "25+", label: "Treatments Offered" },
                { num: "4.9 ★", label: "Patient Rating" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "rgba(255,255,255,0.08)", backdropFilter: "blur(10px)" }}>
                  <div className="text-3xl font-bold mb-1" style={{ color: "#C9A84C" }}>{s.num}</div>
                  <div className="text-sm text-white/70">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE TRUST BAR */}
      <section className="lg:hidden bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-4">
          {[
            { num: "5000+", label: "Patients" },
            { num: "15+", label: "Years Exp." },
            { num: "25+", label: "Treatments" },
            { num: "4.9 ★", label: "Rating" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#1A6B6B" }}>{s.num}</div>
              <div className="text-xs" style={{ color: "#6B6B6B" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALTIES */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Our Specialties</h2>
            <p className="text-base" style={{ color: "#6B6B6B" }}>Comprehensive skin and hair care under one roof</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {specialties.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-7 shadow-sm border-t-4 hover:shadow-md transition-shadow" style={{ borderColor: "#1A6B6B" }}>
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: "#1A6B6B" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                <Link href={s.href} className="text-sm font-semibold hover:underline" style={{ color: "#D45F3C" }}>
                  Explore Treatments →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TREATMENTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Common Treatments We Offer</h2>
            <p className="text-base" style={{ color: "#6B6B6B" }}>Backed by dermatological research and personalised for your skin</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <div key={t.title} className="rounded-2xl p-6 hover:shadow-md transition-shadow border" style={{ backgroundColor: "#FAF8F5", borderColor: "#F5EDEA" }}>
                <div className="text-3xl mb-3">{t.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: "#2D2D2D" }}>{t.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>{t.desc}</p>
                <Link href={t.href} className="text-sm font-semibold hover:underline" style={{ color: "#1A6B6B" }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT DOCTOR */}
      <section className="py-16" style={{ backgroundColor: "#F5EDEA" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Photo */}
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden">
              <Image
                src="/dr-sireesha.png"
                alt="Dr. Sireesha — MD Dermatology, Yashvini Skin & Hair Clinic, Nandyala"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Text */}
            <div className="order-1 lg:order-2">
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>Meet Your Dermatologist</div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>Dr. Sireesha</h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                Dr. Sireesha holds an MD in Dermatology and brings extensive clinical experience in both medical and aesthetic dermatology. She has treated thousands of patients across Nandyala and Andhra Pradesh for conditions ranging from acne and hair loss to advanced cosmetic concerns.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#6B6B6B" }}>
                Her approach is personalised, evidence-based, and grounded in patient education — ensuring every patient understands their condition and treatment plan.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {["MD Dermatology", "IADVL Member", "15+ Years Exp.", "Telugu & English"].map((badge) => (
                  <span key={badge} className="px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ backgroundColor: "#1A6B6B" }}>
                    {badge}
                  </span>
                ))}
              </div>
              <Link href="/about" className="inline-block px-5 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "#1A6B6B" }}>
                View Full Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Why Patients Choose Yashvini Clinic</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔬", title: "Evidence-Based Treatment", desc: "All treatments follow standard dermatological protocols — no guesswork, no over-prescribing." },
              { icon: "⚙️", title: "Advanced Equipment", desc: "Modern laser, dermatoscopy, and procedure equipment for accurate diagnosis and treatment." },
              { icon: "🗣️", title: "Telugu & English", desc: "Consultations available in both Telugu and English, making care accessible to all patients in Nandyala." },
              { icon: "💚", title: "Affordable Care", desc: "Transparent pricing and quality dermatology care made accessible to the community of Nandyala." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl p-6 text-center" style={{ backgroundColor: "#FAF8F5" }}>
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold mb-2 text-sm" style={{ color: "#1A6B6B" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TELUGU SECTION */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — Telugu intro */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>
                తెలుగులో సంప్రదించండి · Consult in Telugu
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: "#2D2D2D" }}>
                Nandyala లో నిపుణుడైన చర్మవ్యాధి వైద్యుడు
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>
                యాష్వినీ స్కిన్ &amp; హెయిర్ క్లినిక్ Nandyala లో అత్యాధునిక చర్మవ్యాధి చికిత్స మరియు కాస్మెటిక్ ట్రీట్మెంట్ అందిస్తుంది. మా అనుభవజ్ఞులైన చర్మవ్యాధి నిపుణుడు మీ వ్యక్తిగత అవసరాలకు తగ్గ చికిత్స ప్రణాళికను రూపొందిస్తారు.
              </p>
              <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>
                <em>Yashvini Skin &amp; Hair Clinic in Nandyala offers modern dermatology and cosmetic treatments. Our experienced dermatologist designs personalised treatment plans for every patient.</em>
              </p>

              {/* Telugu keyword pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {[
                  { te: "మొటిమలు చికిత్స", en: "Acne Treatment" },
                  { te: "జుట్టు రాలుట చికిత్స", en: "Hair Fall Treatment" },
                  { te: "మెలాస్మా చికిత్స", en: "Melasma Treatment" },
                  { te: "చుండ్రు చికిత్స", en: "Dandruff Treatment" },
                  { te: "PRP జుట్టు చికిత్స", en: "PRP Hair Therapy" },
                  { te: "కెమికల్ పీల్", en: "Chemical Peel" },
                  { te: "లేజర్ హెయిర్ రిమూవల్", en: "Laser Hair Removal" },
                  { te: "ఫంగల్ ఇన్ఫెక్షన్ చికిత్స", en: "Fungal Infection" },
                ].map((kw) => (
                  <span
                    key={kw.te}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border"
                    style={{ borderColor: "#1A6B6B", color: "#1A6B6B", backgroundColor: "white" }}
                    title={kw.en}
                  >
                    {kw.te}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "#D45F3C" }}
                >
                  అపాయింట్మెంట్ బుక్ చేయండి
                </Link>
                <a
                  href="https://wa.me/918712144205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg font-semibold border-2 transition-colors hover:opacity-80"
                  style={{ borderColor: "#1A6B6B", color: "#1A6B6B" }}
                >
                  💬 మాతో మాట్లాడండి
                </a>
              </div>
            </div>

            {/* Right — bilingual voice-search FAQs */}
            <div className="space-y-3">
              <p className="text-sm font-semibold mb-3" style={{ color: "#2D2D2D" }}>
                తెలుగులో సమాధానాలు · Answers in Telugu
              </p>
              {[
                {
                  q: "Nandyala లో మంచి చర్మ వైద్యుడు ఎవరు?",
                  a: "యాష్వినీ స్కిన్ & హెయిర్ క్లినిక్ లో Dr. Sireesha (MD Dermatology) అనుభవజ్ఞులైన చర్మవ్యాధి నిపుణుడు. తెలుగు మరియు ఇంగ్లీషులో సంప్రదింపులు అందుబాటులో ఉన్నాయి.",
                  en: "Dr. Sireesha, MD Dermatology at Yashvini Skin & Hair Clinic is an experienced dermatologist in Nandyala. Consultations available in Telugu and English.",
                },
                {
                  q: "జుట్టు రాలుట ఆపడానికి ఏం చేయాలి?",
                  a: "ముందుగా వైద్యుడిని కలవడం అవసరం. రక్త పరీక్షలు (ఇనుము, విటమిన్ D, థైరాయిడ్) చేయించుకోవాలి. కారణాన్ని బట్టి చికిత్స నిర్ణయించబడుతుంది.",
                  en: "See a doctor first. Get blood tests (iron, vitamin D, thyroid). Treatment is decided based on the identified cause.",
                },
                {
                  q: "మొహంపై నల్లటి మచ్చలు ఎందుకు వస్తాయి?",
                  a: "మొహంపై చీకటి మచ్చలు మెలాస్మా వల్ల రావచ్చు. హార్మోన్ మార్పులు, సూర్యరశ్మి బహిర్గతం ప్రధాన కారణాలు. ఫెయిర్నెస్ క్రీమ్ కాదు — వైద్యపరమైన చికిత్స అవసరం.",
                  en: "Dark face patches are usually melasma, caused by hormonal changes and sun exposure. Fairness creams don't work — medical treatment is needed.",
                },
                {
                  q: "కెమికల్ పీల్ సురక్షితమా?",
                  a: "అవును, నిపుణుడైన చర్మవ్యాధి వైద్యుడి పర్యవేక్షణలో కెమికల్ పీల్ సురక్షితంగా ఉంటుంది. Indian చర్మానికి తగిన విధంగా Dr. Sireesha సురక్షిత పద్ధతిలో చేస్తారు.",
                  en: "Yes, chemical peels are safe when performed under the supervision of a qualified dermatologist. Dr. Sireesha uses safe protocols adapted for Indian skin.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow-sm border" style={{ borderColor: "#F5EDEA" }}>
                  <p className="font-semibold text-sm mb-2" style={{ color: "#1A6B6B" }}>{item.q}</p>
                  <p className="text-sm leading-relaxed mb-1" style={{ color: "#2D2D2D" }}>{item.a}</p>
                  <p className="text-xs italic" style={{ color: "#6B6B6B" }}>{item.en}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>What Our Patients Say</h2>
            <p style={{ color: "#6B6B6B" }}>Real experiences from patients in and around Nandyala</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <span key={i} style={{ color: "#C9A84C" }}>★</span>
                  ))}
                </div>
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "#6B6B6B" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-sm" style={{ color: "#2D2D2D" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "#1A6B6B" }}>{t.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold" style={{ color: "#2D2D2D" }}>Skin &amp; Hair Care Tips</h2>
              <p className="mt-1 text-sm" style={{ color: "#6B6B6B" }}>Educational articles by Dr. Sireesha</p>
            </div>
            <Link href="/blog" className="text-sm font-semibold hover:underline hidden sm:block" style={{ color: "#1A6B6B" }}>
              View All Articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((p) => (
              <div key={p.title} className="rounded-2xl overflow-hidden border hover:shadow-md transition-shadow" style={{ borderColor: "#F5EDEA" }}>
                <div className="h-40 flex items-center justify-center text-5xl" style={{ backgroundColor: "#F5EDEA" }}>📝</div>
                <div className="p-5">
                  <h3 className="font-bold mb-2 text-sm leading-snug" style={{ color: "#2D2D2D" }}>{p.title}</h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>{p.excerpt}</p>
                  <Link href={p.href} className="text-xs font-semibold hover:underline" style={{ color: "#D45F3C" }}>Read More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Frequently Asked Questions</h2>
            <p style={{ color: "#6B6B6B" }}>Common queries about our clinic and treatments</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-medium text-sm pr-4" style={{ color: "#2D2D2D" }}>{faq.q}</span>
                  <span className="flex-shrink-0 text-lg font-light" style={{ color: "#1A6B6B" }}>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16" style={{ backgroundColor: "#1A6B6B" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Start Your Treatment Journey?</h2>
          <p className="text-white/75 mb-8 text-base">Book a consultation with Dr. Sireesha today. We are here to help you achieve healthier skin and hair.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#D45F3C" }}
            >
              Book Appointment
            </Link>
            <a
              href="https://wa.me/918712144205"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-lg font-semibold border-2 border-white/60 text-white hover:border-white transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="mt-6 text-white/50 text-sm">
            Nandyala Neuro Center, Beside Municipal Office, Sanjeeva Nagar, Nandyala, AP — 518501
          </p>
        </div>
      </section>
    </>
  );
}
