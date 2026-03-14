import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "15 Skin Care Myths Debunked by Our Dermatologist",
  description: "Dermatologist Dr. Sireesha at Yashvini Skin & Hair Clinic Nandyala debunks the 15 most common skin care myths — facts vs fiction for Indian skin.",
  alternates: { canonical: "https://yashvini.in/education/skin-care-myths" },
};

const myths = [
  {
    myth: "You only need sunscreen when it's sunny",
    fact: "UV radiation penetrates cloud cover. On an overcast day, you still receive 80% of the UV exposure of a clear day. UVA rays — responsible for pigmentation and ageing — also pass through glass windows. SPF 50+ every morning, rain or shine.",
  },
  {
    myth: "Oily skin doesn't need moisturiser",
    fact: "Moisturiser and oil are not the same thing. Oily skin can be dehydrated — lacking water despite excess oil. Skipping moisturiser signals the skin to produce even more oil. Use a lightweight, oil-free, non-comedogenic moisturiser.",
  },
  {
    myth: "Fairness creams will permanently lighten my skin",
    fact: "Most over-the-counter fairness creams either provide temporary whitening or dangerously contain undisclosed steroids. Steroid creams initially lighten skin but cause significant long-term damage — thinning, acne, stretch marks, and severe rebound darkening. Always seek medically formulated treatment.",
  },
  {
    myth: "Washing your face more frequently clears acne",
    fact: "Over-washing strips the skin's protective barrier, triggering excess oil production — which can worsen acne. Washing twice daily with a gentle, appropriate cleanser is sufficient. More is not better.",
  },
  {
    myth: "Toothpaste clears pimples overnight",
    fact: "Toothpaste contains ingredients that irritate, dry, and can chemically burn the skin. It is not formulated for skin use and causes redness, peeling, and post-inflammatory dark marks. Use a targeted spot treatment with benzoyl peroxide or salicylic acid instead.",
  },
  {
    myth: "Natural ingredients are always safe for the skin",
    fact: "Many natural substances are potent skin irritants. Lemon juice (highly acidic, can cause burns and photosensitivity), neat essential oils, turmeric masks, and raw egg white can all damage skin or trigger allergic reactions. 'Natural' does not automatically mean safe.",
  },
  {
    myth: "Drinking a lot of water will make your skin glow",
    fact: "Staying properly hydrated supports overall health. However, drinking water beyond adequate levels does not 'flush' skin clear or produce dramatic glow. Skin radiance is driven by skincare, nutrition, sun protection, and overall health — not water volume alone.",
  },
  {
    myth: "Anti-ageing creams will completely remove wrinkles",
    fact: "No over-the-counter cream can 'remove' wrinkles. Proven actives like prescription retinoids can improve fine lines significantly over months of consistent use. Most OTC 'anti-ageing' creams provide hydration that temporarily plumps skin. For meaningful wrinkle reduction, dermatologist-supervised treatments are needed.",
  },
  {
    myth: "Acne only affects teenagers",
    fact: "Acne affects people of all ages. Adult acne — particularly in women — is often driven by hormonal factors (PCOS, menstrual cycle), stress, and certain medications. It is extremely common and responds well to appropriate dermatological treatment.",
  },
  {
    myth: "Higher SPF means you can spend more time in the sun",
    fact: "SPF indicates protection level, not duration. SPF 50 blocks approximately 98% of UVB; SPF 30 blocks approximately 97%. Reapplication — every 2 hours — is essential regardless of SPF. A higher number does not grant permission to skip reapplication.",
  },
  {
    myth: "Coconut oil is a good moisturiser for all skin types",
    fact: "Coconut oil works reasonably for dry skin on the body but is comedogenic (pore-clogging) for many people's facial skin. It can worsen acne on acne-prone faces. It is not universally suitable as a facial moisturiser.",
  },
  {
    myth: "Steroid creams are a quick fix for all skin problems",
    fact: "Steroid creams are effective for specific conditions when used appropriately and for limited durations under medical supervision. Misuse — applying them to fungal infections, acne, or for 'fairness' — causes skin thinning, stretch marks, and fungal infections. Never use steroid creams on the face without a doctor's prescription.",
  },
  {
    myth: "Once acne scars form, nothing can be done about them",
    fact: "Acne scars can be significantly improved with modern dermatological treatments including microneedling, chemical peels, laser resurfacing, subcision, and dermal fillers. While complete elimination of deep scars is not always possible, 50–80% improvement is commonly achievable.",
  },
  {
    myth: "Hair loss is only a man's problem",
    fact: "Hair loss affects women significantly — often more emotionally than men. Common causes in women include nutritional deficiencies (iron, ferritin), thyroid disorders, PCOS, postpartum hormonal changes, and androgenetic alopecia. Women's hair loss is common, very treatable, and should not be normalised.",
  },
  {
    myth: "Expensive skincare products always work better",
    fact: "Price does not correlate with efficacy. Some of the most evidence-backed ingredients — vitamin C, niacinamide, retinoids, hyaluronic acid, mineral sunscreen — are available in reasonably priced formulations. A dermatologist can guide you to the most effective products for your budget.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": myths.map((m) => ({
    "@type": "Question",
    "name": `Myth: "${m.myth}" — Is this true?`,
    "acceptedAnswer": { "@type": "Answer", "text": `FACT: ${m.fact}` },
  })),
};

export default function SkinCareMythsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/education" className="hover:text-white">Education</Link> /{" "}
            <span className="text-white/80">Skin Care Myths</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">15 Skin Care Myths Debunked by Our Dermatologist</h1>
          <p className="text-white/75 text-base max-w-2xl">Every day patients come in having tried treatments based on well-meaning but incorrect advice. Let&apos;s set the record straight.</p>
          <p className="mt-3 text-sm text-white/60">✍️ Dr. Sireesha, MD Dermatology · ⏱ 6 min read</p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-5">
              {myths.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#D45F3C" }}>
                      {i + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ backgroundColor: "#FEF3EF", color: "#D45F3C" }}>MYTH</span>
                      </div>
                      <p className="font-semibold text-sm mb-3" style={{ color: "#2D2D2D" }}>&ldquo;{item.myth}&rdquo;</p>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-bold px-2 py-0.5 rounded flex-shrink-0" style={{ backgroundColor: "rgba(26,107,107,0.1)", color: "#1A6B6B" }}>FACT</span>
                        <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>{item.fact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-5 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This guide is for educational purposes only and does not replace a personalised consultation with a qualified dermatologist.
              </div>
            </div>

            <aside className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full h-28 rounded-xl mb-4 flex items-center justify-center text-5xl" style={{ background: "linear-gradient(135deg, #1A6B6B, #2D9B9B)" }}>👩‍⚕️</div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</p>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Yashvini Clinic, Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>💬 WhatsApp</a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>More Education Guides</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Skin Care Tips", href: "/education/skin-care-tips" },
                    { label: "Hair Care Tips", href: "/education/hair-care-tips" },
                    { label: "Seasonal Skin Care", href: "/education/seasonal-skin-care" },
                    { label: "Pre & Post Treatment Care", href: "/education/pre-post-treatment-care" },
                  ].map((l) => (
                    <li key={l.href}><Link href={l.href} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "#1A6B6B" }}><span>→</span>{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
