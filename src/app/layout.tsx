import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const clinicSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://yashvini.in/#clinic",
      "name": "Yashvini Skin & Hair Clinic",
      "alternateName": "Yashvini Dermatology Clinic",
      "description": "Expert dermatology clinic in Nandyala offering skin treatments, hair loss treatment, and cosmetic procedures. Consultations available in Telugu and English.",
      "url": "https://yashvini.in",
      "telephone": "+918712144205",
      "email": "yashvini1984@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Nandyala Neuro Center, Beside Municipal Office, Sanjeeva Nagar",
        "addressLocality": "Nandyala",
        "addressRegion": "Andhra Pradesh",
        "postalCode": "518501",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "15.4786",
        "longitude": "78.4836",
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "13:00",
        },
      ],
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Card",
      "areaServed": { "@type": "City", "name": "Nandyala" },
      "medicalSpecialty": ["Dermatology", "Trichology", "Cosmetology"],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "Physician",
      "@id": "https://yashvini.in/about#doctor",
      "name": "Dr. Sireesha",
      "honorificPrefix": "Dr.",
      "jobTitle": "Dermatologist",
      "description": "Dr. Sireesha is an MD Dermatologist with 15+ years of experience in skin, hair, and cosmetic dermatology. Consultations available in Telugu and English.",
      "telephone": "+918712144205",
      "medicalSpecialty": { "@type": "MedicalSpecialty", "name": "Dermatology" },
      "memberOf": [{ "@type": "Organization", "name": "Indian Association of Dermatologists, Venereologists and Leprologists (IADVL)" }],
      "knowsLanguage": ["Telugu", "English"],
      "worksFor": { "@id": "https://yashvini.in/#clinic" },
    },
  ],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Yashvini Skin & Hair Clinic",
    default: "Yashvini Skin & Hair Clinic — Expert Dermatology in Nandyala, AP",
  },
  description:
    "Yashvini Skin & Hair Clinic in Nandyala, Andhra Pradesh offers expert dermatology, trichology, and cosmetology treatments by Dr. Sireesha, MD Dermatology.",
  metadataBase: new URL("https://yashvini.in"),
  alternates: {
    canonical: "https://yashvini.in",
  },
  openGraph: {
    siteName: "Yashvini Skin & Hair Clinic",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
