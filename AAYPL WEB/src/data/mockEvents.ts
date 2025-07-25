export interface Event {
  id: string;
  title: string;
  date: string; // ISO date
  location: string;
  description: string;
  coverImage?: string;
  link?: string;
}

export const mockEvents: Event[] = [
  {
    id: "event-001",
    title: "Pan-African Youth Forum",
    date: "2025-09-12",
    location: "Lagos, Nigeria",
    description: "A gathering of youth leaders across Africa to discuss policy, innovation, and leadership.",
    coverImage: "/images/events/forum.jpg",
    link: "/events/pan-african-youth-forum"
  },
  {
    id: "event-002",
    title: "Digital Skills Bootcamp",
    date: "2025-10-05",
    location: "Online",
    description: "Virtual bootcamp focused on digital skills for future leaders.",
    coverImage: "/images/events/digital-skills.jpg",
    link: "/events/digital-skills-bootcamp"
  }
];export interface Event {
  id: string;
  title: string;
  date: string; // ISO date
  location: string;
  description: string;
  coverImage?: string;
  link?: string;
}

export const mockEvents: Event[] = [
  {
    id: "event-001",
    title: "Pan-African Youth Forum",
    date: "2025-09-12",
    location: "Lagos, Nigeria",
    description: "A gathering of youth leaders across Africa to discuss policy, innovation, and leadership.",
    coverImage: "/images/events/forum.jpg",
    link: "/events/pan-african-youth-forum"
  },
  {
    id: "event-002",
    title: "Digital Skills Bootcamp",
    date: "2025-10-05",
    location: "Online",
    description: "Virtual bootcamp focused on digital skills for future leaders.",
    coverImage: "/images/events/digital-skills.jpg",
    link: "/events/digital-skills-bootcamp"
  }
];