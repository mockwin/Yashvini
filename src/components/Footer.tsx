import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1A6B6B" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="mb-3">
              <span className="text-2xl font-bold text-white">Yashvini</span>
              <br />
              <span className="text-sm font-medium" style={{ color: "#C9A84C" }}>
                Skin &amp; Hair Clinic
              </span>
            </div>
            <p className="text-sm text-white/75 leading-relaxed">
              Expert dermatology, trichology, and cosmetology care in Nandyala, Andhra Pradesh — by Dr. Sireesha, MD Dermatology.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://wa.me/918712144205"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#25D366" }}
                aria-label="WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="tel:+918712144205"
                className="flex items-center justify-center w-9 h-9 rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                aria-label="Phone"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C9A84C" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Dr. Sireesha", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Book Appointment", href: "/contact" },
                { label: "Skin Treatments", href: "/skin-treatments/acne-treatment" },
                { label: "Hair Treatments", href: "/hair-treatments/hair-fall-treatment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C9A84C" }}>
              Skin Treatments
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
                { label: "Pigmentation", href: "/skin-treatments/pigmentation" },
                { label: "Melasma", href: "/skin-treatments/melasma" },
                { label: "Eczema", href: "/skin-treatments/eczema" },
                { label: "Psoriasis", href: "/skin-treatments/psoriasis" },
                { label: "Vitiligo", href: "/skin-treatments/vitiligo" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C9A84C" }}>
              Hair Treatments
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Hair Fall Treatment", href: "/hair-treatments/hair-fall-treatment" },
                { label: "PRP Therapy", href: "/hair-treatments/prp-therapy" },
                { label: "Alopecia", href: "/hair-treatments/alopecia" },
                { label: "Dandruff", href: "/hair-treatments/dandruff" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: "#C9A84C" }}>
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-2 text-sm text-white/75">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Nandyala Neuro Center, Beside Municipal Office, Sanjeeva Nagar, Nandyala, AP — 518501</span>
              </li>
              <li>
                <a href="tel:+918712144205" className="flex gap-2 text-sm text-white/75 hover:text-white transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +91 87121 44205
                </a>
              </li>
              <li>
                <a href="https://wa.me/918712144205" className="flex gap-2 text-sm text-white/75 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href="mailto:yashvini1984@gmail.com" className="flex gap-2 text-sm text-white/75 hover:text-white transition-colors">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  yashvini1984@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.08)" }}>
              <p className="text-xs font-semibold text-white/90 mb-1">Clinic Hours</p>
              <p className="text-xs text-white/65">Mon – Sat: 9:00 AM – 7:00 PM</p>
              <p className="text-xs text-white/65">Sunday: 10:00 AM – 1:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ backgroundColor: "rgba(0,0,0,0.2)" }} className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} Yashvini Skin &amp; Hair Clinic. All rights reserved.
          </p>
          <p className="text-xs text-white/60">
            Designed with care for patients of Nandyala
          </p>
        </div>
      </div>
    </footer>
  );
}
