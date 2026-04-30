import Link from 'next/link';

export default async function SuccessPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      textAlign: 'center',
      padding: '2rem',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '3rem',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        width: '100%'
      }}>
        <div style={{
          fontSize: '4rem',
          marginBottom: '1rem'
        }}>
          ✅
        </div>
        <h1 style={{ 
          fontSize: '2rem', 
          color: '#2d3436',
          marginBottom: '1rem'
        }}>
          {lang === 'es' ? '¡Gracias por tu compra!' : 
           lang === 'de' ? 'Vielen Dank für Ihren Einkauf!' :
           lang === 'fr' ? 'Merci pour votre achat !' :
           'Thank you for your purchase!'}
        </h1>
        <p style={{ 
          color: '#636e72',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          {lang === 'es' ? 'Hemos recibido tu pedido correctamente. Recibirás un correo electrónico de confirmación en unos minutos.' : 
           lang === 'de' ? 'Wir haben Ihre Bestellung erfolgreich erhalten. Sie erhalten in Kürze eine Bestätigungs-E-Mail.' :
           lang === 'fr' ? 'Nous avons bien reçu votre commande. Vous recevrez un e-mail de confirmation dans quelques minutes.' :
           'We have successfully received your order. You will receive a confirmation email shortly.'}
        </p>
        <Link href={`/${lang}`} style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          background: '#0984e3',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '12px',
          fontWeight: 'bold',
          transition: 'transform 0.2s',
        }}>
          {lang === 'es' ? 'Volver a la tienda' : 
           lang === 'de' ? 'Zurück zum Shop' :
           lang === 'fr' ? 'Retour à la boutique' :
           'Back to Store'}
        </Link>
      </div>
    </main>
  );
}
