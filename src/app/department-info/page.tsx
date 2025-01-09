import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function DepartmentInfoPage() {
    return (
      <Container>
        <SectionTitle
            preTitle="Our College"
            title="Department Info"
        >
          Here is the information about our department.
        </SectionTitle>
          <div>
            <p>Department info 1</p>
            <p>Department info 2</p>
            <p>Department info 3</p>
        </div>
    </Container>
    );
  }