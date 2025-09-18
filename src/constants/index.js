import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  ps,
  threejs,
  home,
  about,
  contact,
  work,
  python,
  sql,
  c,
  anm,
  hack,
  nirma,
  odoo,
  postgre,
  google_cloude,
  monash,
  mentora,
  yumyard,
  plotting,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    icon: home,
    title: "Home",
  },
  {
    id: "about",
    icon: about,
    title: "About",
  },
  {
    id: "academics",
    title: "Academics",
  },
  {
    id: "event",
    title: "Events",
  },
  {
    id: "work",
    icon: work,
    title: "Work",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    icon: contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Data Science",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Editor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: postgre,
    icon: postgre,
  },
  // {
  //   name: google_cloude,
  //   icon: google_cloude,
  // },
];

const hackathon = [
  {
    title: "Odoo Hackathon '24",
    organizer_name: "Odoo Company, Infocity, Gandhinagar",
    icon: odoo,
    iconBg: "#383E56",
    date: "14 July 2024",
    points: [
      "Out of more than 650+ registered teams from across India in Level 1 (online), only the top 150 were selected for the finals, and I am proud to be one of them.",
      "This hackathon was not just a test of our technical skills but also a testament to our creativity and problem-solving abilities.",
      "We were all given the same problem statement—creating a Library Management System.",
    ],
  },
  {
    title: "HackNUThon 5.0",
    organizer_name: "Nirma University",
    icon: nirma,
    iconBg: "#383E56",
    date: "20 April 2024 - 22 April 2024",
    points: [
      "It was a 2day offline Hackathon in the campus of Nirma Universtiy, Ahmdabad.",
      "We were given 4 problem state, 36hr of coding time, and a lot of indurtsy experience.",
      "Overall, it was a great learning for me about the indursty level problem.",
    ],
  },
  {
    title: "Hack Genesis '24",
    organizer_name: "Christ University, Delhi NCR",
    icon: hack,
    iconBg: "#383E56",
    date: "15 April 2024 - 18 April 2024",
    points: [
      "We as a team secure 4th position in the Hackathon out of hundrads of team accros the India",
      "Developing web application using Next.js and other related technologies.",
      "Different sectors problem statments were introduce to us and devlop a model for them using our knowledge",
    ],
  },
];


const experiences = [
  {
    title: "Summer Internship",
    company_name: "Pentech.ai",
    icon: ps,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Get to know how data pipeline works in real world.",
      "Adding knowledge in Python for Analytics.",
      "Exploring new terminologies and new AIs.",
    ],
  },
];

const academics = [
  {
    title: "Bachelor of Computer Science",
    school_name: "Monash Univerity, Melbourne",
    icon: monash,
    iconBg: "#383E56",
    date: "March 2025 - present",
    points: [
      "Main reason to choose Moansh was its ranking for engineering not only in Australia but all over the world.",
      "Subjects -- specialization in AI and Data Science",
      // "",
      // "",
    ],
  },
  {
    title: "12th Boards",
    school_name: "Anand Niketan School, Mehsana",
    icon: anm,
    iconBg: "#383E56",
    date: "April 2022 - March 2023",
    points: [
      "I choose Science stream in 12th class with Group A.",
      "Subjects-- Math, Physics, Chemistry, Computer Science, English.",
      "I have completed my 12th boards from CBSE.",
      "I recived total of 80% in 12th boards.",
    ],
  },
  {
    title: "10th Boards",
    school_name: "Anand Niketan School, Mehsana",
    icon: anm,
    iconBg: "#383E56",
    date: "April 2020 - March 2021",
    points: [
      "I have completed my 10th boards from CBSE.",
      "I recived total of 76% in 10th boards.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mentora",
    description:
      "My own thought LMS with AI integration in it for a better user experience.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "pink-text-gradient",
      },
    ],
    image: mentora,
    source_code_link: "https://github.com/red-devil002/mentora.git",
  },
  {
    name: "End-to-End Machine Learning Pipeline for Student Placement Prediction",
    description:
      "The project uses logistic regression for binary classification, taking student's academic and cognitive metrics to forecast their placement success.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "mlxtend lib",
        color: "green-text-gradient",
      },
      {
        name: "sklearn",
        color: "pink-text-gradient",
      },
    ],
    image: plotting,
    source_code_link: "https://github.com/red-devil002/end-to-end-ML-Project.git",
  },
];

export { services, technologies, experiences, hackathon, academics, testimonials, projects };
