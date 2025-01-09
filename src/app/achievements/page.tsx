import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function AchievementsPage() {
  return (
    <Container>
        <SectionTitle
            preTitle="Our College"
            title="Achievements"
        >
          Here is the achievements of our college
        </SectionTitle>
      <div>
        {/* List of achievements goes here */}
        <p>Achievement 1</p>
        <p>Achievement 2</p>
        <p>Achievement 3</p>
      </div>
    </Container>
  );
}