import { Link } from 'react-router-dom';
import { Plus, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, Ambulance } from 'lucide-react';
import { departments } from '@/data/departments';

export function Footer() {
  return (
    <footer className="bg-navy text-slate-300">
      <div className="container-px grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal">
              <Plus size={22} />
            </span>
            <span className="text-lg font-bold">Shelby Medical Pavilion</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Dubai's premier multi-specialty healthcare center — compassionate care, advanced medicine, exceptional outcomes.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social media" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-teal">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Home', to: '/' },
              { label: 'Doctors', to: '/doctors' },
              { label: 'About Us', to: '/about' },
              { label: 'Appointments', to: '/appointments' },
              { label: 'Health Library', to: '/health-library' },
              { label: 'Patient Resources', to: '/patient-resources' },
            ].map((x) => (
              <li key={x.to}>
                <Link to={x.to} className="transition hover:text-teal">{x.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Departments</h3>
          <ul className="space-y-2 text-sm">
            {departments.slice(0, 6).map((d) => (
              <li key={d.id}>
                <Link to="/departments" className="transition hover:text-teal">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contact & Hours</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-teal" />
              Dubai, United Arab Emirates
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-teal" />
              <a href="tel:+971506982268" className="hover:text-teal">+971 50 698 2268</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-teal" />
              <a href="mailto:shelbydevelopmentsae@gmail.com" className="hover:text-teal break-all">shelbydevelopmentsae@gmail.com</a>
            </li>
            <li className="flex items-start gap-2">
              <Clock size={16} className="mt-0.5 shrink-0 text-teal" />
              Daily: 8:00 AM – 10:00 PM
            </li>
            <li className="flex items-center gap-2 font-semibold text-emerald">
              <Ambulance size={16} /> Emergency: 998
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-6 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Shelby Medical Pavilion. All rights reserved.</p>
          <p className="font-medium text-teal">Designed &amp; Developed by Shelby Developments</p>
        </div>
      </div>
    </footer>
  );
}
