import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Cyber Security Department"
        title="Welcome to Cyber Colloquy"
      >
          Our source for all events, achievements, projects, and more from the Cyber Security Department of Shah and Anchor Kutchhi Engineering College.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Explore Our Work"
        title="Learn More About Our Activities"
      >
      Discover the various projects, achievements, events, and research initiatives carried out by our department. Dive into the world of Cyber Security with us.
      </SectionTitle>

      <Video videoId="dQw4w9WgXcQ" />

      <SectionTitle
        preTitle="Student & Faculty Highlights"
        title="Hear From Our Community"
      >
        Testimonials from our students and faculty, which showcase the vibrant and collaborative environment of our department.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="Have Questions?" title="Frequently Asked Questions">
        Find answers to the common queries about our program, our department, or any cyber security related questions.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}