import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Dr. Sireesha — Dermatologist in Nandyala",
  description: "Meet Dr. Sireesha, MD Dermatology, at Yashvini Skin & Hair Clinic in Nandyala. Expert in skin, hair, and cosmetic treatments serving patients across Andhra Pradesh.",
  alternates: { canonical: "https://yashvini.in/about" },
};

const expertise = [
  { icon: "🧴", area: "Medical Dermatology", items: ["Acne & Acne Scars", "Eczema & Psoriasis", "Vitiligo", "Fungal Infections", "Skin Allergies", "Rosacea"] },
  { icon: "💈", area: "Trichology (Hair)", items: ["Hair Fall Diagnosis", "Androgenetic Alopecia", "Alopecia Areata", "PRP Hair Therapy", "Dandruff & Scalp Disorders", "Telogen Effluvium"] },
  { icon: "💎", area: "Cosmetology", items: ["Chemical Peels", "Laser Hair Removal", "Microneedling", "HydraFacial", "Skin Brightening", "Anti-Aging Treatments"] },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #073434 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white/80">About</span>
          </nav>
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">Meet Dr. Sireesha</h1>
          <p className="text-lg text-white/75">MD Dermatology · Yashvini Skin &amp; Hair Clinic, Nandyala</p>
        </div>
      </section>

      {/* BIO */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Placeholder Image */}
            <div className="rounded-2xl overflow-hidden sticky top-24" style={{ background: "linear-gradient(135deg, #1A6B6B, #2D9B9B)", minHeight: 420 }}>
              <div className="h-full flex flex-col items-center justify-center p-10 text-white text-center" style={{ minHeight: 420 }}>
                <div className="w-32 h-32 rounded-full mb-5 flex items-center justify-center text-6xl" style={{ backgroundColor: "rgba(255,255,255,0.15)" }}>👩‍⚕️</div>
                <p className="text-2xl font-bold">Dr. Sireesha</p>
                <p className="text-sm text-white/70 mt-1">MD Dermatology</p>
                <div className="mt-6 space-y-2 text-sm text-white/60">
                  <p>Yashvini Skin &amp; Hair Clinic</p>
                  <p>Nandyala, Andhra Pradesh</p>
                </div>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {["MD Dermatology", "IADVL Member", "15+ Years"].map((b) => (
                    <span key={b} className="px-3 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: "rgba(201,168,76,0.25)", color: "#C9A84C" }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#C9A84C" }}>Your Dermatologist</div>
              <h2 className="text-3xl font-bold mb-5" style={{ color: "#2D2D2D" }}>About Dr. Sireesha</h2>

              <div className="space-y-4 text-base leading-relaxed" style={{ color: "#6B6B6B" }}>
                <p>
                  Dr. Sireesha is a qualified dermatologist holding an <strong style={{ color: "#2D2D2D" }}>MD in Dermatology</strong> and brings extensive clinical experience in both medical and aesthetic dermatology. She established Yashvini Skin &amp; Hair Clinic in Nandyala with a singular mission: to provide the people of this region with access to high-quality, evidence-based, and affordable skin and hair care.
                </p>
                <p>
                  Over the years, Dr. Sireesha has treated thousands of patients from Nandyala and the surrounding districts of Andhra Pradesh for a wide spectrum of conditions — from everyday concerns like acne and dandruff to complex conditions like vitiligo, psoriasis, and androgenetic alopecia.
                </p>
                <p>
                  She is a member of the <strong style={{ color: "#2D2D2D" }}>Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)</strong> and the Andhra Pradesh Dermatological Society, staying current with the latest developments in dermatology through continuous professional education.
                </p>
                <p>
                  Dr. Sireesha conducts consultations in both <strong style={{ color: "#2D2D2D" }}>Telugu and English</strong>, making specialised dermatological care genuinely accessible to all patients in the region.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Qualification", value: "MD, Dermatology" },
                  { label: "Specialisation", value: "Dermatology, Trichology & Cosmetology" },
                  { label: "Memberships", value: "IADVL, AP Dermatological Society" },
                  { label: "Languages", value: "Telugu, English" },
                  { label: "Clinic", value: "Yashvini Skin & Hair Clinic, Nandyala" },
                  { label: "Consultation", value: "In-Clinic & Teleconsultation" },
                ].map((c) => (
                  <div key={c.label} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "#C9A84C" }}>{c.label}</p>
                    <p className="text-sm font-medium" style={{ color: "#2D2D2D" }}>{c.value}</p>
                  </div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-8 border-l-4 pl-5 py-2 italic text-base" style={{ borderColor: "#1A6B6B", color: "#6B6B6B" }}>
                &ldquo;Skin and hair conditions can deeply affect a person&apos;s confidence. I started Yashvini Clinic so that the people of Nandyala could access honest, compassionate, and high-quality dermatological care — without having to travel to a distant city.&rdquo;
                <footer className="mt-2 text-sm font-semibold not-italic" style={{ color: "#1A6B6B" }}>— Dr. Sireesha</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ color: "#2D2D2D" }}>Areas of Expertise</h2>
            <p style={{ color: "#6B6B6B" }}>Comprehensive dermatological care across three speciality areas</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((e) => (
              <div key={e.area} className="rounded-2xl p-6 border-t-4" style={{ backgroundColor: "#FAF8F5", borderColor: "#1A6B6B" }}>
                <div className="text-3xl mb-3">{e.icon}</div>
                <h3 className="text-lg font-bold mb-4" style={{ color: "#1A6B6B" }}>{e.area}</h3>
                <ul className="space-y-2">
                  {e.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm" style={{ color: "#6B6B6B" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A84C" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14" style={{ backgroundColor: "#1A6B6B" }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Book a Consultation with Dr. Sireesha</h2>
          <p className="text-white/70 mb-7 text-sm">Available in Nandyala at Yashvini Skin &amp; Hair Clinic. Consultations in Telugu &amp; English.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#D45F3C" }}>
              Book Appointment
            </Link>
            <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-lg font-semibold border-2 border-white/50 text-white hover:border-white transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
