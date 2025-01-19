'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface AchievementCardProps {
  id: number
  name: string
  date: string
  achievement: string
  details: string
  link?: string
  banner?: string
}

export function AchievementCard({ id, name, date, achievement, details, link, banner }: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[400px] w-full rounded-xl overflow-hidden bg-gray-900"
    >
      {/* Image and Gradient Overlay */}
      <div className="absolute inset-0">
        {banner ? (
          <Image
            src={banner}
            alt={achievement}
            fill
            className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900 to-purple-900" />
        )}
        {/* Multiple gradient layers for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="relative h-full p-6 flex flex-col justify-between z-10">
        {/* Top Content */}
        <div className="flex justify-between items-start">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full">
            {name}
          </span>
          <span className="text-purple-400 text-sm">{date}</span>
        </div>

        {/* Bottom Content */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
            {achievement}
          </h3>
          
          <p className="text-gray-300 line-clamp-3 text-sm">
            {details}
          </p>

          {link && (
            <div className="flex items-center gap-2 text-purple-400 text-sm font-medium">
              <Link href={link} target="_blank" rel="noopener noreferrer">
                Learn More
              </Link>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
