import { useState } from 'react';
import { Search, Clock, Globe, Award } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { doctors } from '@/data/doctors';

const departments = ['All', ...Array.from(new Set(doctors.map((d) => d.department)))];

export default function Doctors() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = doctors.filter((d) => {
    const matchesDept = filter === 'All' || d.department === filter;
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <>
      <Seo
        title="Our Doctors | Shelby Medical Pavilion Dubai"
        description="Meet our team of internationally trained, DHA-licensed specialist doctors across all medical specialties at Shelby Medical Pavilion, Dubai."
        path="/doctors"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Our Specialists</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Meet Our Expert Doctors</h1>
          <p className="mt-4 text-lg text-white/80">Internationally trained, DHA-licensed specialists committed to your wellbeing.</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="sticky top-20 z-30 border-b bg-white/95 py-4 backdrop-blur shadow-sm">
        <div className="container-px flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search by name or specialty…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-teal focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${filter === d ? 'bg-teal text-white' : 'bg-graysoft text-slate-600 hover:bg-teal/10'}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTORS GRID */}
      <section className="section-y">
        <div className="container-px">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-400">No doctors found matching your search.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((doc, i) => (
                <Reveal key={doc.id} delay={i * 0.05}>
                  <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="overflow-hidden">
                      <img src={doc.image} alt={doc.name} className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-bold text-navy">{doc.name}</h3>
                      <p className="text-sm text-teal font-medium">{doc.specialty}</p>
                      <p className="mt-1 text-xs text-slate-400">{doc.department}</p>

                      <div className="mt-3 space-y-1.5 text-xs text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <Award size={13} className="text-teal shrink-0" />
                          {doc.experience} years experience
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock size={13} className="text-teal shrink-0" />
                          {doc.consultationHours}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe size={13} className="text-teal shrink-0" />
                          {doc.languages.join(', ')}
                        </div>
                      </div>

                      <p className="mt-3 text-xs text-slate-500 line-clamp-3">{doc.bio}</p>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {doc.qualifications.slice(0, 2).map((q) => (
                          <span key={q} className="rounded-full bg-teal/10 px-2 py-0.5 text-xs text-teal">{q}</span>
                        ))}
                      </div>

                      <Button to="/appointments" variant="primary" className="mt-4 w-full text-xs">Book Appointment</Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graysoft py-16">
        <div className="container-px text-center">
          <h2 className="text-2xl font-bold text-navy">Not sure which specialist to see?</h2>
          <p className="mt-2 text-slate-500">Contact us and our team will guide you to the right doctor.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary">Contact Us</Button>
            <Button href="tel:+971506982268" variant="outline">Call Now</Button>
          </div>
        </div>
      </section>
    </>
  );
}
