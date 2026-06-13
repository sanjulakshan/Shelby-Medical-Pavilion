import { ShieldCheck, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { insurancePartners } from '@/data/insurance';

const faqs = [
  { q: 'Do you offer direct billing?', a: 'Yes, we offer direct billing with most major insurance providers. You only need to present your insurance card at reception.' },
  { q: 'What if my insurance is not listed?', a: 'Please contact us before your visit and we will verify your coverage. We also accept self-pay patients with competitive rates.' },
  { q: 'How do I check my coverage?', a: 'Call your insurance provider\'s member services number or contact our billing team who will help you understand your benefits.' },
  { q: 'Are referrals required?', a: 'Most of our services do not require a referral, but some insurance plans may require one for specialist visits. Check with your insurer.' },
  { q: 'Do you accept international insurance?', a: 'Yes, we accept many international plans including Bupa Global, Cigna, Allianz Care, and Aetna International.' },
  { q: 'What documents do I need?', a: 'Bring your insurance card, Emirates ID (for UAE residents), and any referral letters if required by your plan.' },
];

export default function Insurance() {
  return (
    <>
      <Seo
        title="Insurance & Billing | Shelby Medical Pavilion Dubai"
        description="Shelby Medical Pavilion accepts 12+ major insurance providers with direct billing. Check accepted insurances and learn how to use your coverage."
        path="/insurance"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Insurance</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Insurance & Direct Billing</h1>
          <p className="mt-4 text-lg text-white/80">We work with 12+ leading insurers — seamless direct billing, no hidden costs.</p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="How It Works" title="Simple, Hassle-Free Billing" subtitle="Our team handles your insurance paperwork so you can focus on your health." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { step: '01', title: 'Present Your Card', desc: 'Show your insurance card at reception when you arrive. Our team will verify your coverage instantly.' },
              { step: '02', title: 'Receive Your Care', desc: 'See your specialist and receive treatment. No upfront payment required for covered services.' },
              { step: '03', title: 'We Handle the Rest', desc: 'We submit the claim directly to your insurer. You only pay any applicable co-pay or deductible.' },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-8 shadow-card">
                  <div className="text-5xl font-extrabold text-teal/20">{item.step}</div>
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Accepted Insurance" title="Our Insurance Partners" subtitle="Direct billing available with all major UAE and international health insurers." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {insurancePartners.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.04}>
                <div className="flex flex-col gap-2 rounded-2xl bg-white p-5 shadow-card">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald shrink-0" />
                    <span className="font-bold text-navy">{p.name}</span>
                  </div>
                  <span className="text-xs text-slate-500">{p.coverage}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">Don't see your insurer? <a href="tel:+971506982268" className="text-teal font-semibold hover:underline">Call us</a> — we likely accept it.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-y">
        <div className="container-px grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="FAQ" title="Insurance Questions Answered" center={false} />
            <div className="mt-8 space-y-4">
              {faqs.map((faq, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="rounded-2xl bg-white p-6 shadow-card">
                    <div className="flex items-start gap-3">
                      <ShieldCheck size={18} className="mt-0.5 text-teal shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy">{faq.q}</h4>
                        <p className="mt-2 text-sm text-slate-500">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-navy p-8 text-white sticky top-24">
              <h3 className="text-xl font-bold">Insurance Enquiry</h3>
              <p className="mt-2 text-white/70">Not sure if your plan is accepted? Our billing team is happy to help.</p>
              <div className="mt-6 space-y-4">
                <a href="tel:+971506982268" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20">
                  <Phone size={20} className="text-teal" />
                  <div>
                    <div className="text-xs text-white/60">Call us</div>
                    <div className="font-semibold">+971 50 698 2268</div>
                  </div>
                </a>
                <a href="mailto:shelbydevelopmentsae@gmail.com" className="flex items-center gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20">
                  <Mail size={20} className="text-teal" />
                  <div>
                    <div className="text-xs text-white/60">Email us</div>
                    <div className="font-semibold text-sm break-all">shelbydevelopmentsae@gmail.com</div>
                  </div>
                </a>
              </div>
              <Button to="/appointments" variant="primary" className="mt-6 w-full">Book an Appointment</Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
