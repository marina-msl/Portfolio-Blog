'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTitle() {
  const pathname = usePathname()

  useEffect(() => {
    // Se estiver na página do blog, não fazer nada (já tem metadata)
    if (pathname?.startsWith('/blog')) {
      return
    }

    const updateTitle = () => {
      const sections = [
        { id: 'home', title: 'Home | Marina' },
        { id: 'about', title: 'About | Marina' },
        { id: 'blog', title: 'Blog | Marina' },
      ]

      const current = sections.find((section) => {
        const element = document.getElementById(section.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })

      if (current) {
        document.title = current.title
      } else {
        document.title = 'Home | Marina'
      }
    }

    // Atualizar imediatamente
    updateTitle()

    // Atualizar no scroll
    window.addEventListener('scroll', updateTitle)
    
    return () => {
      window.removeEventListener('scroll', updateTitle)
    }
  }, [pathname])

  return null
}

