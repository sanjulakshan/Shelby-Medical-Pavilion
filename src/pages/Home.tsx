import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Calendar, UserSearch, Building2, Stethoscope, ShieldCheck, Phone,
  HeartPulse, Baby, Sparkles, Bone, Users, Flower2,
  HandHeart, Star, ArrowRight, Ambulance, Check, type LucideIcon,
} from 'lucide-react';
import { Seo } from '@/lib/seo';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Stat } from '@/components/ui/Stat';
import { doctors } from '@/data/doctors';
import { departments } from '@/data/departments';
import { testimonials } from '@/data/testimonials';
import { insurancePartners } from '@/data/insurance';
import { articles } from '@/data/articles';
import { healthPackages } from '@/data/packages';

const deptIcons: Record<string, LucideIcon> = {
  HeartPulse, Baby, Sparkles, Bone, Users, Flower2, Stethoscope,
};

export default function Home() {
  return (
    <>
      <Seo
        title="Shelby Medical Pavilion | Premium Multi-Specialty Healthcare in Dubai"
        description="Healthcare excellence you can trust. Expert doctors, advanced diagnostics & compassionate care across Dubai. Book your appointment today."
        path="/"
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-700 to-teal/90 text-white">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, #3FBFC9 0%, transparent 40%)' }} />
        <div className="container-px relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur">
              <ShieldCheck size={14} /> DHA Licensed • Trusted by 50,000+ patients
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Healthcare Excellence{' '}
              <span className="text-teal-light">You Can Trust</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-200">
              Compassionate Care. Advanced Medicine. Exceptional Outcomes. Dubai's modern multi-specialty medical center built around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/appointments" variant="primary"><Calendar size={18} /> Book Appointment</Button>
              <Button to="/doctors" variant="outline" className="border-white text-white hover:bg-white hover:text-navy"><UserSearch size={18} /> Find a Doctor</Button>
              <Button href="tel:998" variant="emergency"><Ambulance size={18} /> Emergency: 998</Button>
            </div>
            <div className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/15 pt-6">
              <Stat value={50} suffix="+" label="Specialists" />
              <Stat value={11} label="Departments" />
              <Stat value={15} suffix="+" label="Years of Care" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80"
              alt="Modern medical center"
              className="rounded-3xl shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 text-navy shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald/10 text-emerald"><HandHeart /></span>
                <div>
                  <div className="text-sm font-bold">Patient-First Care</div>
                  <div className="text-xs text-slate-500">Available 7 days a week</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK ACCESS */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: Calendar, label: 'Book Appointment', to: '/appointments' },
              { icon: UserSearch, label: 'Find Doctor', to: '/doctors' },
              { icon: Building2, label: 'Departments', to: '/departments' },
              { icon: Stethoscope, label: 'Health Packages', to: '/services' },
              { icon: ShieldCheck, label: 'Insurance Info', to: '/insurance' },
              { icon: Phone, label: 'Contact Us', to: '/contact' },
            ].map((q, i) => (
              <Reveal key={q.label} delay={i * 0.05}>
                <Link to={q.to} className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                    <q.icon />
                  </span>
                  <span className="text-sm font-semibold text-navy">{q.label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section-y">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
              alt="Doctors collaborating"
              className="rounded-3xl shadow-soft"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="mb-3 inline-block rounded-full bg-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal">About Us</span>
            <h2 className="text-3xl font-bold md:text-4xl">A New Standard of Healthcare in Dubai</h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              Shelby Medical Pavilion brings together world-class specialists, advanced diagnostics, and a patient-first philosophy under one modern roof. We blend cutting-edge technology with genuine compassion to deliver care that transforms lives.
            </p>
            <ul className="mt-6 space-y-3">
              {['DHA Licensed & Internationally Accredited', 'Over 50 expert specialists across 11 departments', 'Advanced diagnostics & minimally invasive treatments', 'Multilingual staff — Arabic, English & more', 'Direct insurance billing with 12+ providers'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal"><Check size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary" className="mt-8">Learn About Us <ArrowRight size={16} /></Button>
          </Reveal>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Specialties" title="Our Medical Departments" subtitle="Comprehensive care across 11 specialties delivered by internationally trained consultants." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {departments.slice(0, 8).map((dept, i) => {
              const Icon = deptIcons[dept.icon] ?? HeartPulse;
              return (
                <Reveal key={dept.id} delay={i * 0.05}>
                  <Link to="/departments" className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{dept.name}</h3>
                      <p className="mt-1 text-sm text-slate-500">{dept.shortDesc}</p>
                    </div>
                    <span className="mt-auto flex items-center gap-1 text-xs font-semibold text-teal">
                      Learn More <ArrowRight size={12} />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button to="/departments" variant="outline">View All Departments</Button>
          </div>
        </div>
      </section>

      {/* DOCTORS */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Our Team" title="Meet Our Specialists" subtitle="Internationally trained, DHA-licensed consultants dedicated to your care." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.slice(0, 4).map((doc, i) => (
              <Reveal key={doc.id} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-navy">{doc.name}</h3>
                    <p className="text-sm text-teal">{doc.specialty}</p>
                    <p className="mt-1 text-xs text-slate-400">{doc.experience} years experience</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {doc.languages.slice(0, 2).map((l) => (
                        <span key={l} className="rounded-full bg-graysoft px-2 py-0.5 text-xs text-slate-500">{l}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/doctors" variant="outline">View All Doctors</Button>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="bg-gradient-to-r from-navy to-teal py-16">
        <div className="container-px grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { value: 50000, suffix: '+', label: 'Patients Treated' },
            { value: 50, suffix: '+', label: 'Expert Specialists' },
            { value: 11, suffix: '', label: 'Medical Departments' },
            { value: 15, suffix: '+', label: 'Years of Excellence' },
          ].map((s) => (
            <Reveal key={s.label}>
              <div className="text-center text-white">
                <div className="text-4xl font-extrabold">
                  <Stat value={s.value} suffix={s.suffix} label="" />
                </div>
                <p className="mt-1 text-sm font-medium text-white/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HEALTH PACKAGES */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Packages" title="Health Check Packages" subtitle="Invest in your health with our comprehensive screening packages." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {healthPackages.slice(0, 3).map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.08}>
                <div className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-card ${pkg.popular ? 'ring-2 ring-teal' : ''}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-teal px-4 py-1 text-xs font-bold text-white">Most Popular</span>
                  )}
                  <h3 className="text-lg font-bold text-navy">{pkg.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{pkg.description}</p>
                  <div className="my-4 text-3xl font-extrabold text-teal">{pkg.price}</div>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={14} className="text-emerald shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button to="/appointments" variant={pkg.popular ? 'primary' : 'outline'} className="mt-6">Book This Package</Button>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/services" variant="outline">View All Packages</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Testimonials" title="What Our Patients Say" subtitle="Real stories from patients who trust us with their health." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.07}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">"{t.quote}"</p>
                  <div className="mt-auto border-t pt-4">
                    <div className="font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role} • {t.treatment}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSURANCE */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Insurance" title="Accepted Insurance Partners" subtitle="We work with 12+ leading insurance providers for seamless direct billing." />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {insurancePartners.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.03}>
                <div className="rounded-xl bg-white px-6 py-4 text-center shadow-card">
                  <div className="font-bold text-navy">{p.name}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{p.coverage}</div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button to="/insurance" variant="outline">Insurance Details</Button>
          </div>
        </div>
      </section>

      {/* HEALTH LIBRARY */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Health Library" title="Latest Health Articles" subtitle="Expert-written guides to help you live healthier." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(0, 3).map((article, i) => (
              <Reveal key={article.id} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <div className="overflow-hidden">
                    <img src={article.image} alt={article.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal">{article.category}</span>
                    <h3 className="mt-3 font-bold text-navy leading-snug">{article.title}</h3>
                    <p className="mt-2 text-sm text-slate-500 line-clamp-2">{article.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                      <span>{article.date}</span>
                      <span>{article.readTime} read</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/health-library" variant="outline">Read More Articles</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-gradient-to-br from-navy to-teal text-white">
        <div className="container-px text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold md:text-4xl">Ready to Take Control of Your Health?</h2>
            <p className="mt-4 text-lg text-white/80">Book your appointment today and experience world-class healthcare in Dubai.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/appointments" variant="primary" className="!bg-white !text-navy hover:!bg-white/90">
                <Calendar size={18} /> Book Appointment
              </Button>
              <Button href="tel:+971506982268" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                <Phone size={18} /> Call Us Now
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
