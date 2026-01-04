'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  tags: string[]
  readTime: string
  image?: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Why Framework "Magic" Can Be More Dangerous Than Plain Java',
    excerpt:
      'Frameworks are great at reducing boilerplate, until they start hiding important details. @SneakyThrows is a good example of how framework magic can make code look cleaner but hide critical exception contracts.',
    date: '2024-12-15',
    author: 'Marina',
    tags: ['Spring', 'Java', 'SneakyThrows'],
    readTime: '6 min',
    image: '/java-frameworks.jpg',
  },
  {
    id: '2',
    title: "BigO Isn't Performance And That's Where Many Engineers Get Stuck",
    excerpt:
      'Why can two O(n) algorithms feel completely different in practice? Understanding the separation between BigO and real performance helps you make better engineering decisions.',
    date: '2025-12-28',
    author: 'Marina',
    tags: ['Algorithms', 'BigO', 'Performance'],
    readTime: '7 min',
    image: '/bigo-image.jpg',
  },
]

export default function Blog() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <section
      id="blog"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Latest <span className="text-primary-400">Posts</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-primary-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/blog/${post.id}`}>
                <div className="h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl opacity-50">📝</div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-primary-400 font-semibold group-hover:gap-2 transition-all">
                    Read more
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link href="/blog">
            <motion.button
              className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

