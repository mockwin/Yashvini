import Image from "next/image";
import Link from "next/link";

interface BlogPostLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  categoryColor?: string;
  readTime: string;
  publishDate: string;
  relatedTreatments?: { label: string; href: string }[];
  relatedPosts?: { title: string; href: string }[];
  articleSchema?: object;
  children: React.ReactNode;
}

export default function BlogPostLayout({
  title,
  subtitle,
  category,
  readTime,
  publishDate,
  relatedTreatments = [],
  relatedPosts = [],
  articleSchema,
  children,
}: BlogPostLayoutProps) {
  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-14 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-5"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </Link>
          <nav className="text-xs text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Home</Link> /{" "}
            <Link href="/blog" className="hover:text-white">Blog</Link> /{" "}
            <span className="text-white/80">{title}</span>
          </nav>
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ backgroundColor: "rgba(201,168,76,0.2)", color: "#C9A84C" }}>
            {category}
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 max-w-3xl">{title}</h1>
          <p className="text-white/75 text-base max-w-2xl mb-6">{subtitle}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span>✍️ Dr. Sireesha, MD Dermatology</span>
            <span>📅 {publishDate}</span>
            <span>⏱ {readTime}</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-14" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm prose-style">
                {children}
              </div>

              {/* Disclaimer */}
              <div className="mt-5 p-4 rounded-xl text-xs" style={{ backgroundColor: "#F5EDEA", color: "#6B6B6B" }}>
                <strong style={{ color: "#D45F3C" }}>Medical Disclaimer: </strong>
                This article is written for educational purposes by Dr. Sireesha and does not constitute personalised medical advice. Please consult a qualified dermatologist before beginning any treatment.
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <div className="bg-white rounded-2xl p-5 shadow-sm sticky top-24">
                <div className="w-full rounded-xl mb-4 overflow-hidden">
                  <Image src="/dr-sireesha.png" alt="Dr. Sireesha — MD Dermatology" width={300} height={200} className="w-full h-auto object-cover" />
                </div>
                <p className="font-bold text-sm mb-0.5" style={{ color: "#2D2D2D" }}>Dr. Sireesha</p>
                <p className="text-xs mb-1" style={{ color: "#6B6B6B" }}>MD Dermatology · Nandyala</p>
                <p className="text-xs mb-4" style={{ color: "#6B6B6B" }}>Yashvini Skin &amp; Hair Clinic</p>
                <Link href="/contact" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white mb-3 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
                  Book Appointment
                </Link>
                <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 rounded-xl text-sm font-semibold text-white" style={{ backgroundColor: "#25D366" }}>
                  💬 WhatsApp
                </a>
                <a href="tel:+918712144205" className="block text-center mt-3 text-sm font-medium hover:underline" style={{ color: "#1A6B6B" }}>
                  📞 +91 87121 44205
                </a>
              </div>

              {relatedTreatments.length > 0 && (
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>Related Treatments</h3>
                  <ul className="space-y-2">
                    {relatedTreatments.map((r) => (
                      <li key={r.href}>
                        <Link href={r.href} className="flex items-center gap-2 text-sm hover:underline" style={{ color: "#1A6B6B" }}>
                          <span>→</span>{r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedPosts.length > 0 && (
                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <h3 className="font-bold text-sm mb-4" style={{ color: "#2D2D2D" }}>More Articles</h3>
                  <ul className="space-y-2">
                    {relatedPosts.map((p) => (
                      <li key={p.href}>
                        <Link href={p.href} className="flex items-start gap-2 text-sm hover:underline leading-snug" style={{ color: "#1A6B6B" }}>
                          <span className="mt-0.5 flex-shrink-0">→</span>{p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#1A6B6B" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Have a Skin or Hair Concern?</h2>
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
