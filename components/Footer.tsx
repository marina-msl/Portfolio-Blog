'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with ❤️ using Next.js ansd TypeScript
        </p>
      </div>
    </footer>
  )
}

