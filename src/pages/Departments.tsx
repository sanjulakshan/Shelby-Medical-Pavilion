import { useState } from 'react';
import { ChevronDown, ChevronUp, HeartPulse, Baby, Sparkles, Bone, Users, Flower2, Stethoscope, Ear, Check, type LucideIcon } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { departments } from '@/data/departments';

const iconMap: Record<string, LucideIcon> = {
  HeartPulse, Baby, Sparkles, Bone, Users, Flower2, Stethoscope, Ear,
};

export default function Departments() {
  const [active, setActive] = useState(departments[0].id);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const dept = departments.find((d) => d.id === active) ?? departments[0];

  return (
    <>
      <Seo
        title="Medical Departments | Shelby Medical Pavilion Dubai"
        description="Explore our specialist medical departments — Cardiology, Pediatrics, Dermatology, Orthopedics, Women's Health and more in Dubai."
        path="/departments"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Specialties</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Our Medical Departments</h1>
          <p className="mt-4 text-lg text-white/80">Comprehensive multi-specialty care under one roof.</p>
        </div>
      </section>

      <section className="section-y">
        <div className="container-px grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* SIDEBAR */}
          <nav aria-label="Department navigation">
            <ul className="sticky top-24 space-y-1">
              {departments.map((d) => {
                const Icon = iconMap[d.icon] ?? HeartPulse;
                return (
                  <li key={d.id}>
                    <button
                      onClick={() => { setActive(d.id); setOpenFaq(null); }}
                      className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${active === d.id ? 'bg-teal text-white shadow-soft' : 'text-slate-600 hover:bg-graysoft'}`}
                    >
                      <Icon size={18} className={active === d.id ? 'text-white' : 'text-teal'} />
                      {d.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* CONTENT */}
          <div>
            <Reveal key={dept.id}>
              <div className="rounded-2xl bg-white p-8 shadow-card">
                <h2 className="text-2xl font-extrabold text-navy">{dept.name}</h2>
                <p className="mt-3 leading-relaxed text-slate-500">{dept.overview}</p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  <div>
                    <h3 className="mb-3 font-bold text-navy">Services Offered</h3>
                    <ul className="space-y-2">
                      {dept.services.map((s) => (
                        <li key={s} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check size={14} className="text-emerald shrink-0" /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-3 font-bold text-navy">Conditions & Treatments</h3>
                    <ul className="space-y-2">
                      {dept.treatments.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check size={14} className="text-teal shrink-0" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {dept.faqs.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-4 font-bold text-navy">Frequently Asked Questions</h3>
                    <div className="space-y-3">
                      {dept.faqs.map((faq, i) => (
                        <div key={i} className="rounded-xl border border-slate-100 overflow-hidden">
                          <button
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                            className="flex w-full items-center justify-between p-4 text-left text-sm font-semibold text-navy"
                          >
                            {faq.q}
                            {openFaq === i ? <ChevronUp size={16} className="text-teal shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                          </button>
                          {openFaq === i && (
                            <div className="border-t bg-graysoft/50 px-4 py-3 text-sm text-slate-500">{faq.a}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button to="/appointments" variant="primary">Book Appointment</Button>
                  <Button to="/doctors" variant="outline">Find a Doctor</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ALL DEPARTMENTS GRID */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Overview" title="All Our Specialties" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d, i) => {
              const Icon = iconMap[d.icon] ?? HeartPulse;
              return (
                <Reveal key={d.id} delay={i * 0.05}>
                  <button
                    onClick={() => { setActive(d.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="group flex w-full items-start gap-4 rounded-2xl bg-white p-5 text-left shadow-card transition hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <div className="font-bold text-navy">{d.name}</div>
                      <div className="mt-1 text-xs text-slate-500">{d.shortDesc}</div>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
