import { useState } from 'react';
import { Phone, MessageCircle, Check } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { doctors } from '@/data/doctors';
import { departments } from '@/data/departments';

type Step = 1 | 2 | 3;

export default function Appointments() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState({
    department: '',
    doctor: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
    insurance: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];

  const filteredDoctors = form.department
    ? doctors.filter((d) => d.department === form.department)
    : doctors;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Seo title="Appointment Confirmed | Shelby Medical Pavilion" description="Your appointment request has been received." path="/appointments" />
        <div className="flex min-h-[60vh] items-center justify-center py-16">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald/10">
              <Check size={40} className="text-emerald" />
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-navy">Appointment Requested!</h2>
            <p className="mt-3 text-slate-500 max-w-md">
              Thank you, <strong>{form.name}</strong>. Our team will confirm your appointment within 2 hours. You'll receive a call at {form.phone}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/" variant="primary">Back to Home</Button>
              <Button href="tel:+971506982268" variant="outline"><Phone size={16} /> Call Us</Button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Book an Appointment | Shelby Medical Pavilion Dubai"
        description="Book your appointment at Shelby Medical Pavilion Dubai. Choose your specialist, select a convenient time, and confirm your booking online."
        path="/appointments"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Book Now</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Book Your Appointment</h1>
          <p className="mt-4 text-lg text-white/80">Simple, fast online booking — confirmed within 2 hours.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px grid gap-12 lg:grid-cols-[1fr_340px]">
          {/* FORM */}
          <div>
            {/* STEPPER */}
            <div className="mb-8 flex items-center gap-3">
              {([1, 2, 3] as Step[]).map((s, i) => (
                <div key={s} className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${step >= s ? 'bg-teal text-white' : 'bg-graysoft text-slate-400'}`}>
                    {step > s ? <Check size={16} /> : s}
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${step >= s ? 'text-navy' : 'text-slate-400'}`}>
                    {s === 1 ? 'Choose Specialty' : s === 2 ? 'Select Time' : 'Your Details'}
                  </span>
                  {i < 2 && <div className={`hidden sm:block h-px w-12 ${step > s ? 'bg-teal' : 'bg-slate-200'}`} />}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <Reveal>
                  <div className="rounded-2xl bg-white p-8 shadow-card">
                    <h2 className="text-xl font-bold text-navy mb-6">Choose Department & Doctor</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Department</label>
                        <select
                          value={form.department}
                          onChange={(e) => setForm({ ...form, department: e.target.value, doctor: '' })}
                          className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                        >
                          <option value="">All Departments</option>
                          {departments.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Doctor (Optional)</label>
                        <select
                          value={form.doctor}
                          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                        >
                          <option value="">Any Available Doctor</option>
                          {filteredDoctors.map((d) => <option key={d.id} value={d.name}>{d.name} — {d.specialty}</option>)}
                        </select>
                      </div>
                    </div>
                    <Button type="button" onClick={() => setStep(2)} variant="primary" className="mt-8">Continue</Button>
                  </div>
                </Reveal>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <Reveal>
                  <div className="rounded-2xl bg-white p-8 shadow-card">
                    <h2 className="text-xl font-bold text-navy mb-6">Select Date & Time</h2>
                    <div className="space-y-5">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Preferred Date</label>
                        <input
                          type="date"
                          required
                          min={new Date().toISOString().split('T')[0]}
                          value={form.date}
                          onChange={(e) => setForm({ ...form, date: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Preferred Time</label>
                        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                          {timeSlots.map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setForm({ ...form, time: t })}
                              className={`rounded-xl border py-2.5 text-xs font-semibold transition ${form.time === t ? 'border-teal bg-teal text-white' : 'border-slate-200 text-slate-600 hover:border-teal'}`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-8 flex gap-3">
                      <Button type="button" onClick={() => setStep(1)} variant="outline">Back</Button>
                      <Button type="button" onClick={() => form.date && form.time && setStep(3)} variant="primary">Continue</Button>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <Reveal>
                  <div className="rounded-2xl bg-white p-8 shadow-card">
                    <h2 className="text-xl font-bold text-navy mb-6">Your Details</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Full Name *</label>
                        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Phone Number *</label>
                        <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+971 XX XXX XXXX" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Email Address</label>
                        <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none" />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-navy">Insurance Provider</label>
                        <input value={form.insurance} onChange={(e) => setForm({ ...form, insurance: e.target.value })} placeholder="e.g. Daman, AXA" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none" />
                      </div>
                      <div className="md:col-span-2">
                        <label className="mb-2 block text-sm font-semibold text-navy">Notes / Symptoms</label>
                        <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Brief description of your concern…" className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:border-teal focus:outline-none resize-none" />
                      </div>
                    </div>
                    <div className="mt-8 flex gap-3">
                      <Button type="button" onClick={() => setStep(2)} variant="outline">Back</Button>
                      <Button type="submit" variant="primary">Confirm Appointment</Button>
                    </div>
                  </div>
                </Reveal>
              )}
            </form>
          </div>

          {/* SIDEBAR INFO */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="rounded-2xl bg-navy p-6 text-white">
                <h3 className="font-bold">Emergency?</h3>
                <p className="mt-2 text-sm text-white/70">For medical emergencies, call 998 immediately or visit the nearest emergency room.</p>
                <Button href="tel:998" variant="emergency" className="mt-4 w-full">Emergency: 998</Button>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-bold text-navy">Prefer to Call?</h3>
                <p className="mt-2 text-sm text-slate-500">Our team is available daily from 8 AM to 10 PM.</p>
                <a href="tel:+971506982268" className="mt-3 flex items-center gap-2 text-teal font-semibold"><Phone size={16} /> +971 50 698 2268</a>
                <a href="https://wa.me/971506982268" className="mt-2 flex items-center gap-2 text-emerald font-semibold"><MessageCircle size={16} /> WhatsApp Us</a>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="rounded-2xl bg-graysoft p-6">
                <h3 className="font-bold text-navy">Clinic Hours</h3>
                <div className="mt-3 space-y-2 text-sm">
                  {[['Saturday – Thursday', '8:00 AM – 10:00 PM'], ['Friday', '2:00 PM – 10:00 PM'], ['Emergency Line', '24/7 – Call 998']].map(([day, hrs]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-slate-500">{day}</span>
                      <span className="font-semibold text-navy">{hrs}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
