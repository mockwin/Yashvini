import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Education — Skin & Hair Care Guides",
  description: "Free dermatologist-written education guides on skin care, hair care, seasonal care, myths, and treatment aftercare from Yashvini Skin & Hair Clinic, Nandyala.",
  alternates: { canonical: "https://yashvini.in/education" },
};

const guides = [
  {
    title: "Skin Care Tips for Indian Skin",
    desc: "Daily routines, sunscreen guidance, product selection, and nutrition for South Indian skin types.",
    href: "/education/skin-care-tips",
    icon: "🌿",
    readTime: "8 min",
  },
  {
    title: "Hair Care Tips for Indian Hair",
    desc: "Washing frequency, oiling myths, heat damage, diet for healthy hair, and when to seek help.",
    href: "/education/hair-care-tips",
    icon: "💆",
    readTime: "7 min",
  },
  {
    title: "Seasonal Skin Care in India",
    desc: "How to adapt your routine for summer, monsoon, winter, and transition seasons in India.",
    href: "/education/seasonal-skin-care",
    icon: "🌤️",
    readTime: "9 min",
  },
  {
    title: "15 Skin Care Myths Debunked",
    desc: "Dermatologist-verified facts correcting the most common skin care myths heard at our clinic.",
    href: "/education/skin-care-myths",
    icon: "🔬",
    readTime: "6 min",
  },
  {
    title: "Pre & Post Treatment Care Guide",
    desc: "Complete instructions for preparing for and recovering from chemical peels, microneedling, PRP, laser, and more.",
    href: "/education/pre-post-treatment-care",
    icon: "📋",
    readTime: "10 min",
  },
];

export default function EducationHubPage() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Patient Education
          </div>
          <h1 className="text-4xl font-bold mb-4">Skin &amp; Hair Care Education</h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Evidence-based guides written by Dr. Sireesha to help you understand your skin, your hair, and your treatment options.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((g) => (
              <Link key={g.href} href={g.href} className="group bg-white rounded-2xl p-7 shadow-sm border hover:shadow-md transition-shadow block" style={{ borderColor: "#F5EDEA" }}>
                <div className="text-4xl mb-4">{g.icon}</div>
                <h2 className="text-lg font-bold mb-2 group-hover:underline" style={{ color: "#1A6B6B" }}>{g.title}</h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B6B6B" }}>{g.desc}</p>
                <span className="text-xs font-medium" style={{ color: "#C9A84C" }}>⏱ {g.readTime} read →</span>
              </Link>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Want Personalised Advice?</h2>
            <p className="text-sm mb-6" style={{ color: "#6B6B6B" }}>Educational guides are a starting point. For a treatment plan tailored to your specific skin or hair condition, consult Dr. Sireesha at Yashvini Skin &amp; Hair Clinic.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                Book Appointment
              </Link>
              <Link href="/blog" className="px-6 py-3 rounded-lg font-semibold border-2 hover:opacity-80 transition-opacity" style={{ borderColor: "#1A6B6B", color: "#1A6B6B" }}>
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
