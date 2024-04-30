import {
  mobile,
  backend,
  creator,
  form,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  ps,
  carrent,
  jobit,
  tripguide,
  threejs,
  home,
  about,
  contact,
  events,
  work,
  python,
  sql,
  expressjs,
  c,
  anm,
  hms,
  hack,
  nirma,
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
    title: "Python Developer",
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
];

const hackathon = [
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
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Summer Internship",
    company_name: "Pentech.ai",
    icon: ps,
    iconBg: "#383E56",
    date: "April 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const academics = [
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
    name: "Nike Landing page",
    description:
      "This is a reimage project and just a static page for nike shoes.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/red-devil002/tailwind-project",
  },
  {
    name: "Registration Form",
    description:
      "A single page form which takes input from user and store on the same page in the form of table.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "pink-text-gradient",
      },
    ],
    image: form,
    source_code_link: "https://red-devil002.github.io/wd101/",
  },
  {
    name: "Hospital Management System",
    description:
      "A project created in my 1yr of programming in the Python language. This code takes different fields input in a hospital and stors it to the database and reflect when requested.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "green-text-gradient",
      },
      {
        name: "Database",
        color: "pink-text-gradient",
      },
    ],
    image: hms,
    source_code_link: "https://github.com/red-devil002/hospital-management",
  },
];

export { services, technologies, experiences, hackathon, academics, testimonials, projects };
