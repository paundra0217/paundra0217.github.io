import Experience from "@/components/cards/experience";
import { promises as fs } from "fs";
import { PropsWithChildren } from "react";

type ExperienceData = {
  start_date: string;
  end_date: string;
  position: string;
  company: string;
  description: string[];
};

export default async function ExperienceSection({
  resumeLink,
}: PropsWithChildren<{
  resumeLink: string;
}>) {
  const fileExperience = await fs.readFile(
    process.cwd() + "/public/data/experience.json",
    "utf8"
  );
  const experience_data = JSON.parse(fileExperience);

  return (
    <section className="py-8 lg:py-16 px-8 xl:px-32 2xl:px-80 bg-white bg-opacity-0" id="experience">
      <p className="text-[24px] md:text-[36px] font-bold mb-8">Experience</p>
      <div className="flex flex-col gap-4 mb-4">
        {experience_data.data.map((d: ExperienceData, i: number) => {
          return (
            <Experience
              key={i}
              index={i}
              startDate={new Date(d.start_date)}
              endDate={new Date(d.end_date)}
              position={d.position}
              company={d.company}
              description={d.description}
            />
          );
        })}
      </div>
      <a href={resumeLink} target="_blank">
        <button className="p-2 bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
          Full Résumé/CV {"->"}
        </button>
      </a>
    </section>
  );
}
