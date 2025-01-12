'use client'

import { Shield, Users2, Lightbulb, Cog, Users, Target, Award, BookOpen } from 'lucide-react'
import { Counter } from './ui/counter'
import { useState } from 'react'

const stats = [
  {
    number: 35,
    label: "Law Enforcement Personnel Trained",
    icon: <Users2 className="h-12 w-12" />
  },
  {
    number: 4,
    label: "Privacy Professionals Accredited",
    icon: <Shield className="h-12 w-12" />
  },
  {
    number: 600,
    label: "CIO/CISO Trained in Strategy Program",
    icon: <Lightbulb className="h-12 w-12" />
    
  },
  {
    number: 600,
    label: "Trained in Security Engineering",
    icon: <Cog className="h-12 w-12" />
  },
  {
    number: 1.4,
    label: "Women Engineers Trained from Tier II/III",
    icon: <Users className="h-12 w-12" />,
    suffix: "K+"
  },
  {
    number: 150,
    label: "Security Innovators Accelerated",
    icon: <Target className="h-12 w-12" />
  },
  {
    number: 120,
    label: "Trained in national Simulation Exercise",
    icon: <Award className="h-12 w-12" />
  },
  {
    number: 135,
    label: "Thought Leadership pieces published",
    icon: <BookOpen className="h-12 w-12" />
  }
]

export function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">DSCI Impact</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            DSCI's impactful initiatives are making India a safer, more secure, and trusted nation in cyberspace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-dashed border-blue-200 dark:border-blue-800 flex flex-col items-center text-center transition-all duration-300 ease-in-out"
              style={{
                borderColor: hoveredIndex === index ? 'rgb(59, 130, 246)' : '',
                backgroundColor: hoveredIndex === index ? 'rgba(59, 130, 246, 0.1)' : '',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="mb-4" style={{ color: hoveredIndex === index ? 'rgb(59, 130, 246)' : 'rgb(37, 99, 235)' }}>
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold mb-3 dark:text-white">
                <Counter
                  end={stat.number}
                  suffix={stat.suffix || "+"}
                  duration={2}
                />
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
