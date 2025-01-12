'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface ActivityCardProps {
  image: string
  description: string
  isActive?: boolean
}

export function ActivityCard({ image, description, isActive }: ActivityCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative overflow-hidden rounded-xl ${
        isActive ? 'ring-2 ring-emerald-500' : ''
      }`}
    >
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={description}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 bg-gray-800/95 backdrop-blur-sm">
        <p className="text-gray-200 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}
