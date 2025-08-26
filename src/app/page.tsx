import { promises as fs } from "fs";
// import SideTopBar from "@/components/sidetopbar";
import ProjectSection from "@/components/sections/project";
import ExperienceSection from "@/components/sections/experience";
import ContactSection from "@/components/sections/contact";
import AboutMeSection from "@/components/sections/aboutme";

export default async function Home() {
  const filePorto = await fs.readFile(
    process.cwd() + "/public/data/maininfo.json",
    "utf8"
  );
  const portfolio_data = JSON.parse(filePorto);

  return (
    <div className="justify-center flex flex-col">
      <AboutMeSection name={portfolio_data.name} role={portfolio_data.role} about={portfolio_data.about} />

      <ProjectSection />

      <ExperienceSection resumeLink={portfolio_data.resume_link} />

      <ContactSection email={portfolio_data.email} socialLinks={portfolio_data.social} />
    </div>
  );
}
