import CenteredNav from '@/components/CenteredNav'
import PageTitle from '@/components/PageTitle'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageTitle />
      <CenteredNav />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Blog />
      <Footer />
    </main>
  )
}

