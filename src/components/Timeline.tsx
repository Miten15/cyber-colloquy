'use client'

import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export interface TimelineEvent {
  date: string
  title: string
  description: string
  status: 'completed' | 'current' | 'upcoming'
}

interface TimelineProps {
  events: TimelineEvent[]
  className?: string
}

export default function Timeline({ events, className }: TimelineProps) {
  if (!events?.length) {
    return null
  }

  return (
    <div className={cn("relative py-8", className)}>
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 dark:bg-blue-900" />
      
      <div className="space-y-12">
        {events.map((event, index) => (
          <motion.div
            key={event.date}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}
          >
            {/* Dot */}
            <div 
              className={cn(
                "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full",
                event.status === 'completed' ? 'bg-green-500' :
                event.status === 'current' ? 'bg-blue-500' :
                'bg-gray-300'
              )}
            />
            
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
              <div className={cn(
                "bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg",
                event.status === 'completed' ? 'border-l-4 border-green-500' :
                event.status === 'current' ? 'border-l-4 border-blue-500' :
                'border-l-4 border-gray-300'
              )}>
                <div className="text-sm text-gray-500 dark:text-gray-400">{event.date}</div>
                <h4 className="text-lg font-semibold mb-2 dark:text-white">{event.title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

