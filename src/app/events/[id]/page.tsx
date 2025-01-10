// src/app/events/[id]/page.tsx
"use client";

import { Container } from "@/components/Container";
import { events } from "@/components/data";
import Image from "next/image";
import { useParams } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { Sponsors } from "@/components/Sponsors";

export default function EventDetailsPage() {
  const { id } = useParams();

  const eventId = parseInt(id as string, 10);

  const event = events.find((event) => event.id === eventId);

  if (!event) {
    return (
      <Container>
        <SectionTitle title="Event Not Found" />
        <p>The event with the id {eventId} could not be found.</p>
      </Container>
    );
  }

  const eventActivities = event.activities || [];

  return (
    <Container>
      <div className="relative w-full h-96 mb-8 overflow-hidden rounded-lg">
        {event.images && event.images.length > 0 && (
          <Image
            src={event.images[0]}
            alt={event.title}
            fill
            className="object-cover object-center"
          />
        )}
        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent text-center">
          <h1 className="text-3xl font-bold text-white mb-2">{event.title}</h1>
          <p className="text-gray-300"> {event.date} </p>
          <p className="text-gray-300">{event.colloquyDetails?.conductedBy}</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Sponsors />
      </div>
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold mb-2">{event.description}</h2>
        <div className="mt-4">
          <h4 className="text-lg font-semibold">Topics</h4>
          <ul className="text-gray-700 list-disc list-inside inline-block">
            {event.colloquyDetails?.topics.map((topic, index) => (
              <li key={index} className="text-gray-800 dark:text-gray-200">
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">Activities</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["21st March", "22nd March", "23rd March", "24th March"].map(
            (day) => (
              <div
                key={day}
                className="bg-gray-100 dark:bg-gray-700 rounded-md p-4"
              >
                <h4 className="font-semibold mb-2 text-center">{day}</h4>
                {eventActivities
                  .filter((activity) => activity.date === day)
                  .map((activity, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row items-center"
                    >
                      <div className="md:w-1/2 pr-2 flex justify-center">
                        <Image
                          src={activity.image}
                          alt={activity.description}
                          width={200}
                          height={150}
                        />
                      </div>
                      <div className="md:w-1/2 pl-2">
                        <p className="text-gray-700 dark:text-gray-300">
                          {activity.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )
          )}
        </div>
      </div>
    </Container>
  );
}
