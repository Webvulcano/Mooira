import { useParams, Link } from 'react-router-dom'

export default function CollectionItemPage() {
  const { slug } = useParams()
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: '24px', textAlign: 'center' }}>
      <div>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontWeight: 300, marginBottom: '16px' }}>
          {slug}
        </p>
        <p style={{ marginBottom: '24px' }}>Az oldal hamarosan elérhető.</p>
        <Link to="/" style={{ borderBottom: '1px solid currentColor' }}>← Vissza</Link>
      </div>
    </div>
  )
}
