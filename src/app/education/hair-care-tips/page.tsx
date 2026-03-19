import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hair Care Tips for Indian Hair",
  description: "Expert hair care tips for healthy Indian hair from Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala. Washing, oiling myths, diet, heat damage, and more.",
  alternates: { canonical: "https://yashvini.in/education/hair-care-tips" },
};

const nutritionTable = [
  { nutrient: "Protein", role: "Building block of hair (keratin)", sources: "Eggs, dal, paneer, meat, fish, legumes" },
  { nutrient: "Iron / Ferritin", role: "Delivers oxygen to follicles", sources: "Spinach, beetroot, meat, legumes" },
  { nutrient: "Vitamin D", role: "Stimulates hair follicles", sources: "Sunlight, eggs, fortified milk, fatty fish" },
  { nutrient: "Vitamin B12", role: "Essential for red blood cells & hair growth", sources: "Meat, dairy, eggs; supplements for vegetarians" },
  { nutrient: "Zinc", role: "Tissue growth and repair", sources: "Nuts, seeds, whole grains, meat" },
  { nutrient: "Biotin", role: "Keratin production", sources: "Eggs, nuts, sweet potato" },
  { nutrient: "Omega-3", role: "Scalp health, reduces inflammation", sources: "Flaxseed, walnuts, fatty fish" },
];

export default function HairCareTipsPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/education" className="hover:text-white">Education</Link> /{" "}
            <span className="text-white/80">Hair Care Tips</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Hair Care Tips for Healthy Indian Hair</h1>
          <p className="text-white/75 text-base max-w-2xl">Expert guidance from Yashvini Skin &amp; Hair Clinic, Nandyala — for South Indian hair types and scalp conditions.</p>
          <p className="mt-3 text-sm text-white/60">✍️ Dr. Sireesha, MD Dermatology · ⏱ 7 min read</p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-8">

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Understanding Indian Hair</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>Indian hair is naturally dark, thick, and coarse — characteristics that come with both strengths and vulnerabilities. South Indian hair in particular is often wavy to curly, requiring care approaches that differ from fine, straight hair types.</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>The most common concerns among our patients: hair fall, hair thinning, dandruff, dry and frizzy hair, and damage from chemical or heat treatments. Good hair care, combined with proper nutrition and — when needed — medical treatment, can significantly improve hair health.</p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-5" style={{ color: "#1A6B6B" }}>The Basics of Healthy Hair Care</h2>

                <h3 className="font-bold text-base mb-3" style={{ color: "#2D2D2D" }}>How Often Should You Wash Your Hair?</h3>
                <div className="grid sm:grid-cols-3 gap-3 mb-5">
                  {[
                    { type: "Oily Scalp", freq: "Every 2–3 days", reason: "Prevents oil and yeast build-up contributing to dandruff and hair fall" },
                    { type: "Normal Scalp", freq: "Every 3–4 days", reason: "Works for most people" },
                    { type: "Dry Scalp", freq: "Every 5–7 days", reason: "Over-washing strips natural oils further" },
                  ].map((s) => (
                    <div key={s.type} className="p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                      <p className="font-semibold text-sm mb-1" style={{ color: "#1A6B6B" }}>{s.type}</p>
                      <p className="text-xs font-bold mb-1" style={{ color: "#2D2D2D" }}>{s.freq}</p>
                      <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{s.reason}</p>
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-base mb-3" style={{ color: "#2D2D2D" }}>Choosing the Right Shampoo</h3>
                <ul className="text-sm space-y-2 mb-5" style={{ color: "#6B6B6B" }}>
                  <li>• Choose a shampoo suited to your scalp condition (oily, dry, dandruff-prone)</li>
                  <li>• Avoid sulfate-heavy shampoos for dry or chemically treated hair</li>
                  <li>• If you have dandruff, use a medicated antifungal shampoo as prescribed</li>
                  <li>• Clarifying shampoos (once a month) help remove product build-up</li>
                </ul>

                <h3 className="font-bold text-base mb-3" style={{ color: "#2D2D2D" }}>Conditioning — What to Know</h3>
                <ul className="text-sm space-y-2" style={{ color: "#6B6B6B" }}>
                  <li>• Apply conditioner to the lengths and ends of hair — <strong>not to the scalp</strong></li>
                  <li>• Conditioner on the scalp can weigh hair down and worsen oiliness</li>
                  <li>• For dry or chemically treated hair, a weekly deep conditioning mask restores moisture and strength</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Hair Oiling — What the Evidence Says</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>Hair oiling is deeply ingrained in South Indian culture — and some aspects are genuinely beneficial. However, it is also widely misunderstood.</p>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                    <p className="font-bold text-sm mb-2" style={{ color: "#1A6B6B" }}>✓ Benefits (with moderate use)</p>
                    <ul className="text-xs space-y-1.5" style={{ color: "#6B6B6B" }}>
                      <li>• Reduces combing-related breakage</li>
                      <li>• Scalp massage improves blood circulation</li>
                      <li>• Coconut oil can penetrate the shaft, reducing protein loss</li>
                      <li>• Pre-wash oil application reduces shampoo&apos;s roughening effect</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl" style={{ backgroundColor: "#FEF3EF" }}>
                    <p className="font-bold text-sm mb-2" style={{ color: "#D45F3C" }}>✗ What oiling does NOT do</p>
                    <ul className="text-xs space-y-1.5" style={{ color: "#6B6B6B" }}>
                      <li>• Does NOT treat pattern hair loss or nutritional hair fall</li>
                      <li>• Overnight oiling feeds Malassezia yeast → worsens dandruff</li>
                      <li>• Very heavy oiling can clog follicle openings</li>
                    </ul>
                  </div>
                </div>
                <div className="p-3 rounded-xl text-xs border-l-4" style={{ backgroundColor: "rgba(26,107,107,0.08)", borderColor: "#1A6B6B", color: "#1A6B6B" }}>
                  <strong>Recommended:</strong> Apply a moderate amount 1–2 hours before washing. Massage gently. Wash thoroughly. Avoid overnight oiling if you have dandruff.
                </div>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Diet for Healthy Hair — Nutrition Matters</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr style={{ backgroundColor: "#1A6B6B", color: "white" }}>
                        <th className="px-3 py-2 text-left rounded-tl-lg">Nutrient</th>
                        <th className="px-3 py-2 text-left">Role in Hair Health</th>
                        <th className="px-3 py-2 text-left rounded-tr-lg">Food Sources</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nutritionTable.map((row, i) => (
                        <tr key={row.nutrient} style={{ backgroundColor: i % 2 === 0 ? "#FAF8F5" : "white" }}>
                          <td className="px-3 py-2 font-semibold" style={{ color: "#2D2D2D" }}>{row.nutrient}</td>
                          <td className="px-3 py-2" style={{ color: "#6B6B6B" }}>{row.role}</td>
                          <td className="px-3 py-2" style={{ color: "#6B6B6B" }}>{row.sources}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs mt-4" style={{ color: "#6B6B6B" }}>A vegetarian diet can be entirely compatible with healthy hair — but requires attention to iron, B12, and zinc. If hair fall persists, blood tests (ferritin, B12, thyroid, vitamin D) are strongly recommended.</p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>Protecting Hair from Damage</h2>
                {[
                  {
                    heading: "Heat Styling",
                    points: [
                      "Use heat protectant spray before any heat styling tool",
                      "Keep flat irons and curling irons at the lowest effective temperature",
                      "Air-dry when possible — daily heat styling causes cumulative damage",
                    ],
                  },
                  {
                    heading: "Chemical Treatments",
                    points: [
                      "Space colouring, bleaching, perming sessions — at least 6–8 weeks apart minimum",
                      "Bleaching significantly damages hair structure — use bond-strengthening treatments alongside",
                      "Trim every 6–8 weeks to remove split ends",
                    ],
                  },
                  {
                    heading: "Tight Hairstyles",
                    points: [
                      "Avoid chronically tight ponytails, braids, and buns — cause traction alopecia",
                      "Use scrunchies or soft hair ties rather than tight rubber bands",
                    ],
                  },
                ].map((section) => (
                  <div key={section.heading} className="mb-5">
                    <h3 className="font-bold text-sm mb-2" style={{ color: "#2D2D2D" }}>{section.heading}</h3>
                    <ul className="space-y-1">
                      {section.points.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs" style={{ color: "#6B6B6B" }}>
                          <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} />{p}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>When to See a Dermatologist for Hair Problems</h2>
                <ul className="text-sm space-y-2" style={{ color: "#6B6B6B" }}>
                  {[
                    "More than 100 strands falling per day for more than 4 weeks",
                    "Visible thinning at the crown or widening parting",
                    "Patchy bald spots (sudden or gradual)",
                    "Scalp that is persistently itchy, flaky, or red",
                    "Hair that has become significantly finer, weaker, or more brittle",
                    "Hair fall after illness, surgery, or significant stress",
                  ].map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <span className="mt-0.5 flex-shrink-0" style={{ color: "#D45F3C" }}>•</span>{s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This guide is for educational purposes and does not replace a personalised consultation with a qualified dermatologist.
              </div>
            </article>

            <aside className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full rounded-xl mb-4 overflow-hidden">
                  <Image src="/dr-sireesha.png" alt="Dr. Sireesha — MD Dermatology" width={300} height={200} className="w-full h-auto object-cover" />
                </div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</p>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Yashvini Clinic, Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>Book Appointment</Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>💬 WhatsApp</a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Hair Treatments</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Hair Fall Treatment", href: "/hair-treatments/hair-fall-treatment" },
                    { label: "PRP Hair Therapy", href: "/hair-treatments/prp-therapy" },
                    { label: "Dandruff Treatment", href: "/hair-treatments/dandruff" },
                    { label: "Alopecia", href: "/hair-treatments/alopecia" },
                    { label: "Hair Thinning", href: "/hair-treatments/hair-thinning" },
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
