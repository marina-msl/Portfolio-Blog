'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <>
            <Image
              src="/hero-banner.jpg"
              alt="Hero Banner"
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
            />
            {/* Overlay para melhorar legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 via-gray-900/40 to-transparent" />
          </>
        ) : (
          // Fallback gradient background
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
            {/* Network pattern simulation */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute bottom-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {Array.from({ length: 50 }).map((_, i) => {
                    const x = (i * 30) % 1200
                    const y = 400 + Math.sin(i) * 100
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r="2"
                        fill="url(#networkGradient)"
                      />
                    )
                  })}
                  {Array.from({ length: 30 }).map((_, i) => {
                    const x1 = (i * 40) % 1200
                    const y1 = 400 + Math.sin(i) * 100
                    const x2 = ((i + 1) * 40) % 1200
                    const y2 = 400 + Math.sin(i + 1) * 100
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="url(#networkGradient)"
                        strokeWidth="1"
                        opacity="0.5"
                      />
                    )
                  })}
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen py-20">
          {/* Left side - Main content */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Marina
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Software Engineer specializing in backend development and solving real-world problems
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#blog"
                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Blog
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.a
                href="https://github.com/marina-msl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/marinaleide/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="mailto:marina.msleide@gmail.com"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Quote from banner */}
          <motion.div
            className="text-right space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="text-4xl md:text-5xl font-bold text-white leading-tight">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Long-term thinking,
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="text-primary-400"
              >
                daily execution.
              </motion.div>
            </div>
            <motion.div
              className="text-lg md:text-xl text-gray-300 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Software Engineer | Backend | Java
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

