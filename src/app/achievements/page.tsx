// src/app/achievements/page.tsx
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import Image from "next/image";
import Link from "next/link";
import achievementsData from "@/components/achievementsData";

interface Achievement {
  id:number;
  name: string;
  date: string;
  achievement: string;
  details: string;
   link?: string;
  banner?:string;
}


export default function AchievementsPage() {
  return (
    <Container>
      <SectionTitle preTitle="Our College" title="CYSE Achievements">
        Here is the achievements of our Cyber Security Department.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement:Achievement) => (
          <div
            key={achievement.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
             {achievement.banner && (
              <div className="relative h-48 md:h-60">
                <Image
                  src={achievement.banner}
                  alt={achievement.achievement}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{achievement.achievement}</h3>
              <p className="text-gray-600 mb-2">{achievement.name}</p>
                <p className="text-gray-600 mb-2">{achievement.date}</p>
               <p className="text-gray-700">{achievement.details}</p>
                {achievement.link && (
                  <div className="mt-4">
                    <Link
                      href={achievement.link}
                      target="_blank"
                      rel="noopener"
                      className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-300 dark:hover:text-indigo-100"
                    >
                      Learn More
                    </Link>
                  </div>
                )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}