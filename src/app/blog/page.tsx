import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Skin & Hair Care Blog — Expert Articles by Dr. Sireesha",
  description: "Evidence-based articles on skin care, hair care, and dermatology by Dr. Sireesha at Yashvini Skin & Hair Clinic, Nandyala. Read in Telugu & English.",
  alternates: { canonical: "https://yashvini.in/blog" },
};

const posts = [
  {
    slug: "hair-loss-in-20s",
    title: "Why More Indians Are Losing Hair in Their 20s",
    excerpt: "Stress, nutrition deficiency, and hormonal changes are contributing to early hair loss across India. Here's what dermatologists recommend.",
    category: "Hair Care",
    readTime: "6 min read",
    date: "March 2025",
    icon: "💆",
  },
  {
    slug: "melasma-south-indian-skin",
    title: "South Indian Skin & Melasma: What Actually Works",
    excerpt: "Melasma is especially common in Fitzpatrick III–V skin types. We break down the most effective, safe treatment options for Indian skin.",
    category: "Skin Care",
    readTime: "7 min read",
    date: "February 2025",
    icon: "🌟",
  },
  {
    slug: "fungal-infection-steroid-creams",
    title: "Fungal Infections: Why Steroid Creams Are Making It Worse",
    excerpt: "The widespread misuse of steroid-antifungal combination creams in India is causing a silent epidemic. Here's what you need to know.",
    category: "Skin Conditions",
    readTime: "6 min read",
    date: "January 2025",
    icon: "⚠️",
  },
  {
    slug: "chemical-peel-indian-skin",
    title: "Chemical Peels for Indian Skin — What You Need to Know",
    excerpt: "Thinking about a chemical peel? Read our complete guide for Indian skin — peel types, safety, what to expect, and how to prepare.",
    category: "Cosmetology",
    readTime: "8 min read",
    date: "December 2024",
    icon: "✨",
    comingSoon: true,
  },
  {
    slug: "prp-hair-treatment",
    title: "PRP Treatment for Hair — Is It Really Worth It?",
    excerpt: "Our dermatologist breaks down the evidence, ideal candidates, realistic expectations, and how PRP compares to other hair loss treatments.",
    category: "Hair Care",
    readTime: "7 min read",
    date: "November 2024",
    icon: "💉",
    comingSoon: true,
  },
  {
    slug: "vitiligo-myths-facts",
    title: "Vitiligo — Busting Myths and Understanding the Facts",
    excerpt: "Vitiligo is widely misunderstood in India. Our dermatologist debunks the most common myths — causes, contagion, diet, and treatment realities.",
    category: "Skin Conditions",
    readTime: "6 min read",
    date: "October 2024",
    icon: "🔬",
    comingSoon: true,
  },
];

const educationLinks = [
  { label: "Skin Care Tips for Indian Skin", href: "/education/skin-care-tips" },
  { label: "Hair Care Tips for Indian Hair", href: "/education/hair-care-tips" },
  { label: "Seasonal Skin Care in India", href: "/education/seasonal-skin-care" },
  { label: "15 Skin Care Myths Debunked", href: "/education/skin-care-myths" },
  { label: "Pre & Post Treatment Care Guide", href: "/education/pre-post-treatment-care" },
];

export default function BlogPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            📚 Skin & Hair Education
          </div>
          <h1 className="text-4xl font-bold mb-4">Expert Articles by Dr. Sireesha</h1>
          <p className="text-white/75 text-lg max-w-2xl">
            Evidence-based guides on skin care, hair care, and dermatology — written for patients in Nandyala and across Andhra Pradesh.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8" style={{ color: "#2D2D2D" }}>Latest Articles</h2>
              <div className="space-y-6">
                {posts.map((p) => (
                  <div key={p.slug} className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-md transition-shadow" style={{ borderColor: "#F5EDEA" }}>
                    <div className="flex gap-6 p-6">
                      <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl" style={{ backgroundColor: "#F5EDEA" }}>
                        {p.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(26,107,107,0.1)", color: "#1A6B6B" }}>
                            {p.category}
                          </span>
                          <span className="text-xs" style={{ color: "#6B6B6B" }}>{p.date}</span>
                          <span className="text-xs" style={{ color: "#6B6B6B" }}>· {p.readTime}</span>
                        </div>
                        <h3 className="font-bold mb-2 leading-snug" style={{ color: "#2D2D2D" }}>{p.title}</h3>
                        <p className="text-sm leading-relaxed mb-3" style={{ color: "#6B6B6B" }}>{p.excerpt}</p>
                        {p.comingSoon ? (
                          <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ backgroundColor: "#FAF8F5", color: "#6B6B6B" }}>Coming Soon</span>
                        ) : (
                          <Link href={`/blog/${p.slug}`} className="text-sm font-semibold hover:underline" style={{ color: "#D45F3C" }}>
                            Read Article →
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Patient Education Guides</h3>
                <ul className="space-y-2">
                  {educationLinks.map((e) => (
                    <li key={e.href}>
                      <Link href={e.href} className="flex items-start gap-2 text-sm hover:underline leading-snug" style={{ color: "#1A6B6B" }}>
                        <span className="mt-0.5 flex-shrink-0">→</span>{e.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="w-full rounded-xl mb-4 overflow-hidden">
                  <Image src="/dr-sireesha.png" alt="Dr. Sireesha — MD Dermatology" width={300} height={200} className="w-full h-auto object-cover" />
                </div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</p>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>MD Dermatology · Yashvini Clinic, Nandyala</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                  Book Appointment
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
