import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { clsx } from '@/lib/clsx';

const links = [
  { to: '/', label: 'Home' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/departments', label: 'Departments' },
  { to: '/services', label: 'Services' },
  { to: '/health-library', label: 'Health Library' },
  { to: '/insurance', label: 'Insurance' },
  { to: '/about', label: 'About' },
  { to: '/patient-resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={clsx('fixed inset-x-0 top-0 z-50 transition-all', scrolled ? 'bg-white/95 shadow-soft backdrop-blur' : 'bg-white/80 backdrop-blur')}>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:rounded focus:bg-navy focus:px-3 focus:py-1 focus:text-white">
        Skip to content
      </a>
      <nav className="container-px flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2" aria-label="Shelby Medical Pavilion home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy to-teal text-white">
            <Plus size={22} />
          </span>
          <span className="text-lg font-bold leading-tight text-navy">
            Shelby
            <span className="block text-xs font-medium text-teal">Medical Pavilion</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 xl:flex">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  clsx('rounded-full px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap', isActive ? 'text-teal' : 'text-ink hover:text-teal')
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+971506982268" className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone size={16} /> +971 50 698 2268
          </a>
          <Button to="/appointments" variant="primary">Book Appointment</Button>
        </div>

        <button
          className="xl:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-white xl:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-4">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      clsx('block rounded-lg px-3 py-2 font-medium', isActive ? 'bg-teal/10 text-teal' : 'text-ink')
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2">
                <Button to="/appointments" className="w-full">Book Appointment</Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
