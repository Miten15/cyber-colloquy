'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

export function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      const startTime = Date.now()
      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime
        const progress = Math.min(timePassed / (duration * 1000), 1)
        const currentCount = Math.floor(end * progress)
        
        if (currentCount !== countRef.current) {
          countRef.current = currentCount
          setCount(currentCount)
        }

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

