import Project from "@/components/cards/project";
import { promises as fs } from "fs";

type ProjectData = {
  name: string;
  description: string;
  image_link: string;
  link: string;
};

export default async function ProjectSection() {
  const fileProject = await fs.readFile(
    process.cwd() + "/public/data/projects.json",
    "utf8"
  );
  const project_data = JSON.parse(fileProject);

  return (
    <section
      className="py-8 lg:py-16 px-8 xl:px-32 2xl:px-80 bg-white bg-opacity-5"
      id="projects"
    >
      <p className="text-[24px] md:text-[36px] font-bold mb-8">Projects</p>
      <div className="flex flex-col gap-4">
        {project_data.data.map((d: ProjectData, i: number) => {
          return (
            <Project
              key={i}
              index={i}
              title={d.name}
              description={d.description}
              imageLink={d.image_link}
              projectLink={d.link}
            />
          );
        })}
      </div>
    </section>
  );
}
