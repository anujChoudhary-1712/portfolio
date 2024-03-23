import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import creatifyImg from "@/public/sellnet.png"
import mediaImg from "@/public/mediascope.png"
import youtubeImg from "@/public/youtube.png"
import resumeImg from "@/public/best-resume-builders.webp"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Intern | Techype",
    location: "Noida",
    description:
      "Engaged in developing multiple admin dashboards using Nextjs, Shadcn ui and Tailwind CSS .Successfully resolved 10-12 bugs in an existing dashboard, enhancing its efficiency and functionality.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Present",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Delhi",
    description:
      "Led backend development by creating multiple CRUD APIs using Node.js, MongoDB, and Firebase, with added AI integration through OpenAI for enhanced functionality across various CRM dashboards. On the frontend, crafted 18-20 components using Next.js, contributing to the seamless user experience and navigation within the CRM dashboards.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Mar 2024",
  },
  {
    title: "Front-end Developer Intern",
    location: "Delhi",
    description:
      "Created an AI-driven chatbot for customer support using OpenAI, Langchain, Node.js, and MongoDB for the company's website. Also, managed to fix several bugs and developed multiple components for the main site, improving its overall performance and user experience using Nextjs",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2023 - Dec 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Creatify",
    description:
      "Developed a digital marketplace using Nextjs , Nodejs and Mongodb enabling users to buy and sell digital assets such as stickers , emojis , landing page , ui kits etc.",
      link:"https://sellnet-front-end.vercel.app/",
    tags: ["Next.js", "MongoDB", "Tailwind", "Nodejs","Shadcn"],
    imageUrl: creatifyImg,
  },
  {
    title: "Resume builder",
    description:
      "This website helps users in building a resume based on their experience level by entering the details in the editor .",
      link:"https://anuj-1712.github.io/Resume-Builder/",
    tags: ["React", "TypeScript", "Material UI"],
    imageUrl: resumeImg,
  },
  {
    title: "Media Scope",
    description:
      "This is a news related website which displays news articles to the users based on categories. Also, users can search about a particular topic using the search bar.",
      link:"https://youtu.be/jLFqSlrUAmc?si=cYs96anv0e9aSEM9",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: mediaImg,
  },
  {
    title: "Youtube Clone",
    description:
      "This is a Frontend clone of Youtube with some functionalities of it. Currently , This app allows the user to watch and enjoy videos , search particular videos.",
      link:"https://anuj-1712.github.io/youtube-clone/",
    tags: ["React.js","Tailwind CSS"],
    imageUrl: youtubeImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Firebase",
  "Express",
  "Python",
] as const;
