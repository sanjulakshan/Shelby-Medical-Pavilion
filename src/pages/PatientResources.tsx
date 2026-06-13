import { FileText, Download, Info, ClipboardList, ShieldCheck, Phone, AlertCircle } from 'lucide-react';
import { Seo } from '@/lib/seo';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';

const resources = [
  { icon: FileText, title: 'New Patient Registration Form', desc: 'Complete your registration before your first visit to save time at reception.', action: 'Download PDF' },
  { icon: ClipboardList, title: 'Medical History Form', desc: 'Help us understand your health background to provide the best possible care.', action: 'Download PDF' },
  { icon: FileText, title: 'Insurance Authorization Form', desc: 'Required for direct billing — submit alongside your insurance card.', action: 'Download PDF' },
  { icon: ShieldCheck, title: 'Consent Form', desc: 'Standard informed consent for consultations and procedures.', action: 'Download PDF' },
  { icon: Download, title: 'Patient Rights & Responsibilities', desc: 'Understand your rights as a patient and our commitment to your care.', action: 'Download PDF' },
  { icon: FileText, title: 'Medical Records Request', desc: 'Request copies of your medical records, test results, or referral letters.', action: 'Download PDF' },
];

const tips = [
  { title: 'What to Bring', items: ['Emirates ID or Passport', 'Insurance card (if applicable)', 'List of current medications', 'Previous medical records or test results', 'Referral letter (if required by insurer)'] },
  { title: 'Preparing for Your Visit', items: ['Arrive 10 minutes early for paperwork', 'Fasting may be required for blood tests — confirm when booking', 'Wear comfortable, accessible clothing', 'Note your symptoms and any questions in advance', 'Bring a trusted person if needed for support'] },
  { title: 'After Your Visit', items: ['Follow the prescribed treatment plan', 'Take medications as directed', 'Book follow-up appointments promptly', 'Contact us if symptoms worsen', 'Rate your experience to help us improve'] },
];

const emergencyInfo = [
  { condition: 'Chest pain or heart attack symptoms', action: 'Call 998 immediately' },
  { condition: 'Severe breathing difficulty', action: 'Call 998 immediately' },
  { condition: 'Stroke symptoms (face drooping, arm weakness, speech difficulty)', action: 'Call 998 immediately' },
  { condition: 'High fever with stiff neck', action: 'Visit nearest emergency room' },
  { condition: 'Severe allergic reaction', action: 'Call 998 immediately' },
  { condition: 'Medication query or non-urgent concern', action: 'Call our clinic: +971 50 698 2268' },
];

export default function PatientResources() {
  return (
    <>
      <Seo
        title="Patient Resources | Shelby Medical Pavilion Dubai"
        description="Download patient forms, find preparation tips, emergency contacts, and everything you need for your visit to Shelby Medical Pavilion, Dubai."
        path="/patient-resources"
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-teal/80 py-16 text-white">
        <div className="container-px text-center">
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold">Patient Resources</span>
          <h1 className="mt-4 text-4xl font-extrabold md:text-5xl">Everything You Need</h1>
          <p className="mt-4 text-lg text-white/80">Forms, guides, and information to make your visit as smooth as possible.</p>
        </div>
      </section>

      {/* FORMS */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Forms & Documents" title="Patient Forms & Downloads" subtitle="Download and complete these forms before your visit to save time." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}>
                <div className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal">
                    <r.icon size={24} />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy">{r.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{r.desc}</p>
                  </div>
                  <button className="flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
                    <Download size={14} /> {r.action}
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT TIPS */}
      <section className="section-y bg-graysoft">
        <div className="container-px">
          <SectionHeading eyebrow="Prepare" title="Preparing for Your Visit" subtitle="Everything you need to know before, during, and after your appointment." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tips.map((tip, i) => (
              <Reveal key={tip.title} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Info size={18} className="text-teal" />
                    <h3 className="font-bold text-navy">{tip.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {tip.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EMERGENCY INFO */}
      <section className="section-y">
        <div className="container-px">
          <SectionHeading eyebrow="Emergency" title="Emergency Information" subtitle="Know when and how to seek emergency care." />
          <div className="mt-10 rounded-2xl bg-red-50 border border-red-100 p-6">
            <div className="flex items-start gap-3 mb-6">
              <AlertCircle size={24} className="text-red-500 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-700">If you have a life-threatening emergency, call 998 immediately.</h3>
                <p className="text-sm text-red-600 mt-1">Do not drive yourself to the hospital if you suspect a heart attack, stroke, or severe injury.</p>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {emergencyInfo.map((e, i) => (
                <Reveal key={i} delay={i * 0.04}>
                  <div className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-navy">{e.condition}</p>
                      <p className="text-xs text-slate-500 mt-1">{e.action}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-navy p-8 text-white text-center">
            <h3 className="text-xl font-bold">Need to Reach Us?</h3>
            <p className="mt-2 text-white/70">Our clinic team is available daily from 8 AM to 10 PM.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button href="tel:+971506982268" variant="primary"><Phone size={16} /> +971 50 698 2268</Button>
              <Button to="/appointments" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">Book Appointment</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
