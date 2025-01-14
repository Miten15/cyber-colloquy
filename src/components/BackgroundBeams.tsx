'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
    'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
    'M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859',
    'M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851',
    'M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843',
    'M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835',
  ]

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <svg className="absolute w-full h-full" viewBox="0 0 300 680" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" filter="url(#filter0_f_1_2)">
          {paths.map((path, index) => (
            <motion.path
              key={index}
              d={path}
              stroke={`hsl(${200 + index * 10}, 100%, 50%)`}
              strokeOpacity="0.3"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2 + index * 0.2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
            />
          ))}
        </g>
        <defs>
          <filter id="filter0_f_1_2" x="-684" y="-489" width="1668" height="1668" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_1_2" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

