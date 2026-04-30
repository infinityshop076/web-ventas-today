export default async function AdminPage() {
  return (
    <div className="admin-container" style={{ padding: '2rem', fontFamily: 'var(--font-main)' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>Admin Dashboard</h1>
        <div style={{ background: '#eee', padding: '0.5rem 1rem', borderRadius: '8px' }}>
          Internal Use Only
        </div>
      </header>

      <div className="stats-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1.5rem',
        marginBottom: '3rem'
      }}>
        {[
          { label: 'Total Sales', value: 'CHF 12,450', color: '#4facfe' },
          { label: 'Conversion Rate', value: '4.8%', color: '#00f2fe' },
          { label: 'Active Sessions', value: '142', color: '#f093fb' },
          { label: 'Units Sold', value: '524', color: '#f5576c' }
        ].map((stat, i) => (
          <div key={i} style={{ 
            padding: '1.5rem', 
            borderRadius: '16px', 
            background: 'white', 
            boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
            borderLeft: `5px solid ${stat.color}`
          }}>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.label}</p>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800' }}>{stat.value}</h2>
          </div>
        ))}
      </div>

      <div className="charts-placeholder" style={{ 
        background: 'white', 
        padding: '2rem', 
        borderRadius: '24px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
        minHeight: '300px'
      }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Sales Velocity (Last 7 Days)</h3>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '10px', height: '200px', paddingBottom: '20px', borderBottom: '1px solid #eee' }}>
          {[60, 40, 80, 50, 90, 70, 100].map((h, i) => (
            <div key={i} style={{ 
              flex: 1, 
              height: `${h}%`, 
              background: 'linear-gradient(to top, #4facfe 0%, #00f2fe 100%)',
              borderRadius: '8px 8px 0 0',
              transition: 'height 1s ease'
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}
