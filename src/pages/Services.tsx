import { Stethoscope, Ear, Activity, Microscope, Leaf, ShieldCheck, Video, Pill, Apple, Brain, Syringe, Home, Check, type LucideIcon } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { healthPackages } from '@/data/packages';

const iconMap: Record<string, LucideIcon> = {
  Stethoscope, Ear, Activity, Microscope, Leaf, ShieldCheck, Video, Pill, Apple, Brain, Syringe, Home,
};

const services = [
  { id: 'internal-medicine', name: 'Internal Medicine', desc: 'Expert diagnosis and management of adult health conditions, including diabetes, hypertension, and metabolic disorders.', icon: 'Stethoscope' },
  { id: 'ent', name: 'ENT', desc: 'Comprehensive ear, nose, and throat care for children and adults, including surgical and non-surgical treatments.', icon: 'Ear' },
  { id: 'physiotherapy', name: 'Physiotherapy', desc: 'Evidence-based rehabilitation programs for pain management, post-surgical recovery, and sports injuries.', icon: 'Activity' },
  { id: 'diagnostics', name: 'Diagnostic Services', desc: 'In-house laboratory, digital imaging, ECG, echo, and advanced diagnostics for accurate diagnosis.', icon: 'Microscope' },
  { id: 'wellness', name: 'Wellness Programs', desc: 'Personalized preventive health, nutrition counseling, and lifestyle optimization programs.', icon: 'Leaf' },
  { id: 'preventive', name: 'Preventive Healthcare', desc: 'Comprehensive health screenings and check-ups tailored to your age, gender, and risk profile.', icon: 'ShieldCheck' },
  { id: 'telemedicine', name: 'Telemedicine', desc: 'Secure video consultations with our specialists from the comfort of your home or office.', icon: 'Video' },
  { id: 'pharmacy', name: 'In-Clinic Pharmacy', desc: 'Fully stocked on-site pharmacy for immediate dispensing of prescribed medications.', icon: 'Pill' },
  { id: 'nutrition', name: 'Nutrition & Dietetics', desc: 'Personalized dietary plans from certified dietitians for weight management, disease conditions, and athletic performance.', icon: 'Apple' },
  { id: 'psychology', name: 'Psychological Counseling', desc: 'Compassionate mental health support, stress management, and therapeutic counseling services.', icon: 'Brain' },
  { id: 'vaccination', name: 'Vaccination Clinic', desc: 'Routine, travel, and occupational immunizations following the latest DHA/MOHAP schedules.', icon: 'Syringe' },
  { id: 'homecare', name: 'Home Health Services', desc: 'Selected medical services, nursing care, and follow-up consultations delivered at your home.', icon: 'Home' },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Services & Health Packages | Shelby Medical Pavilion Dubai"
        description="Comprehensive medical services and health check packages at Shelby Medical Pavilion Dubai. Executive, Women's, Men's, and Family health packages."
        path="/services"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">What We Offer</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Our Services & Packages</h1>
          <p className="mt-4 text-lg text-white/80">Comprehensive healthcare services and tailored health screening packages.</p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Services" title="Everything You Need Under One Roof" subtitle="From specialist consultations to diagnostics, wellness, and homecare." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map((s, i) => {
              const Icon = iconMap[s.icon] ?? Stethoscope;
              return (
                <Reveal key={s.id} delay={i * 0.04}>
                  <div className="group flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal transition group-hover:bg-teal group-hover:text-white">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{s.name}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{s.desc}</p>
                    </div>
                    <Button to="/appointments" variant="outline" className="mt-auto text-xs px-4 py-2">Book Now</Button>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* HEALTH PACKAGES */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Health Packages" title="Comprehensive Health Check Packages" subtitle="Invest in your health with our curated screening packages designed for every lifestyle." />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {healthPackages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 0.07}>
                <div className={`relative flex flex-col rounded-2xl bg-white p-8 shadow-card ${pkg.popular ? 'ring-2 ring-teal' : ''}`}>
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-teal px-4 py-1 text-xs font-bold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-navy">{pkg.name}</h3>
                  <p className="mt-2 text-sm text-slate-500">{pkg.description}</p>
                  <div className="my-5 text-3xl font-extrabold text-teal">{pkg.price}</div>
                  <ul className="space-y-2.5">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <Check size={14} className="text-emerald shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                  <Button to="/appointments" variant={pkg.popular ? 'primary' : 'outline'} className="mt-6">
                    Book This Package
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy p-8 text-white text-center">
            <h3 className="text-xl font-bold">Custom Corporate Wellness</h3>
            <p className="mt-2 text-white/70">Looking for tailored health programs for your team? We'll design a package around your workforce's needs.</p>
            <Button to="/contact" variant="primary" className="mt-6 bg-teal">Contact Us for a Quote</Button>
          </div>
        </div>
      </section>
    </>
  );
}
