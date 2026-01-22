'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Comment {
  id: string
  author: string
  text: string
  date: string
}

interface BlogCommentsProps {
  postId: string
}

export default function BlogComments({ postId }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // Load comments from localStorage
    const storedComments = localStorage.getItem(`blog-comments-${postId}`)
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
  }, [postId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !authorName.trim()) return

    const comment: Comment = {
      id: Date.now().toString(),
      author: authorName,
      text: newComment,
      date: new Date().toISOString(),
    }

    const updatedComments = [comment, ...comments]
    setComments(updatedComments)
    localStorage.setItem(`blog-comments-${postId}`, JSON.stringify(updatedComments))
    
    setNewComment('')
    setAuthorName('')
    setShowForm(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="mt-8 pt-8 border-t border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-white">
          Comments ({comments.length})
        </h3>
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {showForm ? 'Cancel' : 'Add Comment'}
        </motion.button>
      </div>

      {showForm && (
        <motion.form
          onSubmit={handleSubmit}
          className="mb-8 bg-gray-700 rounded-lg p-6 border border-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="mb-4">
            <label htmlFor="author" className="block text-gray-300 mb-2 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="author"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-gray-300 mb-2 font-semibold">
              Comment
            </label>
            <textarea
              id="comment"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors resize-none"
              placeholder="Write your comment..."
            />
          </div>
          <motion.button
            type="submit"
            className="px-6 py-2 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post Comment
          </motion.button>
        </motion.form>
      )}

      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-400 text-center py-8">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <motion.div
              key={comment.id}
              className="bg-gray-700 rounded-lg p-6 border border-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="text-white font-semibold">{comment.author}</h4>
                  <p className="text-gray-400 text-sm">{formatDate(comment.date)}</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">{comment.text}</p>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}





