'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-commerce Platform',
    description:
      'Complete e-commerce platform with integrated payment system and admin panel.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    image: '🛒',
    link: '#',
  },
  {
    title: 'Task Management App',
    description:
      'Task management application with real-time collaboration and notifications.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: '📋',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description:
      'Modern blog platform with comment system and advanced search.',
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    image: '📝',
    link: '#',
  },
  {
    title: 'Weather Dashboard',
    description:
      'Weather dashboard with interactive visualizations and detailed forecasts.',
    technologies: ['React', 'Chart.js', 'OpenWeather API'],
    image: '🌤️',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="text-primary-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-primary-500 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-5xl mb-4">{project.image}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.a
                href={project.link}
                className="text-primary-400 hover:text-primary-300 font-semibold inline-flex items-center gap-2"
                whileHover={{ x: 5 }}
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

