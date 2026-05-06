import { useState } from 'react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Summer Day Camps', href: '/programs/summer-day-camps' },
  { label: 'SPLASH Camps', href: '/programs/splash' },
  { label: 'Enrichment', href: '/programs/enrichment' },
  { label: 'REACH Climbing', href: '/programs/reach' },
  { label: 'SPARK Writing', href: '/programs/spark' },
  { label: 'Meet Our Staff', href: '/staff' },
  { label: 'Parent Info', href: '/parents' },
  { label: "We're Hiring!", href: '/hiring' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${open ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-forest-dark shadow-xl z-50 border-t border-forest-light/30">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-white hover:bg-forest-light/20 border-b border-forest-light/20 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="p-4">
            <a
              href="https://wildchildcamp.funjoin.app"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-sunset hover:bg-sunset-dark text-white font-bold py-3 px-6 rounded-full transition-colors"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
