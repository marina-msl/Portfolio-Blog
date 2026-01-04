import CenteredNav from '@/components/CenteredNav'
import Footer from '@/components/Footer'
import BlogList from '@/components/BlogList'

export const metadata = {
  title: 'Blog | Marina',
  description: 'Articles and tutorials about web development',
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <CenteredNav />
      <div className="pt-24">
        <BlogList />
      </div>
      <Footer />
    </main>
  )
}

