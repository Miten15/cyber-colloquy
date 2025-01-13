"use client";
import React, { useState } from "react";
import { Container } from "@/components/Container";
import { Shield, Users2, Lightbulb, Cog, Users, Target, Award, BookOpen } from 'lucide-react';
import { Counter } from './ui/counter';

interface Stat {
    number: number;
    label: string;
    icon: React.ReactNode;
    suffix?: string;
}
const stats: Stat[] = [
  {
    number: 35,
    label: "Experts and Leaders",
    icon: <Users2 className="h-12 w-12" />
  },
  {
    number: 4,
    label: "Innovative Solutions",
    icon: <Shield className="h-12 w-12" />
  },
  {
    number: 600,
    label: "Skilled Professionals",
    icon: <Lightbulb className="h-12 w-12" />
  },
  {
    number: 600,
    label: "Unique Learning Opportunities",
    icon: <Cog className="h-12 w-12" />
  },
  {
    number: 1.4,
    label: "Global Community Reach",
    icon: <Users className="h-12 w-12" />,
    suffix: "K+"
  },
  {
    number: 150,
    label: "New Insights shared",
    icon: <Target className="h-12 w-12" />
  },
  {
    number: 120,
    label: "Events That Are Conducted",
    icon: <Award className="h-12 w-12" />
  },
  {
    number: 135,
    label: "Important topics of discussion",
    icon: <BookOpen className="h-12 w-12" />
  }
];

export function Impact() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 dark:text-white">Impact of Cyber Events</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the measurable impact of our cyber events, from the number of experts that contribute to them, to the number of participants.
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
  );
}
