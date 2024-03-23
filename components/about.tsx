"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="flex flex-col gap-3">
        <p className="">
          I'm a web developer with a passion for building dynamic and user-friendly web experiences. While my academic background lies in Commerce {"("}B.Com. from Delhi University{")"}, my true calling lies in the world of code.</p>

        <p>Currently, I'm interning as a software developer at Techype, where I'm constantly learning and growing my skills. My core tech stack includes React.js, Next.js, Node.js, and MongoDB.</p>
          <p>Beyond coding, I'm an enthusiastic football player, a gym rat {"("}when time permits!{")"}, and a lover of all kinds of music .</p>
          <p>This portfolio showcases my projects and journey in web development so far. I'm always eager to learn and collaborate, so feel free to reach out and connect!
        </p>
      </div>
    </motion.section >
  );
}
