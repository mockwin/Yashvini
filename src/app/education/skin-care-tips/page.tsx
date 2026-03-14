import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin Care Tips for Indian Skin",
  description: "Expert skin care tips for Indian skin from Dr. Sireesha at Yashvini Skin & Hair Clinic Nandyala. Daily routines, sun protection, nutrition, and product guidance.",
  alternates: { canonical: "https://yashvini.in/education/skin-care-tips" },
};

export default function SkinCareTipsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/education" className="hover:text-white">Education</Link> /{" "}
            <span className="text-white/80">Skin Care Tips</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Skin Care Tips for Healthy Indian Skin</h1>
          <p className="text-white/75 text-base max-w-2xl">Expert advice from Yashvini Skin &amp; Hair Clinic, Nandyala — adapted for South Indian skin types and climate.</p>
          <p className="mt-3 text-sm text-white/60">✍️ Dr. Sireesha, MD Dermatology · ⏱ 8 min read</p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-8">

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Why Skin Care Matters — Especially in India</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>India&apos;s tropical climate, high UV index, pollution levels, and the unique characteristics of South Asian skin make a consistent routine not just cosmetic — but a genuine health necessity. Proper skin care prevents premature ageing, manages conditions like acne and pigmentation, and protects against long-term sun damage.</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>At Yashvini Skin &amp; Hair Clinic, we believe the best advice is simple, practical, evidence-based, and adapted to your specific skin type and lifestyle.</p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Know Your Skin Type</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { type: "Oily", desc: "Excess sebum, shiny, prone to acne. Needs oil-free, non-comedogenic products." },
                    { type: "Dry", desc: "Feels tight, may flake, prone to sensitivity. Needs rich moisturisers and gentle cleansers." },
                    { type: "Combination", desc: "Oily T-zone, normal/dry cheeks. Needs balanced, lightweight products." },
                    { type: "Sensitive", desc: "Reacts easily, prone to redness. Needs fragrance-free, minimal-ingredient products." },
                    { type: "Normal", desc: "Well-balanced. Standard routine works well." },
                  ].map((s) => (
                    <div key={s.type} className="p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#2D2D2D" }}>{s.type} Skin</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs mt-4 p-3 rounded-lg" style={{ backgroundColor: "rgba(26,107,107,0.08)", color: "#1A6B6B" }}>
                  <strong>South Indian skin tip:</strong> Indian skin is commonly oily-to-combination with a tendency towards pigmentation and sun sensitivity. Your routine should account for both.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-5" style={{ color: "#1A6B6B" }}>The Essential Daily Skincare Routine</h2>
                <h3 className="font-bold mb-3 text-base" style={{ color: "#2D2D2D" }}>Morning Routine</h3>
                <div className="space-y-3 mb-6">
                  {[
                    { step: "1. Cleanse", detail: "Use a gentle, sulphate-free cleanser. Wash with lukewarm water. Once in the morning is sufficient for most skin types." },
                    { step: "2. Vitamin C Serum (optional)", detail: "Provides antioxidant protection against UV-induced damage, brightens skin, and supports collagen. Use a stable formulation." },
                    { step: "3. Moisturise", detail: "Even oily skin needs moisture. Choose lightweight, oil-free gel for oily skin; richer cream for dry skin." },
                    { step: "4. Sunscreen — Non-Negotiable", detail: "SPF 50+ broad-spectrum every morning. Even on cloudy days. Even indoors near windows. This is the most important step." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3 p-3 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#1A6B6B" }} />
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>{s.step}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <h3 className="font-bold mb-3 text-base" style={{ color: "#2D2D2D" }}>Evening Routine</h3>
                <div className="space-y-3">
                  {[
                    { step: "1. Double Cleanse", detail: "If wearing makeup or sunscreen, use a gentle oil cleanser first, then your regular cleanser." },
                    { step: "2. Treatment Products", detail: "Apply any prescribed medications (retinoids, benzoyl peroxide) as directed. Usually used at night." },
                    { step: "3. Moisturise", detail: "A richer cream can be used at night since it doesn&apos;t need to sit under sunscreen." },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-3 p-3 rounded-xl border" style={{ borderColor: "#F5EDEA" }}>
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                      <div>
                        <p className="font-semibold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>{s.step}</p>
                        <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Sunscreen — The Most Important Step</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "SPF 50+ is recommended for Indian climate and skin type",
                    "Broad-spectrum protects against UVA (ageing) AND UVB (burning)",
                    "Apply ¼ teaspoon (1.25ml) for the face alone",
                    "Reapply every 2–3 hours when outdoors",
                    "Reapply after swimming or heavy sweating",
                    "Sunscreen + vitamin C together provide powerful combined protection",
                  ].map((tip) => (
                    <div key={tip} className="flex items-start gap-2 p-3 rounded-xl text-xs" style={{ backgroundColor: "#FAF8F5", color: "#2D2D2D" }}>
                      <span className="flex-shrink-0 font-bold" style={{ color: "#1A6B6B" }}>✓</span>{tip}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>10 Common Skincare Mistakes to Avoid</h2>
                <div className="space-y-2">
                  {[
                    "Not using sunscreen daily — the most common and costly mistake",
                    "Using too many products at once — less is more; too many actives cause irritation",
                    "Picking acne — leads to scarring and spreading of bacteria",
                    "Using steroid-containing 'fairness creams' — cause long-term skin damage",
                    "Washing face too frequently — strips natural oils, increases oil production",
                    "Skipping moisturiser for oily skin — causes more oil production",
                    "Applying products in the wrong order — thinnest to thickest consistency",
                    "Not doing a patch test for new products — especially for sensitive skin",
                    "Expecting overnight results — most treatments take 4–8 weeks",
                    "Using expired products — inactive or degraded at best; irritating at worst",
                  ].map((m, i) => (
                    <div key={i} className="flex gap-3 text-sm p-2" style={{ color: "#6B6B6B" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "#D45F3C" }}>{i + 1}.</span>{m}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Nutrition &amp; Hydration for Skin Health</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { nutrient: "Hydration", detail: "Drink 8–10 glasses of water daily. Dehydration shows directly as dullness and fine lines." },
                    { nutrient: "Antioxidants", detail: "Fruits, vegetables, nuts, seeds — vitamins C and E, zinc, polyphenols support skin health from within." },
                    { nutrient: "Protein", detail: "Hair and skin are built from protein. Include dal, eggs, meat, fish, legumes adequately." },
                    { nutrient: "Omega-3", detail: "Flaxseed, walnuts, fatty fish — support skin barrier function and reduce inflammation." },
                    { nutrient: "Limit High-GI Foods", detail: "White rice, white bread, sugary drinks — linked to worsening acne and accelerated ageing in some individuals." },
                  ].map((n) => (
                    <div key={n.nutrient} className="p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#2D2D2D" }}>{n.nutrient}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{n.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This guide is for educational purposes and does not replace a personalised consultation. Please see a qualified dermatologist for diagnosis and treatment recommendations specific to your skin.
              </div>
            </article>

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
                    { label: "Hair Care Tips", href: "/education/hair-care-tips" },
                    { label: "Seasonal Skin Care", href: "/education/seasonal-skin-care" },
                    { label: "Skin Care Myths", href: "/education/skin-care-myths" },
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
