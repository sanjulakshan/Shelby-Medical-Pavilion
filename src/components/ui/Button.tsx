import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { clsx } from '@/lib/clsx';

interface Props {
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'emergency';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  ariaLabel?: string;
}

const variants = {
  primary: 'bg-teal text-white hover:bg-teal-light shadow-soft',
  secondary: 'bg-navy text-white hover:bg-navy-600',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  emergency: 'bg-emerald text-white hover:opacity-90',
};

export function Button({ to, href, variant = 'primary', children, className, onClick, type = 'button', ariaLabel }: Props) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-teal';
  const cls = clsx(base, variants[variant], className);
  if (to) return <Link to={to} className={cls} aria-label={ariaLabel}>{children}</Link>;
  if (href) return <a href={href} className={cls} aria-label={ariaLabel}>{children}</a>;
  return <button type={type} onClick={onClick} className={cls} aria-label={ariaLabel}>{children}</button>;
}
