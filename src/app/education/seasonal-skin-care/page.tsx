import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Seasonal Skin Care in India — How to Adapt Your Routine All Year",
  description: "India-specific seasonal skin care guide by Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala. Adjust your routine for summer, monsoon, winter, and transition seasons.",
  alternates: { canonical: "https://yashvini.in/education/seasonal-skin-care" },
};

const seasons = [
  {
    season: "Summer (March–June)",
    icon: "☀️",
    color: "#D45F3C",
    challenges: [
      "Intense UV exposure causing sunburn, tanning, and pigmentation",
      "Excess sweating leading to clogged pores and acne breakouts",
      "Increased oil production worsening acne and dandruff",
      "Heat-induced rashes (prickly heat / miliaria)",
      "Dehydration affecting skin plumpness and radiance",
    ],
    tips: [
      { heading: "Sunscreen", detail: "SPF 50+ broad-spectrum, applied 20 minutes before sun exposure, reapplied every 2 hours when outdoors." },
      { heading: "Lightweight products", detail: "Switch to gel-based, oil-free moisturisers and serums. Heavy creams clog pores in heat and humidity." },
      { heading: "Gentle cleansing", detail: "Wash face twice daily with a gentle foaming cleanser for oily/combination skin." },
      { heading: "Stay hydrated", detail: "Drink 8–10 glasses of water daily. Coconut water and buttermilk help with electrolyte replenishment." },
      { heading: "Vitamin C serum", detail: "Applied in the morning under sunscreen, provides added protection against UV-generated free radicals." },
      { heading: "Sun-protective habits", detail: "Seek shade between 10am–4pm. Wide-brimmed hat, UV sunglasses, and umbrella are effective." },
    ],
  },
  {
    season: "Monsoon (July–September)",
    icon: "🌧️",
    color: "#1A6B6B",
    challenges: [
      "High humidity increases oil production and causes skin congestion",
      "Fungal infections (tinea, candida) thrive in moist, warm conditions",
      "Acne breakouts worsen with humidity and sweating",
      "Dandruff tends to flare",
      "Insect bites are more common",
    ],
    tips: [
      { heading: "Cleansing", detail: "Wash face twice daily. Increased humidity means more sweat and oil. Avoid over-washing which strips the skin." },
      { heading: "Antifungal awareness", detail: "Keep skin folds (groin, underarms, under breasts, between toes) clean and dry. Change into dry clothes promptly after getting wet." },
      { heading: "Sunscreen — still important", detail: "UV rays are not blocked by cloud cover. Continue SPF 50+ sunscreen daily." },
      { heading: "Lighter moisturisers", detail: "Continue with lightweight, gel-based moisturisers. Heavy creams in humid weather lead to congestion and breakouts." },
      { heading: "Foot care", detail: "Keep feet dry. Wear open or moisture-wicking footwear. Dry between toes thoroughly — prime site for athlete's foot." },
      { heading: "Hair care", detail: "Avoid leaving hair wet for long periods — damp scalps encourage dandruff and fungal growth. Shampoo regularly." },
    ],
  },
  {
    season: "Winter (November–February)",
    icon: "❄️",
    color: "#5B8C6B",
    challenges: [
      "Reduced humidity causes dry, tight, flaky skin",
      "Skin barrier weakens, increasing sensitivity",
      "Eczema and psoriasis tend to flare",
      "Lips become chapped",
      "Hot shower temptation — hot water is damaging to skin",
    ],
    tips: [
      { heading: "Switch to richer moisturisers", detail: "Upgrade from lightweight summer gels to cream-based moisturisers. Apply immediately after bathing while skin is still slightly damp." },
      { heading: "Avoid hot showers", detail: "Hot water strips the skin's natural oils. Use lukewarm water and limit shower time." },
      { heading: "Gentle cleansers", detail: "Switch to creamy, non-stripping cleansers. Avoid harsh foaming cleansers in winter." },
      { heading: "Lip care", detail: "Apply medicated lip balm (petroleum jelly or with shea butter and SPF) daily. Avoid licking lips — saliva dries them further." },
      { heading: "Sunscreen — still necessary", detail: "Winter sun still causes UV damage. SPF 30+ minimum, SPF 50 preferred." },
      { heading: "Eczema management", detail: "Winter is the highest risk season for flare-ups. Increase moisturisation frequency, use prescribed medications, and consider a room humidifier." },
    ],
  },
  {
    season: "Transition Seasons (October & February–March)",
    icon: "🌤️",
    color: "#C9A84C",
    challenges: [
      "Skin may fluctuate between oily (summer) and dry (adjusting to cooler temperatures)",
      "Sudden temperature changes can trigger sensitivity and rosacea flares",
      "Allergy season — pollen and dust trigger skin allergies",
    ],
    tips: [
      { heading: "Gradual routine change", detail: "Do not dramatically change your entire routine overnight. Gradually introduce richer moisturisers as temperatures drop, or lighter ones as heat increases." },
      { heading: "Continue sunscreen", detail: "Year-round sun protection is non-negotiable regardless of season." },
      { heading: "Watch for allergies", detail: "If you develop unexplained rashes or hives, seasonal allergens may be the trigger. Consult a dermatologist." },
      { heading: "Reassess and adjust", detail: "Transition seasons are a good time to review your skincare routine with your dermatologist for the upcoming season." },
    ],
  },
];

export default function SeasonalSkinCarePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/education" className="hover:text-white">Education</Link> /{" "}
            <span className="text-white/80">Seasonal Skin Care</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Seasonal Skin Care in India</h1>
          <p className="text-white/75 text-base max-w-2xl">How to adapt your skin care routine for every Indian season — summer, monsoon, winter, and transition.</p>
          <p className="mt-3 text-sm text-white/60">✍️ Dr. Sireesha, MD Dermatology · ⏱ 9 min read</p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1A6B6B" }}>Why Seasons Matter for Your Skin</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>India&apos;s climate varies dramatically — from scorching 45°C summer heat to humid monsoons, cool winters, and dry transitional seasons. Each season brings distinct challenges for skin and hair. The key to year-round skin health is adapting your routine to meet these seasonal demands.</p>
              </div>

              {seasons.map((s) => (
                <div key={s.season} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-7 py-5 flex items-center gap-3" style={{ backgroundColor: s.color }}>
                    <span className="text-3xl">{s.icon}</span>
                    <h2 className="text-xl font-bold text-white">{s.season}</h2>
                  </div>
                  <div className="p-7">
                    <h3 className="font-bold text-sm mb-3" style={{ color: "#2D2D2D" }}>Key Skin Challenges</h3>
                    <ul className="space-y-1 mb-6">
                      {s.challenges.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs" style={{ color: "#6B6B6B" }}>
                          <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />{c}
                        </li>
                      ))}
                    </ul>
                    <h3 className="font-bold text-sm mb-3" style={{ color: "#2D2D2D" }}>Skin Care Tips for This Season</h3>
                    <div className="space-y-3">
                      {s.tips.map((tip) => (
                        <div key={tip.heading} className="p-3 rounded-xl" style={{ backgroundColor: "#FAF8F5" }}>
                          <p className="font-semibold text-xs mb-1" style={{ color: "#2D2D2D" }}>{tip.heading}</p>
                          <p className="text-xs leading-relaxed" style={{ color: "#6B6B6B" }}>{tip.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1A6B6B" }}>One Rule for All Seasons</h2>
                <div className="p-4 rounded-xl border-l-4 text-sm" style={{ backgroundColor: "#F5EDEA", borderColor: "#1A6B6B", color: "#6B6B6B" }}>
                  <strong style={{ color: "#1A6B6B" }}>Sunscreen is year-round.</strong> UV radiation causes damage in every season — summer, monsoon (through clouds), and winter (including low-angle morning sun). SPF 50+ broad-spectrum sunscreen every morning is the single most consistent recommendation regardless of season.
                </div>
              </div>

              <div className="p-5 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This guide is for educational purposes only and does not replace a personalised consultation with a qualified dermatologist.
              </div>
            </div>

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
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>More Education Guides</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Skin Care Tips", href: "/education/skin-care-tips" },
                    { label: "Hair Care Tips", href: "/education/hair-care-tips" },
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
