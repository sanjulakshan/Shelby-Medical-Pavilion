import { MessageCircle, Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/971506982268"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-white shadow-soft transition hover:scale-110"
      >
        <MessageCircle />
      </a>
      <a
        href="tel:+971506982268"
        aria-label="Call us"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-teal text-white shadow-soft transition hover:scale-110"
      >
        <Phone />
      </a>
    </div>
  );
}
