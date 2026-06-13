import { Shield, Award, Heart, Cpu, Users, Globe, Check } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Stat } from '@/components/ui/Stat';
import { Button } from '@/components/ui/Button';

const values = [
  { icon: Heart, title: 'Patient-First', desc: 'Every decision is made with the patient\'s wellbeing as the highest priority.' },
  { icon: Award, title: 'Clinical Excellence', desc: 'We uphold the highest standards of medical practice and continuous education.' },
  { icon: Shield, title: 'Trust & Integrity', desc: 'Transparent communication, ethical care, and honest relationships with patients.' },
  { icon: Cpu, title: 'Innovation', desc: 'Advanced technology and evidence-based medicine guide every treatment plan.' },
  { icon: Users, title: 'Teamwork', desc: 'Collaborative multi-disciplinary teams for comprehensive, coordinated care.' },
  { icon: Globe, title: 'Inclusivity', desc: 'Welcoming patients of all backgrounds with multilingual, culturally sensitive care.' },
];

const timeline = [
  { year: '2009', event: 'Shelby Medical Pavilion founded in Dubai with a vision for patient-first healthcare.' },
  { year: '2012', event: 'Expanded to 6 specialty departments; received DHA accreditation.' },
  { year: '2015', event: 'Launched state-of-the-art diagnostic imaging and laboratory services.' },
  { year: '2018', event: 'Opened dedicated Women\'s Health and Pediatrics wings.' },
  { year: '2021', event: 'Introduced telemedicine and digital appointment booking platform.' },
  { year: '2024', event: 'Serving 50,000+ patients annually across 11 specialties.' },
];

const leadership = [
  { name: 'Dr. Mahmoud Al-Rashid', role: 'Medical Director', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80' },
  { name: 'Ms. Sarah Mitchell', role: 'CEO & Operations Director', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Dr. Nadia Hassan', role: 'Head of Clinical Quality', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Us | Shelby Medical Pavilion Dubai"
        description="Learn about Shelby Medical Pavilion — Dubai's premier multi-specialty healthcare center. Our story, mission, values, and leadership team."
        path="/about"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">About Us</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Dubai's Premier Healthcare Center</h1>
          <p className="mt-4 text-lg text-white/80">15+ years of clinical excellence, compassion, and innovation.</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section-y">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
              alt="Shelby Medical Pavilion team"
              className="rounded-3xl shadow-soft"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <span className="mb-3 inline-block rounded-full bg-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal">Our Mission</span>
            <h2 className="text-3xl font-bold md:text-4xl">Transforming Healthcare, One Patient at a Time</h2>
            <p className="mt-4 leading-relaxed text-slate-500">
              At Shelby Medical Pavilion, our mission is to provide world-class, patient-centered healthcare that combines cutting-edge medical technology with genuine human compassion. We believe every patient deserves exceptional care delivered with dignity and respect.
            </p>
            <p className="mt-4 leading-relaxed text-slate-500">
              Founded in 2009, we have grown to become one of Dubai's most trusted multi-specialty medical centers, serving over 50,000 patients annually across 11 departments with a team of more than 50 internationally trained specialists.
            </p>
            <ul className="mt-6 space-y-3">
              {['DHA Licensed & internationally accredited', 'Over 50 specialists across 11 departments', '15+ years of clinical excellence in Dubai', 'Direct insurance billing with 12+ providers', 'Multilingual team — 15+ languages spoken'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal"><Check size={14} /></span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-navy to-teal py-16 text-white">
        <div className="container-px grid grid-cols-2 gap-8 md:grid-cols-4">
          <Stat value={50000} suffix="+" label="Patients Treated" />
          <Stat value={50} suffix="+" label="Specialist Doctors" />
          <Stat value={11} label="Departments" />
          <Stat value={15} suffix="+" label="Years of Excellence" />
        </div>
      </section>

      {/* VALUES */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Our Values" title="What We Stand For" subtitle="Six core values that guide everything we do at Shelby Medical Pavilion." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="flex gap-4 rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <v.icon size={24} />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{v.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{v.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Our Journey" title="15 Years of Growth" subtitle="From a single clinic to Dubai's premier multi-specialty center." />
          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-teal/20 md:left-1/2" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className={`flex gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`hidden md:flex flex-1 ${i % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                      <div className="rounded-2xl bg-white p-5 shadow-card max-w-sm">
                        <p className="text-sm text-slate-500">{item.event}</p>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-white font-bold text-xs z-10">
                      {item.year}
                    </div>
                    <div className="flex flex-1 items-center md:hidden">
                      <p className="text-sm text-slate-500">{item.event}</p>
                    </div>
                    <div className="hidden md:flex flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Leadership" title="Our Leadership Team" subtitle="Experienced healthcare leaders driving our mission forward." />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {leadership.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-card">
                  <div className="overflow-hidden">
                    <img src={person.img} alt={person.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5 text-center">
                    <h3 className="font-bold text-navy">{person.name}</h3>
                    <p className="text-sm text-teal">{person.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white">
        <div className="container-px text-center">
          <h2 className="text-3xl font-extrabold">Experience the Shelby Difference</h2>
          <p className="mt-4 text-white/70">Book an appointment and discover why thousands of patients trust us with their health.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/appointments" variant="primary">Book Appointment</Button>
            <Button to="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">Get in Touch</Button>
          </div>
        </div>
      </section>
    </>
  );
}
