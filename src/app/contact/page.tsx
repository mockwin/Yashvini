"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", concern: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form API or WhatsApp redirect
    setSubmitted(true);
  };

  const hours = [
    { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
    { day: "Sunday", time: "10:00 AM – 1:00 PM" },
  ];

  return (
    <>
      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #1A6B6B 0%, #0D4F4F 100%)" }} className="py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/50 mb-6">
            <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white/80">Contact</span>
          </nav>
          <h1 className="text-4xl font-bold mb-2">Contact Yashvini Skin &amp; Hair Clinic</h1>
          <p className="text-white/70">We&apos;re here to help — reach us by phone, WhatsApp, or visit us in Nandyala</p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-16" style={{ backgroundColor: "#FAF8F5" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT — Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D2D2D" }}>Clinic Information</h2>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl" style={{ backgroundColor: "#F5EDEA" }}>📍</div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1A6B6B" }}>Address</p>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                      Nandyala Neuro Center, Beside Municipal Office,<br />
                      Sanjeeva Nagar, Nandyala, AP — 518501
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl" style={{ backgroundColor: "#F5EDEA" }}>📞</div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1A6B6B" }}>Phone</p>
                    <a href="tel:+918712144205" className="text-sm hover:underline" style={{ color: "#6B6B6B" }}>+91 87121 44205</a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl" style={{ backgroundColor: "#F5EDEA" }}>💬</div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1A6B6B" }}>WhatsApp</p>
                    <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline" style={{ color: "#6B6B6B" }}>
                      Message us on WhatsApp →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-xl" style={{ backgroundColor: "#F5EDEA" }}>✉️</div>
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: "#1A6B6B" }}>Email</p>
                    <a href="mailto:yashvini1984@gmail.com" className="text-sm hover:underline" style={{ color: "#6B6B6B" }}>yashvini1984@gmail.com</a>
                  </div>
                </div>
              </div>

              {/* Clinic Hours */}
              <div className="mt-8 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-bold mb-4 text-base" style={{ color: "#2D2D2D" }}>🕒 Clinic Hours</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {hours.map((h) => (
                      <tr key={h.day} className="border-b last:border-0" style={{ borderColor: "#F5EDEA" }}>
                        <td className="py-2.5 font-medium" style={{ color: "#2D2D2D" }}>{h.day}</td>
                        <td className="py-2.5 text-right" style={{ color: "#1A6B6B" }}>{h.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="mt-3 text-xs" style={{ color: "#6B6B6B" }}>Walk-ins welcome. Appointments recommended to minimise wait time.</p>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-sm" style={{ height: 260 }}>
                <iframe
                  title="Yashvini Skin & Hair Clinic Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30741.39!2d78.4836!3d15.4786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5d18d!2sNandyala!5e0!3m2!1sen!2sin!4v1"
                />
              </div>
            </div>

            {/* RIGHT — Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6" style={{ color: "#2D2D2D" }}>Request an Appointment</h2>
              {submitted ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: "#1A6B6B" }}>Request Received!</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#6B6B6B" }}>
                    Thank you for reaching out. We will contact you shortly to confirm your appointment. For faster response, WhatsApp us at +91 87121 44205.
                  </p>
                  <a
                    href="https://wa.me/918712144205"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-7 shadow-sm space-y-5">
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#2D2D2D" }}>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all"
                      style={{ borderColor: "#E5E7EB", color: "#2D2D2D" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#2D2D2D" }}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                      style={{ borderColor: "#E5E7EB", color: "#2D2D2D" }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#2D2D2D" }}>Concern / Treatment Needed</label>
                    <select
                      value={form.concern}
                      onChange={(e) => setForm({ ...form, concern: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                      style={{ borderColor: "#E5E7EB", color: "#2D2D2D" }}
                    >
                      <option value="">Select a concern</option>
                      <option>Acne / Pimples</option>
                      <option>Hair Fall</option>
                      <option>Dandruff</option>
                      <option>Pigmentation / Dark Spots</option>
                      <option>Melasma</option>
                      <option>Laser Hair Removal</option>
                      <option>PRP Hair Therapy</option>
                      <option>Chemical Peel</option>
                      <option>HydraFacial</option>
                      <option>Skin Allergy / Eczema</option>
                      <option>Vitiligo</option>
                      <option>Psoriasis</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "#2D2D2D" }}>Message (Optional)</label>
                    <textarea
                      placeholder="Briefly describe your concern or preferred appointment time..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all"
                      style={{ borderColor: "#E5E7EB", color: "#2D2D2D" }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-white text-sm transition-opacity hover:opacity-90"
                    style={{ backgroundColor: "#D45F3C" }}
                  >
                    Send Appointment Request
                  </button>
                  <p className="text-xs text-center" style={{ color: "#6B6B6B" }}>
                    Or{" "}
                    <a href="https://wa.me/918712144205" target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: "#25D366" }}>
                      message us on WhatsApp
                    </a>{" "}
                    for instant response.
                  </p>
                  <p className="text-xs" style={{ color: "#6B6B6B" }}>
                    <strong>Medical Disclaimer:</strong> This form is for appointment requests only and does not constitute medical advice. Please consult Dr. Sireesha in person for a proper diagnosis and treatment plan.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
