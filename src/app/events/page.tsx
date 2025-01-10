import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/SectionTitle";
import { events } from "@/components/data";
import Image from "next/image";
import Link from "next/link";

export default function EventsPage() {
  // Sort events by year in descending order (most recent first)
  const sortedEvents = [...events].sort((a, b) => b.year - a.year);

  return (
    <Container>
      <SectionTitle preTitle="Our College" title="Colloquy Events">
        A timeline of Colloquy events at our college.
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedEvents.map((event) => (
          <Link href={`/events/${event.id}`} key={event.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition duration-300">
              {event.images && event.images.length > 0 && (
                <div className="relative h-48 md:h-60">
                  <Image
                    src={event.images[0]}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">
                  {event.date} ({event.year})
                </p>
                <p className="text-gray-700">{event.description}</p>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Conducted By</h4>
                  <p className="text-gray-700">
                    {event.colloquyDetails.conductedBy}
                  </p>
                  <h4 className="text-lg font-semibold mt-2">Topics</h4>
                  <ul className="text-gray-700 list-disc list-inside">
                    {event.colloquyDetails.topics.map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
