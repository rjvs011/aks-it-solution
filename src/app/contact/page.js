"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: "success", message: data.message || "Message sent successfully!" });
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Failed to send message." });
      }
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <div className="flex items-center justify-center space-x-2 text-white/90">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <i className="fas fa-chevron-right text-sm" />
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600">
                  Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "fas fa-map-marker-alt", gradient: "from-primary-500 to-primary-700", title: "Office Address", content: "NO 167, 37TH Cross 9TH Block, Jaya Nagar, Bengaluru, Karnataka 560035, India" },
                  { icon: "fas fa-envelope", gradient: "from-accent-500 to-accent-700", title: "Email Address", content: "rajusharma011473@gmail.com", href: "mailto:rajusharma011473@gmail.com" },
                  { icon: "fas fa-phone", gradient: "from-green-500 to-green-700", title: "Phone Number", content: "+91 8618109835", href: "tel:+918618109835" },
                  { icon: "fab fa-whatsapp", gradient: "from-emerald-500 to-emerald-700", title: "WhatsApp", content: "Chat with us on WhatsApp", href: "https://wa.me/918618109835", external: true },
                ].map((c) => (
                  <div key={c.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                    <div className="flex items-start">
                      <div className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-lg flex items-center justify-center text-white mr-4 flex-shrink-0`}>
                        <i className={c.icon} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-2">{c.title}</h3>
                        {c.href ? (
                          <a
                            href={c.href}
                            {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="text-gray-600 text-sm hover:text-primary-600 transition"
                          >
                            {c.content}
                          </a>
                        ) : (
                          <p className="text-gray-600 text-sm">{c.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

                {status && (
                  <div className={`mb-6 p-4 rounded-lg ${status.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                    {status.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition" placeholder="+91 1234567890" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interested In</label>
                    <select id="service" name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition">
                      <option value="">Select a service</option>
                      <option value="Support & Consultancy">Support & Consultancy</option>
                      <option value="Training & Research">Training & Research</option>
                      <option value="Product Design & Development">Product Design & Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Enterprise Management">Enterprise Management</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                    <textarea id="message" name="message" required rows={6} value={form.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" disabled={sending} className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition duration-300 disabled:opacity-50">
                    <i className="fas fa-paper-plane mr-2" />
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8589388982696!2d77.59044431482178!3d12.917350990889656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c0a0a0a0a1%3A0x0!2zMTLCsDU1JzAyLjUiTiA3N8KwMzUnMzYuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
