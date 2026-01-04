'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { BlogPost } from './Blog'

const blogPostsData: Record<string, BlogPost & { content: string }> = {
  '1': {
    id: '1',
    title: 'Why Framework "Magic" Can Be More Dangerous Than Plain Java',
    excerpt:
      'Frameworks are great at reducing boilerplate, until they start hiding important details. @SneakyThrows is a good example of how framework magic can make code look cleaner but hide critical exception contracts.',
    date: '2024-12-15',
    author: 'Marina',
    tags: ['Spring', 'Java', 'SneakyThrows'],
    readTime: '6 min',
    content: `
# Why Framework "Magic" Can Be More Dangerous Than Plain Java

Frameworks are great at reducing boilerplate, until they start hiding important details.

\`@SneakyThrows\` is a good example. It removes the need to declare or catch checked exceptions, making the code look cleaner at first glance. But that "magic" comes at a cost: the method's exception contract becomes invisible.

## When exceptions aren't explicit:

- Callers don't know what can fail
- Error handling becomes accidental instead of intentional
- Debugging and maintenance get harder over time

In plain Java, checked exceptions force you to make decisions. You either handle the failure or consciously propagate it. That friction is not a flaw, it's a design signal.

Using \`@SneakyThrows\` may feel like a shortcut, but shortcuts tend to accumulate invisible debt. Readability, explicit contracts, and predictable behavior usually age much better than convenience.

## My Approach

Personally, I avoid \`@SneakyThrows\`. I prefer explicit exception handling, wrapping exceptions when needed, or designing clearer exception contracts. These approaches make failures visible, code easier to reason about, and systems safer to evolve over time.

Frameworks should help us write better code not hide the complexity we still need to understand.

## What do you think?

Have you ever had problems caused by \`@SneakyThrows\`? Do you like using it, or do you prefer more explicit approaches? Let me know what do you think about sneaky throws and also your experiences with other framework features that look like magic, but end up doing more harm than good in the long run.
    `,
  },
  '2': {
    id: '2',
    title: "BigO Isn't Performance And That's Where Many Engineers Get Stuck",
    excerpt:
      'Why can two O(n) algorithms feel completely different in practice? Understanding the separation between BigO and real performance helps you make better engineering decisions.',
    date: '2025-12-28',
    author: 'Marina',
    tags: ['Algorithms', 'BigO', 'Performance'],
    readTime: '7 min',
    content: `
# BigO Isn't Performance And That's Where Many Engineers Get Stuck

Why can two O(n) algorithms feel completely different in practice?

If you've ever wondered that, you're not alone.

This is one of the most common and least obvious difficulties engineers face when learning algorithms and complexity analysis. It usually doesn't affect beginners. It appears once you already have real-world experience and your intuition starts to clash with theory.

## The mental trap

We're trained to think in terms of what feels expensive:

- More loops feel slower
- More objects feel heavier
- Linked lists feel more complex than arrays

So when we learn that two sequential loops can still be O(n), or that iterating over an ArrayList and a LinkedList are both O(n), something feels wrong.

If arrays and linked lists allocate memory differently, shouldn't that change BigO?

## What BigO does not measure

BigO does **not** measure:

- Real execution time
- Cache efficiency or memory layout
- CPU-level behavior

BigO describes how the number of operations grows as input size grows.

In other words, it tells you the shape of the curve, not how high the curve is.

That's why two O(n) algorithms can behave very differently in practice.

Constants, memory access patterns, and hardware effects still matter, BigO simply chooses to ignore them.

## Why this matters in real engineering

Understanding this separation helps you make better decisions:

- BigO helps you avoid solutions that won't scale
- Implementation details make solutions fast in reality

If you only think in BigO, you might ignore cache locality and memory pressure.

If you only think in performance details, you might ship something that collapses at scale.

Good engineers need both!
    `,
  },
}

export default function BlogPostDetail({ slug }: { slug: string }) {
  const post = blogPostsData[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
          <Link
            href="/blog"
            className="text-primary-400 hover:text-primary-300"
          >
            Back to blog
          </Link>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
              <span>{formatDate(post.date)}</span>
              <span>•</span>
              <span>{post.readTime} read</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <div
              className="prose prose-invert prose-lg max-w-none text-gray-300"
              dangerouslySetInnerHTML={{
                __html: post.content
                  .split('\n')
                  .map((line) => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold text-white mb-4 mt-8">${line.slice(2)}</h1>`
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-white mb-3 mt-6">${line.slice(3)}</h2>`
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold text-white mb-2 mt-4">${line.slice(4)}</h3>`
                    }
                    if (line.startsWith('```')) {
                      return ''
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="ml-4 mb-2">${line.slice(2)}</li>`
                    }
                    if (line.trim() === '') {
                      return '<br />'
                    }
                    return `<p class="mb-4 leading-relaxed">${line}</p>`
                  })
                  .join(''),
              }}
            />
          </div>
        </motion.div>
      </div>
    </article>
  )
}

