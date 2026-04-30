import Image from 'next/image';
import { getDictionary } from '@/lib/get-dictionary';
import type { Metadata } from 'next';
import { headers } from 'next/headers';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: `GyroBowl - ${dict.hero_title_highlight}`,
    description: dict.hero_subtitle,
    viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const headerList = await headers();
  const country = headerList.get('x-vercel-ip-country') || 'CH';
  
  const isSwitzerland = country === 'CH';
  const currency = isSwitzerland ? 'CHF' : 'EUR';
  const price = isSwitzerland ? '24.90' : '22.90';
  const symbol = isSwitzerland ? 'CHF' : '€';

  return (
    <main className="single-product-store">
      {/* Shipping Offer Banner */}
      <div className="top-banner">
        {dict.top_banner}
      </div>

      {/* Minimalist Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <span className="logo-text">GyroBowl</span>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-image-container">
          <Image 
            src="/gyro_main.png" 
            alt={dict.product_alt} 
            width={600} 
            height={600} 
            className="hero-image"
            priority
          />
        </div>

        <div className="hero-text-container">
          <span className="discount-badge">{dict.hero_discount}</span>
          <h1 className="hero-title">
            {dict.hero_title_1} <br/>
            {dict.hero_title_highlight} <br/>
            {dict.hero_title_2}
          </h1>
          <p className="hero-subtitle">{dict.hero_subtitle}</p>
          
          <div className="price-display">
             <span className="old-price">{isSwitzerland ? '34.90' : '32.90'} {symbol}</span>
             <span className="current-price">{price} {symbol}</span>
          </div>

          <button className="btn-buy-now standout">
            {dict.hero_btn}
          </button>

          {/* Trust Section */}
          <div className="trust-badges-hero">
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              <span>{dict.badge_shipping}</span>
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>{dict.badge_payment}</span>
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>{dict.badge_warranty}</span>
            </div>
          </div>
          
          <p style={{ marginTop: '2rem', fontSize: '12px', color: '#888', fontStyle: 'italic' }}>
            {dict.hero_scarcity}
          </p>
        </div>
      </header>

      <section className="why-choose-us">
        <div className="container">
          <h2 className="section-title">{dict.why_choose_us}</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              </div>
              <h3>{dict.why_1_title}</h3>
              <p>{dict.why_1_desc}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
              </div>
              <h3>{dict.why_2_title}</h3>
              <p>{dict.why_2_desc}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <h3>{dict.why_3_title}</h3>
              <p>{dict.why_3_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{dict.feature_title}</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>{dict.feature_1}</h3>
              <p>{dict.feature_desc}</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛡️</span>
              <h3>{dict.feature_2}</h3>
              <p>{dict.feature_2_desc}</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🧼</span>
              <h3>{dict.feature_3}</h3>
              <p>{dict.feature_3_desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="footer">
        <div className="footer-logo">GyroBowl Shop</div>
        <div className="footer-links">
           <a href="#">{dict.footer_shipping}</a>
           <a href="#">{dict.footer_terms}</a>
           <a href="#">{dict.footer_contact}</a>
        </div>
        <p className="copyright">{dict.footer_copy}</p>
        <p style={{ fontSize: '10px', marginTop: '20px', opacity: 0.5 }}>
          Admin: <a href="/admin" style={{ color: 'inherit' }}>Dashboard Access</a>
        </p>
      </footer>
    </main>
  );
}
