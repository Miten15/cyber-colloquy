import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { HeroBanner } from "@/components/HeroBanner";

import { benefitOne, benefitTwo } from "@/components/data";

export default function Home() {
  return (
    <Container>
      <HeroBanner
        imageUrl="/img/events/colloquy4.0_banner_2.png"
        title="Cyber Colloquy 4.0: From compliance to confidence"
        description=""
      />
      <Hero />
      <SectionTitle
        preTitle="Cyber Security Department"
        title="Welcome to Cyber Colloquy 4.0"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Explore the world of cybersecurity at SAKEC through the Cyber Colloquy
          4.0 event.
        </p>
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Explore Our Work"
        title="Learn More About Our Activities"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Discover the various projects, achievements, events, and research
          initiatives carried out by our department. Dive into the world of
          Cyber Security with us.
        </p>
      </SectionTitle>

      <Video videoId="dQw4w9WgXcQ" />

      <SectionTitle
        preTitle="Student & Faculty Highlights"
        title="Hear From Our Community"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Testimonials from our students and faculty, which showcase the vibrant
          and collaborative environment of our department.
        </p>
      </SectionTitle>

      <Testimonials />

      <SectionTitle
        preTitle="Have Questions?"
        title="Frequently Asked Questions"
      >
        <p className="text-gray-700 dark:text-gray-300">
          Find answers to the common queries about our program, our department,
          or any cyber security related questions.
        </p>
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
