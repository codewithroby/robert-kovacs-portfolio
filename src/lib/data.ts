import React from "react";
import { GiReceiveMoney } from "react-icons/gi";
import { BiCodeAlt } from "react-icons/bi";
import { AiFillYoutube } from "react-icons/ai";
import KovacsTrading from "^/public/KovacsTrading.jpg";
import ClickGeneration from "^/public/ClickGeneration.jpg";
import LaPecoraNera from "^/public/LaPecoraNera.jpg";

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
    title: "First Time Programming",
    description:
      "I was playing a video game, and I wanted to create something to automate it, so I started watching YouTube videos to learn about ActionScript 3.0 and made a bot that played for me.",
    icon: React.createElement(AiFillYoutube),
    date: "2015",
  },
  {
    title: "SaaS Business Owner",
    description:
      "After using my bots for a while, I decided to start selling them. Over the years, I managed to resell both monthly and yearly licenses for my bots, gaining experience in connecting clients and servers for licensing my system.",
    icon: React.createElement(GiReceiveMoney),
    date: "2016 - 2019",
  },
  {
    title: "Full-Stack Developer",
    description:
      "I'm now a full-stack developer working as a freelancer. My favorite stack is React, Next.JS, TypeScript, Tailwind CSS. I'm open to single projects development.",
    icon: React.createElement(BiCodeAlt),
    date: "2020 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Kovacs Trading",
    description:
      "The platform that provides everything you need to become a successful trader.",
    tags: ["React", "Next.JS", "Tailwind CSS"],
    imageUrl: KovacsTrading,
    projectUrl: "https://kovacs-trading.robycodes.com/",
  },
  {
    title: "Click Generation",
    description:
      "A StartUp with the goal of evolving small Italian companies using the power of Internet.",
    tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    imageUrl: ClickGeneration,
    projectUrl: "https://clickgeneration.it",
  },
  {
    title: "La Pecora Nera",
    description:
      "An inviting restaurant where you can savor the finest, locally sourced foods with animals and vegetables grown from within a close radius.",
    tags: ["WordPress", "Elementor", "HTML", "CSS", "JavaScript"],
    imageUrl: LaPecoraNera,
    projectUrl: "https://agriturismolapecoranera.com",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.JS",
  "Git",
  "Tailwind CSS",
  "Framer Motion",
  "Elementor",
  "WordPress",
  "Hosting",
  "Deployment",
] as const;
