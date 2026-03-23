import React, { useState } from 'react';
import { Phone, Mail, Send } from 'lucide-react';

/* ══════════════════════════════════════════════════════════════════════
   CONTACT SECTION 2 — Contact Form + Quick CTA Cards
══════════════════════════════════════════════════════════════════════ */

const ContactSection2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, send data to backend here.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section className="py-20 px-4 md:px-8 max-w-3xl mx-auto w-full">

      {/* Contact Form */}
      <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[rgba(50,50,105,0.12)_0px_4px_20px_0px]">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#0A1128] mb-2">
          Send a Message
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Fill out the form and our team will get back to you within 24 hours.
        </p>

        {submitted && (
          <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-4 text-sm font-medium">
            <Send size={16} />
            Message sent! We&rsquo;ll be in touch soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Phone + Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none cursor-pointer"
              >
                <option value="">Select a topic</option>
                <option value="buying">Buying a Property</option>
                <option value="selling">Selling a Property</option>
                <option value="renting">Renting / Leasing</option>
                <option value="developer">Developer Enquiry</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell us how we can help you…"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 w-full flex items-center justify-center gap-2.5 bg-gradient-to-br from-[#0f172a] to-[#1e3a8a] text-white font-semibold text-sm py-4 rounded-xl transition-all shadow-[0_4px_16px_rgba(15,23,42,0.25)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.35)] hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>

      {/* Quick Contact CTA Cards */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
        <a
          href="tel:+917874755553"
          className="group flex flex-col gap-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-blue-400/50 hover:shadow-[0_4px_20px_rgba(37,99,235,0.12)] transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <Phone size={18} className="text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <span className="font-semibold text-[#0A1128] font-serif">Call Now</span>
          <span className="text-sm text-gray-500">+91 78747 55553</span>
        </a>

        <a
          href="mailto:info@ramanrealty.in"
          className="group flex flex-col gap-2 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:border-blue-400/50 hover:shadow-[0_4px_20px_rgba(37,99,235,0.12)] transition-all"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
            <Mail size={18} className="text-blue-600 group-hover:text-white transition-colors" />
          </div>
          <span className="font-semibold text-[#0A1128] font-serif">Email Us</span>
          <span className="text-sm text-gray-500">info@ramanrealty.in</span>
        </a>
      </div> */}

    </section>
  );
};

export default ContactSection2;
