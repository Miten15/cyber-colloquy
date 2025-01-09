import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ProjectsPage() {
    return (
      <Container>
        <SectionTitle
            preTitle="Our College"
            title="Projects"
        >
            Here are the projects by our college.
        </SectionTitle>
          <div>
            <p>Project 1</p>
            <p>Project 2</p>
            <p>Project 3</p>
        </div>
    </Container>
    );
  }