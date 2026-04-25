import type { Project } from "../components/Projects";

export const projects: Project[] = [
  {
    name: "Join",
    descriptionKey: "projects.joinDesc",
    techStack: ["Vite", "Vanilla TypeScript", "Tailwind", "Python", "Django", "PostgreSQL", "Docker", "Linux"],
    githubLinks: [
      { label: "Frontend", url: "https://github.com/Jonas2134/Join-Frontend" },
      { label: "Backend", url: "https://github.com/Jonas2134/Join-Backend" },
    ],
    liveLink: "https://join.jonas-stiefer.com",
    screenShot: "/img/join-screen.png",
  },
  {
    name: "Sharkie",
    descriptionKey: "projects.sharkieDesc",
    techStack: ["JavaScript", "HTML", "CSS"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/Jonas2134/Sharkie" }],
    liveLink: "https://sharkie.jonas-stiefer.com",
    screenShot: "/img/sharkie-screen.png",
  },
  {
    name: "DABubble",
    descriptionKey: "projects.dabubbleDesc",
    techStack: ["Angular", "TypeScript", "SASS", "Supabase"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/Jonas2134/DABubble" }],
    liveLink: "https://da-bubble.jonas-stiefer.com",
    screenShot: "/img/da_bubble-screen.png",
  },
  {
    name: "Quizly",
    descriptionKey: "projects.quizlyDesc",
    techStack: ["Django", "Python", "Whisper", "Google GenAI"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/Jonas2134/Quizly" }],
    screenShot: "/img/quizly-screen.png",
  },
  {
    name: "Videoflix",
    descriptionKey: "projects.videoflixDesc",
    techStack: ["Django", "Python", "PostgreSQL", "Docker", "Linux"],
    githubLinks: [{ label: "GitHub", url: "https://github.com/Jonas2134/Videoflix" }],
    liveLink: "https://videoflix.jonas-stiefer.com",
    screenShot: "/img/videoflix-screen.png",
  },
];
