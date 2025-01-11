"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "What is Cyber Colloquy?",
    answer:
      "Cyber Colloquy is an annual event organized by the Cyber Security Department of Shah and Anchor Kutchhi Engineering College, featuring workshops, lectures, and competitions.",
  },
  {
    question: "How can I participate in Cyber Colloquy?",
    answer:
      "Registration details are posted on our website. You can follow the details for registration by going to the events section. ",
  },
  {
    question: "Are there any entry requirements for Cyber Colloquy?",
    answer:
      "There are no specific entry requirements, but some workshops and events might be aimed at specific skill sets. Details are mentioned for each event.",
  },
  {
    question: "Can I get certifications after attending the events?",
    answer:
      "Certificates will be provided after successful completion of some workshops and some competitions. Please follow the event details to learn more about this.",
  },
  {
    question: "How do I contact the organizers?",
    answer:
      "Please visit the Contact Us page on our website to connect with us.",
  },
];
