"use client";

import { easeInOut, motion } from "motion/react";
import { PropsWithChildren } from "react";

function formatDate(date: Date): string {
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${year}`;
}

export default function Experience({
  index,
  startDate,
  endDate,
  position,
  company,
  description,
}: PropsWithChildren<{
  index: number;
  startDate: Date;
  endDate: Date;
  position: string;
  company: string;
  description: string[];
}>) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ ease: easeInOut, delay: index * 0.1 }}
        className="flex flex-col md:flex-row shrink-0 gap-4 p-4 bg-white bg-opacity-5 hover:bg-opacity-10"
      >
        <div className="w-[160px] shrink-0">
          <span className="text-[#8FFF00] text-[12px] md:text-[14px]">
            {formatDate(startDate)} {"-"}{" "}
            {(endDate !== null) ? (
              <>{formatDate(endDate)}</>
            ) : (
              <>PRESENT</>
            )}
          </span>
        </div>
        <div>
          <p className="text-[16px] md:text-[20px] font-bold">{position}</p>
          <p className="text-[12px] md:text-[14px] text-[#8FFF00] mb-2">{company}</p>
          {/* <p className="text-[14px] mb-4"><span className="text-[#8FFF00]">Worked as</span> ... <span className="text-[#8FFF00]">for</span> ...</p> */}

          <ul className="text-[12px] md:text-[14px] leading-tight whitespace-pre-wrap pl-4 list-disc">
            {description.map((desc: string, i: number) => {
              return (
                <li className="py-1" key={i}>
                  {desc}
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </>
  );
}
