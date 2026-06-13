import { useState } from 'react';
import { Search, Clock, Calendar } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { articles } from '@/data/articles';

const categories = ['All', ...Array.from(new Set(articles.map((a) => a.category)))];

export default function HealthLibrary() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const filtered = articles.filter((a) => {
    const matchesCat = category === 'All' || a.category === category;
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase()) || a.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      <Seo
        title="Health Library | Shelby Medical Pavilion Dubai"
        description="Expert health articles, wellness guides, and medical advice from the specialists at Shelby Medical Pavilion, Dubai."
        path="/health-library"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Health Library</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Expert Health Articles</h1>
          <p className="mt-4 text-lg text-white/80">Evidence-based guides written by our specialists to help you live healthier.</p>
        </div>
      </section>

      {/* SEARCH & FILTER */}
      <section className="sticky top-20 z-30 border-b bg-white/95 py-4 backdrop-blur shadow-sm">
        <div className="container-px flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-slate-200 py-2.5 pl-10 pr-4 text-sm focus:border-teal focus:outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${category === c ? 'bg-teal text-white' : 'bg-graysoft text-slate-600 hover:bg-teal/10'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section-y">
        <div className="container-px">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-slate-400">No articles found. Try a different search.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, i) => (
                <Reveal key={article.id} delay={i * 0.06}>
                  <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                    <div className="overflow-hidden">
                      <img src={article.image} alt={article.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold text-teal w-fit">{article.category}</span>
                      <h3 className="mt-3 text-lg font-bold text-navy leading-snug">{article.title}</h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed flex-1">{article.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-400 border-t pt-4">
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</span>
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {article.readTime} read</span>
                      </div>
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
          <SectionHeading title="Have a Health Question?" subtitle="Our doctors are here to help. Book a consultation for personalized medical advice." eyebrow="Ask Our Experts" />
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/appointments" variant="primary">Book a Consultation</Button>
            <Button to="/doctors" variant="outline">Find a Specialist</Button>
          </div>
        </div>
      </section>
    </>
  );
}
