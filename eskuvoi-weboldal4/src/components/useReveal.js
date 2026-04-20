import { useEffect } from 'react'

let observer = null

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
  }
  return observer
}

export function useReveal(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    const items = el.querySelectorAll('.reveal')
    items.forEach(item => obs.observe(item))
    return () => items.forEach(item => obs.unobserve(item))
  }, [ref])
}
