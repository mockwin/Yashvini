import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pre & Post Treatment Care Guide — Yashvini Skin & Hair Clinic",
  description: "Complete pre and post treatment care guide for skin & hair procedures at Yashvini Skin & Hair Clinic Nandyala. Chemical peels, microneedling, laser, PRP, and more.",
  alternates: { canonical: "https://yashvini.in/education/pre-post-treatment-care" },
};

const procedures = [
  {
    name: "Chemical Peels",
    icon: "✨",
    pre: [
      "Start daily SPF 50+ sunscreen 2–4 weeks before",
      "Avoid prolonged sun exposure — tanned skin increases PIH risk",
      "1 week before: discontinue strong retinoids, AHAs, BHAs",
      "Avoid waxing, threading, or bleaching the treatment area",
      "Arrive with clean skin — no makeup or sunscreen on the day",
    ],
    post: [
      "First 24 hours: apply prescribed soothing cream, avoid touching face, no makeup",
      "Days 1–7: use only prescribed gentle cleanser and moisturiser",
      "Apply SPF 50+ sunscreen every morning; reapply if going outdoors",
      "DO NOT pick, scratch, or peel any flaking skin — let it shed naturally",
      "Avoid heat (saunas, steam, hot showers), exercise, and swimming for 5–7 days",
      "Avoid all active ingredients (retinoids, AHAs, vitamin C) until peeling is complete",
    ],
    warning: "Call us if you notice excessive blistering, weeping, or pain beyond normal.",
  },
  {
    name: "Microneedling",
    icon: "🔬",
    pre: [
      "Start daily SPF 50+ sunscreen 2–4 weeks before",
      "1 week before: discontinue retinoids, glycolic acid, vitamin C, AHAs/BHAs",
      "Avoid waxing or bleaching the treatment area",
      "Arrive with clean skin — no makeup or sunscreen",
    ],
    post: [
      "First 24 hours: skin will appear red (like sunburn) — this is normal",
      "Apply prescribed hyaluronic acid serum gently with clean hands",
      "Sleep on a clean pillowcase; avoid touching the face",
      "Days 2–5: mild dryness and flaking is normal — continue gentle cleanser + serum + SPF only",
      "Avoid sun exposure, saunas, gym, and swimming for 5 days",
      "After Day 5: gradually reintroduce your normal skincare over 5–7 days",
    ],
    warning: "Results continue to develop over the following 4–6 weeks.",
  },
  {
    name: "Laser Hair Removal",
    icon: "💡",
    pre: [
      "Shave the treatment area 24 hours before (do not wax or thread)",
      "Avoid sun exposure to the treatment area for 4 weeks before",
      "Start SPF 50+ sunscreen on treated areas from 2 weeks before",
      "Arrive with clean skin — no deodorant, perfume, or lotion on treatment areas",
    ],
    post: [
      "First 24 hours: apply cool gel or ice pack (wrapped in cloth) to soothe treated area",
      "Do not apply deodorant or fragrance to treated underarms",
      "Avoid tight clothing over treated areas",
      "First week: strict sun avoidance on treated areas — apply SPF 50+ if exposure unavoidable",
      "Avoid waxing or threading (shaving is permitted) throughout the course",
      "Avoid hot baths, saunas, steam, and swimming pools for 48–72 hours",
    ],
    warning: "Treated hairs will appear to 'grow' over 1–3 weeks post-session — this is the hair being expelled, not new growth. Do not wax — shave or leave it.",
  },
  {
    name: "PRP (Hair or Skin)",
    icon: "💉",
    pre: [
      "Do not take blood-thinning supplements (fish oil, vitamin E, aspirin) for 1 week before — discuss with doctor",
      "Stay well-hydrated the day before and on the day of the procedure",
      "Eat a light meal before the session",
      "Arrive with clean scalp (for hair PRP) or clean skin",
    ],
    post: [
      "Do not wash hair or touch the scalp for 24 hours (hair PRP)",
      "Avoid alcohol for 24 hours",
      "Mild scalp swelling or redness is normal for 1–2 days",
      "Resume gentle hair washing after 24–48 hours",
      "Avoid vigorous exercise for 24–48 hours",
      "Continue prescribed minoxidil or other hair medications",
      "Maintain scheduled follow-up sessions for the full PRP course",
    ],
    warning: "For best results, maintain nutritional supplements as prescribed and complete all sessions in the planned course.",
  },
  {
    name: "Wart / Skin Tag Removal",
    icon: "🏥",
    pre: [
      "No specific pre-treatment preparation is generally required",
      "Inform the doctor of any blood-thinning medications",
      "Arrive with clean skin",
    ],
    post: [
      "Keep the area clean and dry",
      "Apply prescribed antiseptic or wound cream as directed",
      "Cover with a clean dressing if recommended",
      "A small scab will form and shed naturally within 1–2 weeks",
      "Do not pick the scab — increases scarring risk",
      "Protect the area from sun exposure during healing",
    ],
    warning: "Signs of infection: increasing redness, warmth, swelling, yellow/green discharge, or fever — call the clinic immediately.",
  },
];

const generalPost = [
  "Sunscreen every day — non-negotiable. This protects results and prevents PIH (post-inflammatory hyperpigmentation).",
  "Gentle cleansing and moisturising — the skin is recovering; do not stress it further with active ingredients.",
  "No active ingredients unless prescribed — wait for your doctor's go-ahead before resuming retinoids, AHAs, vitamin C.",
  "No picking or scratching — let healing happen naturally.",
  "Stay hydrated — drink water and nourish skin from within.",
  "Follow up as scheduled — adjustments to treatment may be needed based on your healing response.",
  "Report anything unusual — do not wait for your next appointment if you are concerned.",
];

export default function PrePostTreatmentCarePage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/education" className="hover:text-white">Education</Link> /{" "}
            <span className="text-white/80">Pre &amp; Post Treatment Care</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Pre &amp; Post Treatment Care Guide</h1>
          <p className="text-white/75 text-base max-w-2xl">Complete instructions for preparing for and recovering from procedures at Yashvini Skin &amp; Hair Clinic, Nandyala.</p>
          <p className="mt-3 text-sm text-white/60">✍️ Dr. Sireesha, MD Dermatology · ⏱ 10 min read</p>
        </div>
      </section>

      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-3" style={{ color: "#1A6B6B" }}>Why Pre and Post Care Matters</h2>
                <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>The results of any dermatological procedure depend not only on the skill of the practitioner and quality of equipment — they depend equally on what you do before and after the treatment. Proper pre-care prepares your skin to respond optimally. Proper post-care protects the results and prevents complications.</p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>At Yashvini Clinic, we always provide written pre and post-care instructions specific to your treatment. This page provides a general overview for common procedures.</p>
              </div>

              {procedures.map((p) => (
                <div key={p.name} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                  <div className="px-7 py-4 flex items-center gap-3" style={{ backgroundColor: "#1A6B6B" }}>
                    <span className="text-2xl">{p.icon}</span>
                    <h2 className="text-lg font-bold text-white">{p.name}</h2>
                  </div>
                  <div className="p-7 grid sm:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#2D2D2D" }}>
                        <span className="px-2 py-0.5 rounded text-xs text-white" style={{ backgroundColor: "#C9A84C" }}>PRE-TREATMENT</span>
                      </h3>
                      <ul className="space-y-2">
                        {p.pre.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#6B6B6B" }}>
                            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#C9A84C" }} />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm mb-3 flex items-center gap-2" style={{ color: "#2D2D2D" }}>
                        <span className="px-2 py-0.5 rounded text-xs text-white" style={{ backgroundColor: "#1A6B6B" }}>POST-TREATMENT</span>
                      </h3>
                      <ul className="space-y-2">
                        {p.post.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs" style={{ color: "#6B6B6B" }}>
                            <span className="mt-0.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1A6B6B" }} />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {p.warning && (
                    <div className="mx-7 mb-5 p-3 rounded-xl text-xs border-l-4" style={{ backgroundColor: "#FEF3EF", borderColor: "#D45F3C", color: "#6B6B6B" }}>
                      <strong style={{ color: "#D45F3C" }}>Note: </strong>{p.warning}
                    </div>
                  )}
                </div>
              ))}

              <div className="bg-white rounded-2xl p-7 shadow-sm">
                <h2 className="text-xl font-bold mb-4" style={{ color: "#1A6B6B" }}>General Post-Treatment Principles (All Procedures)</h2>
                <div className="space-y-2">
                  {generalPost.map((tip, i) => (
                    <div key={i} className="flex gap-3 text-sm p-2" style={{ color: "#6B6B6B" }}>
                      <span className="font-bold flex-shrink-0" style={{ color: "#1A6B6B" }}>{i + 1}.</span>{tip}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This guide is for general educational purposes. Your doctor will provide specific written instructions tailored to your procedure and skin type at the time of your treatment. Always follow your doctor&apos;s specific guidance over this general guide.
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
                <a href="tel:+918712144205" className="block text-center mt-3 text-sm font-medium hover:underline" style={{ color: "#1A6B6B" }}>📞 +91 87121 44205</a>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Related Treatments</h3>
                <ul className="space-y-2">
                  {[
                    { label: "Chemical Peels", href: "/cosmetology/chemical-peels" },
                    { label: "Microneedling", href: "/cosmetology/microneedling" },
                    { label: "Laser Hair Removal", href: "/cosmetology/laser-hair-removal" },
                    { label: "PRP Hair Therapy", href: "/hair-treatments/prp-therapy" },
                    { label: "HydraFacial", href: "/cosmetology/hydrafacial" },
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
