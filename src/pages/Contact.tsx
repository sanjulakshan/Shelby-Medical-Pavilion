import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Check, Send } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Seo
        title="Contact Us | Shelby Medical Pavilion Dubai"
        description="Get in touch with Shelby Medical Pavilion. Call, WhatsApp, email, or visit us in Dubai. We're available 7 days a week."
        path="/contact"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Contact</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-white/80">We're here to help — reach us by phone, WhatsApp, email, or visit us in Dubai.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_400px]">
          {/* FORM */}
          <Reveal>
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-white p-12 shadow-card text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10">
                  <Check size={40} className="text-emerald" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-navy">Message Sent!</h2>
                <p className="mt-3 text-slate-500">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                <Button onClick={() => setSent(false)} variant="outline" className="mt-6">Send Another Message</Button>
              </div>
            ) : (
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h2 className="text-xl font-bold text-navy mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-navy">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-navy">Phone Number</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+971 XX XXX XXXX"
                        className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-navy">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-navy">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                    >
                      <option value="">Select a topic</option>
                      <option>Appointment Enquiry</option>
                      <option>Insurance Query</option>
                      <option>General Information</option>
                      <option>Medical Records</option>
                      <option>Feedback or Complaint</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-navy">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none resize-none"
                    />
                  </div>
                  <Button type="submit" variant="primary" className="w-full">
                    <Send size={16} /> Send Message
                  </Button>
                </form>
              </div>
            )}
          </Reveal>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-navy p-6 text-white">
                <h3 className="font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-white/70 mt-0.5">Dubai, United Arab Emirates</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <a href="tel:+971506982268" className="text-white/70 hover:text-teal transition">+971 50 698 2268</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle size={18} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <a href="https://wa.me/971506982268" className="text-white/70 hover:text-teal transition">+971 50 698 2268</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={18} className="text-teal shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <a href="mailto:shelbydevelopmentsae@gmail.com" className="text-white/70 hover:text-teal transition break-all">shelbydevelopmentsae@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={18} className="text-teal" />
                  <h3 className="font-bold text-navy">Clinic Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  {[
                    ['Saturday – Thursday', '8:00 AM – 10:00 PM'],
                    ['Friday', '2:00 PM – 10:00 PM'],
                    ['Emergency Line', '24/7 — Call 998'],
                  ].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-slate-500">{day}</span>
                      <span className="font-semibold text-navy">{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-graysoft p-6">
                <h3 className="font-bold text-navy mb-3">Quick Actions</h3>
                <div className="space-y-3">
                  <Button to="/appointments" variant="primary" className="w-full">Book an Appointment</Button>
                  <Button href="https://wa.me/971506982268" variant="secondary" className="w-full">
                    <MessageCircle size={16} /> WhatsApp Us
                  </Button>
                  <Button href="tel:+971506982268" variant="outline" className="w-full">
                    <Phone size={16} /> Call Now
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="pb-16">
        <div className="container-px">
          <div className="overflow-hidden rounded-2xl shadow-soft">
            <iframe
              title="Shelby Medical Pavilion Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.30721396137!2d54.89784022475825!3d25.076280452589786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1699000000000!5m2!1sen!2sae"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
