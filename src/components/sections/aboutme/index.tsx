"use client";

import { easeInOut, motion } from "motion/react";
import { PropsWithChildren } from "react";

export default function AboutMeSection({
  name,
  role,
  about,
}: PropsWithChildren<{
  name: string;
  role: string;
  about: string;
}>) {
  return (
    <section className="py-8 lg:py-16 px-8 xl:px-32 2xl:px-80 min-h-screen flex flex-col items-center justify-center gap-8 lg:gap-16">
      <div className="flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0}}
          transition={{ ease: easeInOut }}
          className="text-[32px] md:text-[64px] font-bold leading-tight text-center"
        >
          {name}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: easeInOut, delay: 0.2 }}
          className="text-[20px] md:text-[32px] leading-tight text-[#8FFF00]"
        >
          {role}
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ ease: easeInOut, delay: 0.4 }}
        className="mb-4 px-4 text-xs md:text-xl text-center"
      >
        {about}
      </motion.p>
      <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-8 justify-center">
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: easeInOut, delay: 0.6 }}
          href="#projects"
        >
          <button className="text-nowrap p-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
            Projects {"->"}
          </button>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: easeInOut, delay: 0.7 }}
          href="#experience"
        >
          <button className="text-nowrap p-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
            Experience {"->"}
          </button>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ ease: easeInOut, delay: 0.8 }}
          href="#contact"
        >
          <button className="text-nowrap p-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
            Contact {"->"}
          </button>
        </motion.a>
      </div>
    </section>
  );
}
