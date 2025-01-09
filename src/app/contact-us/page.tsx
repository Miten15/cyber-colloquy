import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";

export default function ContactUsPage() {
  return (
    <Container>
      <SectionTitle
            preTitle="Our College"
            title="Contact Us"
        >
          Here is how to get in contact with us.
        </SectionTitle>
      <div>
        <p>Contact us</p>
          <p>Email: example@email.com</p>
          <p>Phone: 123-456-7890</p>
      </div>
    </Container>
  );
}