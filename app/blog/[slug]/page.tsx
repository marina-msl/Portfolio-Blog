import CenteredNav from '@/components/CenteredNav'
import Footer from '@/components/Footer'
import BlogPostDetail from '@/components/BlogPostDetail'
import type { Metadata } from 'next'

const blogPostsData: Record<string, { title: string }> = {
  '1': {
    title: 'Why Framework "Magic" Can Be More Dangerous Than Plain Java',
  },
  '2': {
    title: "BigO Isn't Performance And That's Where Many Engineers Get Stuck",
  },
  '3': {
    title: 'List, Set, and Map: Key Differences in Java Collections',
  },
  '4': {
    title: 'Java Collections in Real Systems | Part 1: Set',
  },
  '5': {
    title: 'Java Collections in Real Systems | Part 2: List',
  },
  '6': {
    title: 'Java Collections in Real Systems | Part 3: Map',
  },
  '7': {
    title: 'Why "It Works in Tests" Is Not the Same as "It Works in Production"?',
  },
  '8': {
    title: 'JPARepository vs CRUDRepository: What\'s the difference?',
  },
  '9': {
    title: 'Can we escape from digital era?',
  },
  '10': {
    title: 'The day that all my problem was a simple comma',
  },
  '11': {
    title: 'Refactoring: Quick wins or long-term gains?',
  },
  '12': {
    title: 'When Code Feels Beautiful: Hexagonal vs DDD',
  },
  '13': {
    title: 'Synchronous vs Reactive: Is Your Server Working or Just Waiting in the Kitchen?',
  },
  '14': {
    title: 'How HashMap Resolves Collisions And Its Limitations?',
  },
  '15': {
    title: 'Auto-Encapsulation in Java: Useful or Exaggerated?',
  },
  '16': {
    title: 'JWT is not authentication and understanding this changes everything!',
  },
  '17': {
    title: 'This is a Tree or a Graph?',
  },
  '18': {
    title: 'Java Records: A Sophisticated Way to Build DTOs',
  },
  '19': {
    title: '🧠 From Java Collections to Interview Readiness',
  },
  '20': {
    title: 'How does HashSet work internally, and how does it ensure unique elements?',
  },
  '21': {
    title: 'Your First Hello World with Spring AI Will Be Easier Than You Think!',
  },
}

export async function generateStaticParams() {
  const posts = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ]
  return posts.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPostsData[params.slug]
  const title = post ? `${post.title} | Marina` : 'Blog Post | Marina'
  
  return {
    title,
    description: 'Read my thoughts on software engineering, Java, and backend development.',
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <CenteredNav />
      <div className="pt-24">
        <BlogPostDetail slug={params.slug} />
      </div>
      <Footer />
    </main>
  )
}

