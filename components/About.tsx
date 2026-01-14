'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function About() {
  const [imageError, setImageError] = useState(false)
  const skills = [
    'Java',
    'Spring Boot',
    'PostgreSQL',
    'Docker',
    'GCP',
    'Linux',
    'Git',
    'SOLID',
    'Clean Code',
    'Design Patterns',
  ]

  return (
    <section
      id="about"
      className="py-12 bg-gray-800"
    >
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-8 md:mb-10 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-primary-400">Me</span>
        </motion.h2>

        <div className="max-w-7xl mx-auto">
          <motion.div
            className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-8 items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Photo Section */}
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 h-96 md:w-80 md:h-[28rem] rounded-2xl overflow-hidden border-4 border-primary-500/30 shadow-2xl bg-gray-700 px-5 pt-5 pb-20 md:px-7 md:pt-7 md:pb-24">
                {!imageError ? (
                  <Image
                    src="/profile-photo.jpg"
                    alt="Marina - Profile Photo"
                    fill
                    className="object-cover rounded-xl"
                    style={{ objectPosition: 'center top' }}
                    priority
                    onError={() => setImageError(true)}
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex flex-col items-center justify-center">
                    <span className="text-6xl mb-2">👤</span>
                    <p className="text-xs text-gray-400 text-center px-4">
                      Photo not found<br />
                      Add: profile-photo.jpg<br />
                      in: public/ folder
                    </p>
                  </div>
                )}
              </div>
              
              {/* Social Links */}
              <motion.div
                className="mt-6 flex space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
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

            {/* Text Content */}
            <div className="space-y-3 md:space-y-4 text-gray-300 max-w-none">
              <p className="text-sm md:text-base leading-snug">
                I'm a Software Engineer with over <span className="text-primary-400 font-semibold">10 years of experience</span> in the IT Industry. For the past 4 years, I've specialized in backend development with <span className="text-primary-400 font-semibold">Java</span>, with brief experience in frontend. I also have significant experience as a tester.
              </p>

              <p className="text-sm md:text-base leading-snug">
                I've worked for the <span className="text-primary-400 font-semibold">Brazilian Air Force</span> and other complex and critical systems, as well as in the <span className="text-primary-400 font-semibold">Finance and Telecommunications</span> industries.
              </p>

              <p className="text-sm md:text-base leading-snug">
                Part of my background also includes solid experience in infrastructure. I'm fully autonomous in setting up and maintaining development environments, working with <span className="text-primary-400 font-semibold">Linux, Virtual Machines</span>, and containerized applications using <span className="text-primary-400 font-semibold">Docker</span>. I'm currently deepening my knowledge of <span className="text-primary-400 font-semibold">GCP and cloud platforms</span>, with a strong focus on <span className="text-primary-400 font-semibold">backend architecture, scalability, and production-ready environments</span>.
              </p>

              <p className="text-sm md:text-base leading-snug">
                My experience also includes leading grooming sessions, discussing architecture and performance, reviewing pull requests, and <span className="text-primary-400 font-semibold">mentoring junior developers</span>. I follow best practices like <span className="text-primary-400 font-semibold">SOLID principles, Clean Code, and Design Patterns</span> as part of my daily routine.
              </p>

              <p className="text-sm md:text-base leading-snug">
                I'm known by my peers for being eager to learn, bold when facing challenging tasks, and for my <span className="text-primary-400 font-semibold">strong communication skills</span>. These qualities help me contribute effectively to technical discussions, team collaboration, and the delivery of robust solutions.
              </p>

              {/* Technologies Section */}
              <div className="pt-4">
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-primary-500/20 text-primary-300 rounded-lg border border-primary-500/30 text-sm md:text-base"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

