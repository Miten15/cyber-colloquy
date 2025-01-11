import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Why Attend Cyber Colloquy?",
  desc: "Discover the unique benefits and learning opportunities that our Cyber Colloquy events offer. Find out how you can contribute and grow.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Expert Insights",
      desc: "Gain valuable knowledge from industry experts and academics in the field of cybersecurity.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Hands-on Workshops",
      desc: "Participate in practical workshops to develop practical cybersecurity skills.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Networking Opportunities",
      desc: "Connect with fellow students, faculty, and professionals, and participate in discussions on current cybersecurity trends.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "What to Expect at Cyber Colloquy 4.0?",
  desc: "Get a glimpse of what awaits you at our latest edition of Cyber Colloquy. This year’s program is set to provide more opportunities and knowledge for all attendees.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Engaging Panel Discussions",
      desc: "Participate in insightful discussions that will cover various aspects of cybersecurity.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Guest Speakers",
      desc: "Learn from experts and leaders in the field of cybersecurity, sharing their experience and knowledge.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Exciting Competitions",
      desc: "Participate in the various competitions that are being held to test your knowledge and skills in the cyber security field.",
      icon: <SunIcon />,
    },
  ],
};

const events = [
  {
    id: 1,
    title: "Cybersecurity Colloquy 2021",
    year: 2021,
    date: "November 20, 2021",
    description: "Our first ever Cybersecurity Colloquy event.",
    location: "Main Auditorium",
    images: ["/img/event1.jpg", "/img/event2.jpg"],
    tags: ["cybersecurity", "colloquy", "networking"],
    colloquyDetails: {
      conductedBy: "Dr. John Doe",
      topics: ["Ethical Hacking", "Network Security", "Cryptography"],
    },
  },
  {
    id: 2,
    title: "Cybersecurity Colloquy 2022",
    year: 2022,
    date: "December 10, 2022",
    description: "Our second annual Cybersecurity Colloquy event.",
    location: "Seminar Hall",
    images: ["/img/event3.jpg", "/img/event4.jpg"],
    tags: ["cybersecurity", "colloquy", "ai", "data science"],
    colloquyDetails: {
      conductedBy: "Prof. Jane Smith",
      topics: [
        "AI in Cybersecurity",
        "Data Science in Security",
        "Advanced Malware Analysis",
      ],
    },
  },
  {
    id: 3,
    title: "Cybersecurity Colloquy 2023",
    year: 2023,
    date: "October 25, 2023",
    description: "Our annual Cybersecurity Colloquy event.",
    location: "Conference Room",
    images: ["/img/event5.jpg", "/img/event6.jpg"],
    tags: ["cybersecurity", "colloquy", "cloud computing", "data science"],
    colloquyDetails: {
      conductedBy: "Dr. Alice Johnson",
      topics: ["Cloud Security", "Data Privacy", "Secure Coding Practices"],
    },
  },
  {
    id: 4,
    title: "Cybersecurity Colloquy 2024",
    year: 2024,
    date: "September 15, 2024",
    description: "Our last Cybersecurity Colloquy event.",
    location: "Main Auditorium",
    images: ["/img/event7.jpg", "/img/event8.jpg"],
    tags: ["cybersecurity", "colloquy", "network security", "blockchain"],
    colloquyDetails: {
      conductedBy: "Mr. Bob Williams",
      topics: ["Network Security", "Blockchain Security", "Cyber Law"],
    },
  },
  {
    id: 5,
    title: "Cyber Colloquy 4.0: From compliance to confidence",
    year: 2025,
    date: "21st to 24th March",
    description: "Adopting the new rules for a privacy-centric future",
    location: "Seminar Hall",
    images: ["/img/events/event9.jpg", "/img/events/event10.jpg"],
    tags: ["cybersecurity", "colloquy", "quantum computing", "data science"],
    colloquyDetails: {
      conductedBy: "Dr. Eva Brown",
      topics: ["Quantum Computing", "Threat Intelligence", "Cyber Warfare"],
    },
    activities: [
      {
        date: "21st March",
        description: "Inauguration and Keynote Session",
        image: "/img/events/activity1.jpg",
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
        image: "/img/events/activity3.jpg",
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
        image: "/img/events/activity5.jpg",
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
        image: "/img/events/activity6.jpg",
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg",
      },
      {
        date: "24th March",
        description: "Networking Lunch",
        image: "/img/events/activity8.jpg",
      },
    ],
  },
];

export { benefitOne, benefitTwo, events };
