'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const locales = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
];

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  const activeLocale = locales.find(l => l.code === currentLang) || locales[0];

  return (
    <div className="language-selector">
      <button 
        className="lang-trigger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
      >
        <span className="lang-flag">{activeLocale.flag}</span>
        <span className="lang-code">{activeLocale.code.toUpperCase()}</span>
        <svg className={`chevron ${isOpen ? 'open' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div className="lang-overlay" onClick={() => setIsOpen(false)} />
          <ul className="lang-dropdown">
            {locales.map((loc) => (
              <li key={loc.code}>
                <button 
                  onClick={() => handleLanguageChange(loc.code)}
                  className={currentLang === loc.code ? 'active' : ''}
                >
                  <span className="loc-flag">{loc.flag}</span>
                  <span className="loc-label">{loc.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
