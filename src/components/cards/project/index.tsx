"use client";

import { PropsWithChildren } from "react";
import Image from "next/image";
import { easeInOut, motion } from "motion/react";

export default function Project({
  index,
  title,
  description,
  imageLink,
  projectLink,
  tags,
}: PropsWithChildren<{
  index: number;
  title: string;
  description: string;
  imageLink: string;
  projectLink: string;
  tags: string[];
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ ease: easeInOut, delay: index * 0.1 }}
      className="flex flex-col sm:flex-row gap-8 shrink-0 p-4 bg-white bg-opacity-5 hover:bg-opacity-10"
    >
      {imageLink !== "" && (
        <a
          aria-label={title}
          className="aspect-video sm:aspect-auto sm:w-[240px] sm:h-[135px] shrink-0 lg:order-none bg-white bg-opacity-10"
          href={imageLink}
          target="_blank"
        >
          <Image
            aria-hidden
            src={imageLink}
            alt={title}
            width={0}
            height={0}
            className="w-full h-full"
          />
        </a>
      )}
      <div>
        <div className="mb-4">
          <p className="text-[16px] md:text-[20px] mb-2 font-bold">{title}</p>
          {/* <p className="text-[14px] mb-4"><span className="text-[#8FFF00]">Worked as</span> ... <span className="text-[#8FFF00]">for</span> ...</p> */}
          <p className="text-[12px] md:text-[14px] leading-tight whitespace-pre-wrap">
            {description}
          </p>
          <div className="flex gap-3 mt-2">
            {
              tags.map((t, i) => {
                return (<div key={i} className="py-1 px-2.5 text-sm md:text-base text-[#8FFF00] bg-[#8FFF00] bg-opacity-10 hover:bg-opacity-20">{t}</div>)
              })
            }
          </div>
        </div>
        <a href={projectLink} rel="noopener noreferrer" target="_blank">
          <button className="text-sm md:text-base p-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
            Learn More {"->"}
          </button>
        </a>
      </div>
    </motion.div>
  );
}
