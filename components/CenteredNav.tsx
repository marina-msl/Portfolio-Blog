'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CenteredNav() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('')
  const [isScrolled, setIsScrolled] = useState(false)
  const isBlogPage = pathname?.startsWith('/blog')

  useEffect(() => {
    const handleHashChange = () => {
      setActiveSection(window.location.hash)
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'projects', 'blog', 'contact']
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(`#${current}`)
      }
    }

    handleHashChange()
    handleScroll() // Check initial scroll position
    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '/', section: '#home' },
    { name: 'About', href: '/', section: '#about' },
    { name: 'Projects', href: '/', section: '#projects' },
    { name: 'Blog', href: '/blog' },
  ]

  const isActive = (item: typeof navItems[0]) => {
    if (item.href === '/blog') {
      return pathname?.startsWith('/blog')
    }
    if (item.section) {
      return pathname === '/' && (activeSection === item.section || (item.section === '#home' && !activeSection))
    }
    return pathname === item.href
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.section && pathname === '/') {
      e.preventDefault()
      const element = document.querySelector(item.section)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        setActiveSection(item.section)
      }
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 md:top-8 left-0 right-0 z-50 flex justify-center"
    >
      <div className={`${isBlogPage ? 'bg-gray-900' : isScrolled ? 'bg-gray-900/95' : 'bg-gray-900/80'} ${isBlogPage ? '' : 'backdrop-blur-md'} border border-gray-700/50 rounded-full px-3 md:px-6 py-2 md:py-3 shadow-lg transition-all duration-300`}>
        <div className="flex items-center gap-1 md:gap-4">
          {navItems.map((item, index) => {
            const active = isActive(item)
            return (
              <Link
                key={item.name}
                href={item.href + (item.section || '')}
                onClick={(e) => handleClick(e, item)}
                className="relative"
              >
                <motion.span
                  className={`px-2 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-base font-medium transition-colors ${
                    active
                      ? 'text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-primary-500/20 border border-primary-500/30 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                </motion.span>
              </Link>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}

