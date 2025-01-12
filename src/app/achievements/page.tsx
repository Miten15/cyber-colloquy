"use client"

import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { AchievementCard } from "@/components/achievement-card";
import achievementsData from "@/components/achievementsData";
import { motion } from "framer-motion";

export default function AchievementsPage() {
  return (
    <Container>
      <SectionTitle preTitle="Our College" title="CYSE Achievements">
        Here are the achievements of our Cyber Security Department.
      </SectionTitle>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {achievementsData.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            {...achievement}
          />
        ))}
      </motion.div>
    </Container>
  );
}

