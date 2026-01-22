'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BlogLikesProps {
  postId: string
}

export default function BlogLikes({ postId }: BlogLikesProps) {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    // Load likes from localStorage
    const storedLikes = localStorage.getItem(`blog-likes-${postId}`)
    const storedIsLiked = localStorage.getItem(`blog-liked-${postId}`)
    
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10))
    }
    if (storedIsLiked === 'true') {
      setIsLiked(true)
    }
  }, [postId])

  const handleLike = () => {
    // Always increment likes
    const newLikes = likes + 1
    setLikes(newLikes)
    setIsLiked(true)
    localStorage.setItem(`blog-likes-${postId}`, newLikes.toString())
    localStorage.setItem(`blog-liked-${postId}`, 'true')
  }

  return (
    <motion.button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-sm ${
        isLiked
          ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
          : 'bg-gray-700 text-gray-300 border border-gray-600 hover:bg-gray-600'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="font-medium">
        {likes} {likes === 1 ? 'like' : 'likes'}
      </span>
    </motion.button>
  )
}

