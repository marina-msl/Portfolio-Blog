'use client'

import { useMemo, useState } from 'react'
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
    id: '3',
    title: 'List, Set, and Map: Key Differences in Java Collections',
    excerpt:
      'Understanding the differences between List, Set, and Map is essential when working with Java. This post gives you a concise, practical comparison before diving into real-world scenarios.',
    date: '2026-01-03',
    author: 'Marina',
    tags: ['Java', 'Collections'],
    readTime: '4 min',
    image: '/set-map-list.jpg',
  },
  {
    id: '4',
    title: 'Java Collections in Real Systems | Part 1: Set',
    excerpt:
      'Set is the right choice when uniqueness is a business rule, not just a technical constraint. See how HashSet, LinkedHashSet, and TreeSet show up in real-world financial systems.',
    date: '2026-01-08',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Set'],
    readTime: '6 min',
    image: '/set.jpg',
  },
  {
    id: '5',
    title: 'Java Collections in Real Systems | Part 2: List',
    excerpt:
      'If Set is about uniqueness, List is about order and position. Learn when to use ArrayList or LinkedList based on how your system really behaves.',
    date: '2026-01-09',
    author: 'Marina',
    tags: ['Java', 'Collections', 'List'],
    readTime: '6 min',
    image: '/list.jpg',
  },
  {
    id: '6',
    title: 'Java Collections in Real Systems | Part 3: Map',
    excerpt:
      'If List is about order and Set about uniqueness, Map is about relationships. See how HashMap, LinkedHashMap, and TreeMap map directly to real business rules.',
    date: '2026-01-10',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Map'],
    readTime: '6 min',
  },
  {
    id: '9',
    title: 'Can we escape from digital era?',
    excerpt:
      'Your food now comes from a click in an app from your pocket. Going to a party? You call a car with that same click. Everything is changing, and the way we deal with money is also changing. DREX is coming.',
    date: '2025-10-22',
    author: 'Marina',
    tags: ['Blockchain', 'Crypto', 'Technology'],
    readTime: '6 min',
    image: '/digital-era.jpg',
  },
  {
    id: '10',
    title: 'The day that all my problem was a simple comma',
    excerpt:
      'What is the router in Vue? The Vue Router is the navigation mechanism between screens in your single-page application. After switching from MLA to SPA, I discovered the issue: a missing comma in the header between Content-Type and Authorization.',
    date: '2025-10-27',
    author: 'Marina',
    tags: ['Vue', 'Frontend', 'JavaScript'],
    readTime: '5 min',
  },
  {
    id: '11',
    title: 'Refactoring: Quick wins or long-term gains?',
    excerpt:
      'I decided to centralize all data fetching in StockService.js. Here are the advantages: separation of concerns, scalability, testability, and cleaner components. Future-you will be thankful for this decision!',
    date: '2025-11-02',
    author: 'Marina',
    tags: ['Vue', 'Refactoring', 'Best Practices'],
    readTime: '5 min',
  },
  {
    id: '8',
    title: 'JPARepository vs CRUDRepository: What\'s the difference?',
    excerpt:
      'If you\'ve been working with Spring Data JPA, you\'ve probably noticed that sometimes we extend CrudRepository, and other times, JpaRepository. But, what\'s really the difference between them?',
    date: '2025-11-04',
    author: 'Marina',
    tags: ['Spring', 'Java', 'JPA'],
    readTime: '5 min',
  },
  {
    id: '17',
    title: 'This is a Tree or a Graph?',
    excerpt:
      'Every tree is a graph, but not every graph is a tree. Understanding the difference helps you model hierarchical versus relational structures in real systems and interviews.',
    date: '2025-11-10',
    author: 'Marina',
    tags: ['Algorithms', 'Data Structures', 'Graphs'],
    readTime: '5 min',
  },
  {
    id: '18',
    title: 'Java Records: A Sophisticated Way to Build DTOs',
    excerpt:
      'Java records provide an elegant, immutable way to model DTOs with almost no boilerplate, giving you constructors, accessors, equals, hashCode, and toString out of the box.',
    date: '2025-10-31',
    author: 'Marina',
    tags: ['Java', 'Records', 'DTO'],
    readTime: '5 min',
    image: '/java-record.jpg',
  },
  {
    id: '12',
    title: 'When Code Feels Beautiful: Hexagonal vs DDD',
    excerpt:
      'A few days ago, I came across a piece of code that genuinely made me stop and smile. Was I looking at Hexagonal Architecture or Domain-Driven Design (DDD)? They often look similar at first glance.',
    date: '2025-11-12',
    author: 'Marina',
    tags: ['Architecture', 'DDD', 'Design Patterns'],
    readTime: '6 min',
  },
  {
    id: '16',
    title: 'JWT is not authentication and understanding this changes everything!',
    excerpt:
      'JWT is often described as an authentication mechanism, but it is actually a token you get after authentication. Understanding that difference helps avoid common security pitfalls.',
    date: '2025-11-16',
    author: 'Marina',
    tags: ['Security', 'JWT', 'Authentication'],
    readTime: '6 min',
  },
  {
    id: '13',
    title: 'Synchronous vs Reactive: Is Your Server Working or Just Waiting in the Kitchen?',
    excerpt:
      'Two applications can return the exact same result: 200 (OK) or 404 (Not Found), and still behave completely differently under the hood. The difference lies in what happens inside the server.',
    date: '2025-11-24',
    author: 'Marina',
    tags: ['Spring', 'Reactive', 'Performance'],
    readTime: '7 min',
  },
  {
    id: '14',
    title: 'How HashMap Resolves Collisions And Its Limitations?',
    excerpt:
      'If you\'ve ever used a HashMap in Java, you\'ve already relied on one of the most important data structures. But have you ever wondered what happens when two keys generate the same hash?',
    date: '2025-12-15',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Data Structures'],
    readTime: '6 min',
  },
  {
    id: '15',
    title: 'Auto-Encapsulation in Java: Useful or Exaggerated?',
    excerpt:
      'Auto-encapsulating fields with getters inside the same class can be useful when the logic may evolve, but for simple values it often adds more ceremony than value.',
    date: '2025-12-10',
    author: 'Marina',
    tags: ['Java', 'OOP', 'Refactoring'],
    readTime: '5 min',
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
  {
    id: '7',
    title: 'Why "It Works in Tests" Is Not the Same as "It Works in Production"?',
    excerpt:
      'Have you ever had something that worked perfectly in tests but failed in production? Passing all tests doesn\'t automatically mean your system is ready for what will actually happen in production.',
    date: '2025-12-30',
    author: 'Marina',
    tags: ['Testing', 'Production', 'Engineering'],
    readTime: '7 min',
    image: '/fail.jpg',
  },
  {
    id: '19',
    title: '🧠 From Java Collections to Interview Readiness',
    excerpt:
      'Reading my last posts casually takes around 20–25 minutes. But reading them as a developer trying to understand why each collection exists and how it maps to real systems takes much longer and that\'s where learning actually happens.',
    date: '2026-01-12',
    author: 'Marina',
    tags: ['Java', 'Collections', 'Interview'],
    readTime: '6 min',
  },
  {
    id: '20',
    title: 'How does HashSet work internally, and how does it ensure unique elements?',
    excerpt:
      'HashSet looks simple on the surface, but internally it relies on HashMap and the hashCode/equals contract to guarantee uniqueness efficiently.',
    date: '2026-01-14',
    author: 'Marina',
    tags: ['Java', 'Collections', 'HashSet'],
    readTime: '6 min',
  },
  {
    id: '21',
    title: 'Your First Hello World with Spring AI Will Be Easier Than You Think!',
    excerpt:
      'In just 10 minutes, you can already have your LLM responding! Exploring Spring AI, nothing surprised me more than how easy it was to create my first Hello World.',
    date: '2026-01-17',
    author: 'Marina',
    tags: ['Spring', 'Spring AI', 'Java'],
    readTime: '5 min',
  },
]

export default function Blog() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const availableTags = useMemo(() => {
    const tags = new Set<string>()
    blogPosts.forEach((post) => {
      post.tags.forEach((tag) => tags.add(tag))
    })
    return Array.from(tags).sort()
  }, [])

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const clearTags = () => {
    setSelectedTags([])
  }

  const sortedPosts = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    []
  )

  const filteredPosts =
    selectedTags.length === 0
      ? sortedPosts
      : sortedPosts.filter((post) =>
          post.tags.some((tag) => selectedTags.includes(tag))
        )

  // Limit to latest 3 posts for homepage
  const latestPosts = sortedPosts.slice(0, 3)

  return (
    <section
      id="blog"
      className="py-20 bg-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-8"
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
          {latestPosts.map((post, index) => (
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
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                    <span>{formatDate(post.date)}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-400 transition-colors">
                    {post.title}
                  </h3>
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

