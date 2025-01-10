import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function PatentsPage() {
  return (
    <Container>
      <SectionTitle preTitle="Our College" title="Patents">
        Here are the patents by our college.
      </SectionTitle>
      <div>
        <p>Patent 1</p>
        <p>Patent 2</p>
        <p>Patent 3</p>
      </div>
    </Container>
  );
}
