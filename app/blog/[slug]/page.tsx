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
}

export async function generateStaticParams() {
  const posts = ['1', '2']
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

