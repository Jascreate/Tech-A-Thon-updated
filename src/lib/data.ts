
import type { Event, TeamMember, NavItem, Review, Quote } from "./types";

export const navItems: NavItem[] = [
  { title: "About", href: "/about" },
  { title: "Events", href: "/events" },
  { title: "Team", href: "/team" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
];

export const events: Event[] = [
  {
    title: "C-DAC VISIT'25",
    date: "2025-11-13",
    description: "An educational visit to C-DAC Noida, giving students real-world exposure to indigenous research, advanced development practices, and India’s evolving electronics and computing ecosystem.",
    type: "Visit",
    image: "cdac main",
  },
  {
    title: "AI Driven Drone Technology",
    date: "2025-11-15",
    description: "A dynamic seminar on “AI-Driven Drone Technology,” led by Mr. Konark Sharma from Flybots, whose practical insights and interactive style kept students fully engaged.",
    type: "Seminar",
    image: "drone main",
  },
  {
    title: "AI x AR Workshop",
    date: "2025-11-03",
    description: "A workshop on “Artificial Intelligence x Augmented Reality,” led by Ms. Chhavi Garg in collaboration with SnapAR, introducing students to AR, VR, and MR and showing how AI is transforming immersive technology.",
    type: "Workshop",
    image: "ar main",
  },
  {
    title: "Ml Workshop",
    date: "2025-09-24 to 2025-09-25",
    description: "A workshop on “Artificial Intelligence x Augmented Reality,” led by Ms. Chhavi Garg in collaboration with SnapAR, introducing students to AR, VR, and MR and showing how AI is transforming immersive technology.",
    type: "Workshop",
    image: "ml main",
  },
  {
    title: "Data Science for Sustainable Development",
    date: "2025-04-20 to 2025-04-21",
    description: "A workshop on Data Science for Sustainable Development (A Path to Viksit Bharat) under IQAC and the DBT Star College Scheme. Participants will explore real-world applications of Data Science, ML, and AI, gaining practical insights to strengthen analytical and decision-making skills.",
    type: "Workshop",
    image: "data main",
  },
  {
    title: "FactShala: A Media and Information Literacy Workshop",
    date: "2025-02-10",
    description: "FactShala a media and information literacy workshop conducted with PTI, DataLeads, and the Google News Initiative. The program aims to equip participants with skills to evaluate online content and differentiate facts from misinformation.",
    type: "Workshop",
    image: "fact main",
  },
  {
    title: "Painting for Future",
    date: "2024-10-22",
    description: "A poster-making competition highlighting AI’s impact on sustainability. Express your ideas, show your creativity, and compete for exciting rewards.",
    type: "Competition",
    image: "poster main",
  },
  {
    title: "Research Opportunities in IoT",
    date: "2024-08-28",
    description: "A seminar on Research Opportunities in IoT with Prof. Amit Prakash Singh from GGSIPU as the guest speaker. The session will explore emerging research avenues and the growing significance of IoT across different sectors.",
    type: "Seminar",
    image: "research main",
  },
];

export const team: TeamMember[] = [
  {
    name: "Mr. Dharmendra Singh ",
    role: "Faculty Coordinator",
    position: "Association In-charge",
    bio: "A dedicated academic leader providing strategic guidance and fostering a strong culture of learning within the society. His extensive experience ensures smooth coordination and meaningful growth.",
    image: "dharmendra",
    email: "example@gmail.com",
    linkedin: "https://linkedin.com/in/username",
  },
  {
    name: "Mr. Mahesh Kumar ",
    role: "Faculty Coordinator",
    position: "Teacher In-charge",
    bio: "A supportive mentor who oversees academic and technical initiatives with clarity and commitment. His leadership strengthens the society’s direction and execution of key activities.",
    image: "mahesh",
    email: "maheshkumar@arsd.du.ac.in",
    linkedin: "https://www.linkedin.com/in/mahesh-kumar-bhandari-0a9a08197/",
  },
  {
    name: "Mr. Jag Mohan",
    role: "Faculty Coordinator",
    position: "Seminar In-charge",
    bio: "An experienced faculty member who leads seminar initiatives with precision and thoughtful mentorship. His involvement enhances the society’s academic engagement and event quality.",
    image: "jag",
    email: "example@gmail.com",
    linkedin: "https://www.linkedin.com/in/jag-mohan-1337b412/",
  },
  {
    name: "Hiten Gupta",
    role: "Core Team",
    position: "President",
    bio: "He’s a pioneering President and all-rounder whose creativity and problem-solving don’t stop where others run out of ideas.",
    image: "hiten",
    email: "hitengupta44@gmail.com",
    linkedin: "https://www.linkedin.com/in/hiten-gupta-260624384",
  },
  {
    name: "Harsh",
    role: "Core Team",
    position: "Vice President",
    bio: "He’s disciplined, analytical, and results-driven, with decisive leadership and a proactive style that inspires others.",
    image: "harsh",
    email: "45063@arsd.du.ac.in",
    linkedin: "https://share.google/NrNOA7LM51My7oMcU",
  },
  {
    name: "Anushka Poswal",
    role: "Core Team",
    position: "Secretary",
    bio: "As Secretary, she ensures smooth events and consistently supports Tech-A-Thon with her dedication and energy.",
    image: "anushka",
    email: "anushka.poswal10@gmail.com",
    linkedin: "https://www.linkedin.com/in/anushka-poswal-4b2216399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    name: "Kushi",
    role: "Core Team",
    position: "Joint Secretary ",
    bio: "She’s passionately focused, ensuring our academic journey goes beyond theory and into real, practical tech.",
    image: "kushi",
    email: "khushichauhan8016@gmail.com",
    linkedin: "https://www.linkedin.com/in/khushi-chauhan-4a465041a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Chirag",
    role: "Core Team",
    position: "Treasurer",
    bio: "He oversees finances with smart allocation and clear budgeting, keeping all tech events running strong.",
    image: "chirag",
    email: "45055@arsd.du.ac.in",
    linkedin: "https://in.linkedin.com/in/chirag-kumar-24aa88329",
  },
  {
    name: "Suyash Gupta",
    role: "Core Team",
    position: "Non-Techical Head",
    bio: "As Non-Technical Head, he oversees operations, coordinates teams, and ensures smooth execution of events through strong organizational and leadership skills.",
    image: "suyash",
    email: "gsuyash925@gmail.com",
    linkedin: "https://www.linkedin.com/in/suyash-gupta-635b86387",
  },
  {
    name: "Nitish kumar",
    role: "Core Team",
    position: "Sponsorship Head",
    bio: "Introducing Nitish, our Sponsorship Head — confident, responsible, and focused on building strong partnerships and securing valuable opportunities for the society.",
    image: "nitish",
    email: "nitishkumar735430@gmail.com",
    linkedin: "https://www.linkedin.com/in/nitish-kumar-779229384",
  },
  {
    name: "Ayush Azad",
    role: "Core Team",
    position: "Technical Head",
    bio: "He leads the society’s tech operations, ensures smooth events, and builds practical projects that strengthen Tech-A-Thon’s workflow.",
    image: "ayush",
    email: "ayushazadten@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayush-azad-3b4a53385",
  },
  {
    name: "Aditya ",
    role: "Core Team",
    position: "Digital head",
    bio: "As Digital Head of Tech-A-Thon, he leads digital initiatives, oversees online platforms and digital communications, and drives the organization’s digital presence through innovation and strategic collaboration..",
    image: "aditya1",
    email: "adityaok234@gmail.com",
    linkedin: "https://www.linkedin.com/in/aditya-083a86424/",
  },
  {
    name: "Jay ",
    role: "Core Team",
    position: "Coordinator Head",
    bio: "As Coordinator Head of Tech-A-Thon, he oversees team coordination, manages technical initiatives, and ensures the smooth execution of innovative projects through effective collaboration and leadership.",
    image: "jay",
    email: "mr.dabasjay@gmail.com",
    linkedin: "https://www.linkedin.com/in/jay-dabas-84860340b/",
  },
];

export const memberOfTheMonth = {
  name: "Ashish Sharma",
  position: "Technical Head",
  bio: "He leads the society’s tech operations, ensures smooth events, and builds practical projects that strengthen Tech-A-Thon’s workflow.",
  image: "ashish",
};

export const galleryImages = [
  "gallery-1", "gallery-2", "gallery-3", "gallery-4",
  "gallery-5", "gallery-6", "gallery-7", "gallery-8",
  "gallery-9", "gallery-10", "gallery-11", "gallery-12",
  "gallery-13", "gallery-14","gallery-15", "gallery-16",
  "gallery-17", "gallery-18","gallery-19", "gallery-20",
];

export const reviews: Review[] = [
  {
    name: "Aditya kumar",
    position: "4th Year, B.Sc Physical science with CS",
    review: "Being a part of CS society Techathon has been an incredible journey. Serving as Technical Team Coordinator, allowed me to gain invaluable experiences, enhance my skills, and collaborating with talented individuals.",
    rating: 5,
    image: "aditya"
  },
  {
    name: "Aditi",
    position: "3rd Year, B.Sc (H) CS",
    review: "Loved being a part of the Tech-A-Thon Society! The workshops and Sanganak Vimarsh (annual fest ) are fun, interactive, and very useful. I learned so much and met amazing people who share the same interests.",
    rating: 5,
    image: "aditi  "
  },
  {
    name: "Adarsh",
    position: "4th Year, B.Sc Physical science with CS",
    review: "In Tech-A-Thon, I made friends for life, learned from amazing people. Even a year after graduating, I still reach out for advice and share laughs with fellow members.",
    rating: 4,
    image: "adarsh"
  }
];

export const quotes: Quote[] = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    quote: "Code is like humor. When you have to explain it, it’s bad.",
    author: "Cory House"
  },
  {
    quote: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    author: "Bill Gates"
  }
];
