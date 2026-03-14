"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const skinItems = [
  { label: "Acne Treatment", href: "/skin-treatments/acne-treatment" },
  { label: "Acne Scars", href: "/skin-treatments/acne-scars" },
  { label: "Pigmentation", href: "/skin-treatments/pigmentation" },
  { label: "Melasma", href: "/skin-treatments/melasma" },
  { label: "Eczema", href: "/skin-treatments/eczema" },
  { label: "Psoriasis", href: "/skin-treatments/psoriasis" },
  { label: "Fungal Infection", href: "/skin-treatments/fungal-infection" },
  { label: "Skin Allergy", href: "/skin-treatments/skin-allergy" },
  { label: "Rosacea", href: "/skin-treatments/rosacea" },
  { label: "Vitiligo", href: "/skin-treatments/vitiligo" },
  { label: "Warts", href: "/skin-treatments/warts" },
  { label: "Skin Tags", href: "/skin-treatments/skin-tags" },
];

const hairItems = [
  { label: "Hair Fall Treatment", href: "/hair-treatments/hair-fall-treatment" },
  { label: "PRP Therapy", href: "/hair-treatments/prp-therapy" },
  { label: "Alopecia", href: "/hair-treatments/alopecia" },
  { label: "Dandruff", href: "/hair-treatments/dandruff" },
  { label: "Hair Thinning", href: "/hair-treatments/hair-thinning" },
  { label: "Telogen Effluvium", href: "/hair-treatments/telogen-effluvium" },
];

const cosmeticItems = [
  { label: "Chemical Peels", href: "/cosmetology/chemical-peels" },
  { label: "Laser Hair Removal", href: "/cosmetology/laser-hair-removal" },
  { label: "Microneedling", href: "/cosmetology/microneedling" },
  { label: "HydraFacial", href: "/cosmetology/hydrafacial" },
  { label: "Skin Brightening", href: "/cosmetology/skin-brightening" },
  { label: "Anti-Aging", href: "/cosmetology/anti-aging" },
  { label: "Scar Treatment", href: "/cosmetology/scar-treatment" },
  { label: "Skin Rejuvenation", href: "/cosmetology/skin-rejuvenation" },
];

const educationItems = [
  { label: "Blog — All Articles", href: "/blog" },
  { label: "Skin Care Tips", href: "/education/skin-care-tips" },
  { label: "Hair Care Tips", href: "/education/hair-care-tips" },
  { label: "Seasonal Skin Care", href: "/education/seasonal-skin-care" },
  { label: "Skin Care Myths", href: "/education/skin-care-myths" },
  { label: "Pre & Post Treatment Care", href: "/education/pre-post-treatment-care" },
];

function DropdownMenu({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div
      className="absolute top-full left-0 mt-1 w-52 rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="block px-4 py-2.5 text-sm transition-colors hover:text-white"
          style={{ color: "#2D2D2D" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1A6B6B";
            (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "";
            (e.currentTarget as HTMLAnchorElement).style.color = "#2D2D2D";
          }}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [skinOpen, setSkinOpen] = useState(false);
  const [hairOpen, setHairOpen] = useState(false);
  const [cosmeticOpen, setCosmeticOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [mobileSkinOpen, setMobileSkinOpen] = useState(false);
  const [mobileHairOpen, setMobileHairOpen] = useState(false);
  const [mobileCosmeticOpen, setMobileCosmeticOpen] = useState(false);
  const [mobileEducationOpen, setMobileEducationOpen] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setSkinOpen(false);
        setHairOpen(false);
        setCosmeticOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-50 w-full shadow-sm"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-xl font-bold" style={{ color: "#1A6B6B" }}>
              Yashvini
            </span>
            <span className="text-xs font-medium tracking-wide" style={{ color: "#C9A84C" }}>
              Skin &amp; Hair Clinic
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-teal-700"
              style={{ color: "#2D2D2D" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A6B6B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2D2D2D")}
            >
              Home
            </Link>

            {/* Skin Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSkinOpen(true)}
              onMouseLeave={() => setSkinOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: "#2D2D2D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#1A6B6B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#2D2D2D")}
              >
                Skin Treatments
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {skinOpen && <DropdownMenu items={skinItems} />}
            </div>

            {/* Hair Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHairOpen(true)}
              onMouseLeave={() => setHairOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: "#2D2D2D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#1A6B6B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#2D2D2D")}
              >
                Hair Treatments
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {hairOpen && <DropdownMenu items={hairItems} />}
            </div>

            {/* Cosmetology Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCosmeticOpen(true)}
              onMouseLeave={() => setCosmeticOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: "#2D2D2D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#1A6B6B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#2D2D2D")}
              >
                Cosmetology
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {cosmeticOpen && <DropdownMenu items={cosmeticItems} />}
            </div>

            {/* Education Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setEducationOpen(true)}
              onMouseLeave={() => setEducationOpen(false)}
            >
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                style={{ color: "#2D2D2D" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#1A6B6B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#2D2D2D")}
              >
                Blog &amp; Education
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {educationOpen && <DropdownMenu items={educationItems} />}
            </div>

            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ color: "#2D2D2D" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A6B6B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2D2D2D")}
            >
              About
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              style={{ color: "#2D2D2D" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#1A6B6B")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#2D2D2D")}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="ml-3 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#D45F3C" }}
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "#2D2D2D" }}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 pb-4">
            <div className="pt-2 space-y-1">
              <Link
                href="/"
                className="block px-4 py-2.5 text-sm font-medium"
                style={{ color: "#2D2D2D" }}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Skin */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium"
                  style={{ color: "#2D2D2D" }}
                  onClick={() => setMobileSkinOpen(!mobileSkinOpen)}
                >
                  Skin Treatments
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileSkinOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
                {mobileSkinOpen && (
                  <div className="pl-4 bg-gray-50">
                    {skinItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm"
                        style={{ color: "#1A6B6B" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Hair */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium"
                  style={{ color: "#2D2D2D" }}
                  onClick={() => setMobileHairOpen(!mobileHairOpen)}
                >
                  Hair Treatments
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileHairOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
                {mobileHairOpen && (
                  <div className="pl-4 bg-gray-50">
                    {hairItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm"
                        style={{ color: "#1A6B6B" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Cosmetology */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium"
                  style={{ color: "#2D2D2D" }}
                  onClick={() => setMobileCosmeticOpen(!mobileCosmeticOpen)}
                >
                  Cosmetology
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileCosmeticOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
                {mobileCosmeticOpen && (
                  <div className="pl-4 bg-gray-50">
                    {cosmeticItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm"
                        style={{ color: "#1A6B6B" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Education */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium"
                  style={{ color: "#2D2D2D" }}
                  onClick={() => setMobileEducationOpen(!mobileEducationOpen)}
                >
                  Blog &amp; Education
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileEducationOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </button>
                {mobileEducationOpen && (
                  <div className="pl-4 bg-gray-50">
                    {educationItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm"
                        style={{ color: "#1A6B6B" }}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block px-4 py-2.5 text-sm font-medium"
                style={{ color: "#2D2D2D" }}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>

              <Link
                href="/contact"
                className="block px-4 py-2.5 text-sm font-medium"
                style={{ color: "#2D2D2D" }}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: "#D45F3C" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
