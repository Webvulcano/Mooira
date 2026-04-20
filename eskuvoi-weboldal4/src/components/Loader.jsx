import { useState, useEffect } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [removed, setRemoved] = useState(false)

  useEffect(() => {
    const start = performance.now()
    document.body.style.overflow = 'hidden'

    const onLoad = () => {
      const elapsed = performance.now() - start
      setTimeout(() => {
        setHidden(true)
        document.body.style.overflow = ''
        setTimeout(() => setRemoved(true), 700)
      }, Math.max(0, 1800 - elapsed))
    }

    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  if (removed) return null

  return (
    <div className={`page-loader${hidden ? ' hidden' : ''}`}>
      <span className="loader-brand">mooira</span>
    </div>
  )
}
