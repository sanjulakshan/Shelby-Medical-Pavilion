import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, type ReactNode } from 'react';
import { Layout } from './components/layout/Layout';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Departments from './pages/Departments';
import Services from './pages/Services';
import Appointments from './pages/Appointments';
import HealthLibrary from './pages/HealthLibrary';
import Insurance from './pages/Insurance';
import About from './pages/About';
import PatientResources from './pages/PatientResources';
import Contact from './pages/Contact';

function Page({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/doctors" element={<Page><Doctors /></Page>} />
          <Route path="/departments" element={<Page><Departments /></Page>} />
          <Route path="/services" element={<Page><Services /></Page>} />
          <Route path="/appointments" element={<Page><Appointments /></Page>} />
          <Route path="/health-library" element={<Page><HealthLibrary /></Page>} />
          <Route path="/insurance" element={<Page><Insurance /></Page>} />
          <Route path="/about" element={<Page><About /></Page>} />
          <Route path="/patient-resources" element={<Page><PatientResources /></Page>} />
          <Route path="/contact" element={<Page><Contact /></Page>} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}
