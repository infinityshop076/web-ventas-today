import Image from 'next/image';
import { headers } from 'next/headers';
import styles from './page.module.css';

export default async function ProductLanding() {
  const headerList = await headers();
  const acceptLanguage = headerList.get('accept-language') || 'en';
  
  // Simple language detection for the button
  let buttonText = 'COMPRAR AHORA'; // Default Spanish
  if (acceptLanguage.toLowerCase().includes('de')) {
    buttonText = 'Jetzt Kaufen';
  } else if (acceptLanguage.toLowerCase().includes('fr')) {
    buttonText = 'Acheter Maintenant';
  } else if (acceptLanguage.toLowerCase().includes('en')) {
    buttonText = 'BUY NOW';
  }

  return (
    <div className={styles.productContainer}>
      {/* TRUST BANNER */}
      <div className={styles.topBanner}>
        🇨🇭 ENVÍO GRATUITO A SUIZA Y EUROPA | ENTREGA GARANTIZADA EN 8 DÍAS HÁBILES
      </div>

      <nav className={styles.minimalNav}>
        <div className={styles.logo}>Infinity Shop</div>
      </nav>

      <main className={styles.heroSection}>
        <div className={styles.heroGrid}>
          {/* LEFT: Product Image */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src="/gyro_main.png" 
                alt="Gyro Bowl Product" 
                width={800} 
                height={800} 
                className={styles.productImg}
                priority
              />
            </div>
          </div>

          {/* RIGHT: Venta Section */}
          <div className={styles.contentCol}>
            <h1 className={styles.productTitle}>
              Original 360° Gyro Bowl <br/>
              <span className={styles.subtitle}>Tecnología Antiderrames para Bebés</span>
            </h1>
            
            <div className={styles.priceContainer}>
              <div className={styles.priceItem}>
                <span className={styles.currency}>CHF</span>
                <span className={styles.amount}>24.90</span>
              </div>
              <div className={styles.priceItem}>
                <span className={styles.currency}>EUR</span>
                <span className={styles.amount}>22.90</span>
              </div>
            </div>

            <button className={styles.buyButton}>
              {buttonText}
            </button>

            {/* PAYMENT FLOW */}
            <div className={styles.paymentIcons}>
              <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" width={40} height={25} />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg" alt="Google Pay" width={40} height={25} />
              <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={40} height={25} />
            </div>

            <div className={styles.trustFooter}>
              ✓ Certificado Libre de BPA <br/>
              ✓ Apto para Lavavajillas <br/>
              ✓ Garantía de Satisfacción 30 días
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.simpleFooter}>
        © 2026 Infinity Shop • Basado en Suiza • Soporte: contact@infinityshop.ch
      </footer>
    </div>
  );
}
