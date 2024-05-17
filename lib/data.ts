import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ourkiveImg from "@/public/ourkiveImg.png"
import bizchatImg from "@/public/bizchatImg.png"

export const links = [
  {
    name: "Work",
    hash: "#work",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "OurKive",
    description:
      "OurKive is a mobile application that helps young adults connect and Keep In Touch with their social circles by capturing small moments in life through weekly compilations.",
    tags: ["UX Design", "Product Management", "Swift", "Swift UI", "Firebase", "AWS"],
    imageUrl: ourkiveImg,
    projectUrl: "ourkive",
  },
  {
    title: "BizChat",
    description:
      "BizChat is a LLM web application that aids small-scale entrepreneurs in creating business plans with a chat interface and direct manipulation of the document to account for disparities in use of genAI systems.",
    tags: ["HCI Research", "UX Design"],
    imageUrl: bizchatImg,
    projectUrl: "bizchat",
  },
] as const;