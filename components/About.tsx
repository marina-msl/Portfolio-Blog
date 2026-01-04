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
              className="flex justify-center md:justify-start"
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
                Part of my experience is also with infrastructure. I'm capable of setting up my own developer environment working with <span className="text-primary-400 font-semibold">Linux and Virtual Machines</span>. I also have experience with <span className="text-primary-400 font-semibold">Docker</span>. Nowadays, I've been diving into <span className="text-primary-400 font-semibold">GCP and cloud platforms</span> to improve my backend skills.
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

