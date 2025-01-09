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
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
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
      topics: ["AI in Cybersecurity", "Data Science in Security", "Advanced Malware Analysis"],
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
          image: "/img/events/activity1.jpg"
      },
      {
        date: "21st March",
        description: "Panel Discussion on Emerging Cybersecurity Threats",
        image: "/img/events/activity2.jpg"
      },
      {
        date: "22nd March",
        description: "Workshop on Ethical Hacking",
          image: "/img/events/activity3.jpg"
      },
      {
        date: "22nd March",
        description: "Workshop on AI in Cybersecurity",
        image: "/img/events/activity4.jpg"
      },
      {
        date: "23rd March",
        description: "Technical Session on Cloud Security",
         image: "/img/events/activity5.jpg"
      },
      {
        date: "23rd March",
        description: "Technical Session on Data Privacy",
          image: "/img/events/activity6.jpg"
      },
      {
        date: "24th March",
        description: "Closing Ceremony and Awards",
        image: "/img/events/activity7.jpg"
      },
      {
        date: "24th March",
        description: "Networking Lunch",
          image: "/img/events/activity8.jpg"
      },
    ],
  },
];

export { benefitOne, benefitTwo, events };