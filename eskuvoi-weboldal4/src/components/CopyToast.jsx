import { useState, useEffect, useRef } from 'react'

export default function CopyToast() {
  const [show, setShow] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('[data-copy-email]')
      if (!link) return
      e.preventDefault()
      const email = link.dataset.copyEmail
      navigator.clipboard.writeText(email).then(() => {
        setShow(true)
        clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => setShow(false), 2500)
      })
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <div className={`copy-toast${show ? ' show' : ''}`}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Kimásolva: info@mooira.hu
    </div>
  )
}
