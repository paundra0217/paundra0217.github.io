"use client";

import { easeInOut, motion } from "motion/react";
import { PropsWithChildren } from "react";

type SocialLinks = {
  name: string;
  link: string;
};

export default function ContactSection({
  email,
  socialLinks,
}: PropsWithChildren<{
  email: string;
  socialLinks: SocialLinks[];
}>) {
  return (
    <section
      className="py-16 px-8 xl:px-32 2xl:px-80 bg-black bg-opacity-50"
      id="contact"
    >
      <div className="h-[480px] flex flex-col justify-between">
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: easeInOut, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[24px] md:text-[36px] font-bold mb-8"
          >
            Get in Touch
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: easeInOut, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-sm md:text-md mb-4"
          >
            {"Let's connect! Have any questions, a project in mind, or just want to say hello? Feel free to drop me an email by clicking the contact button below, or reach out on LinkedIn."}
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: easeInOut, delay: 0.6 }}
            viewport={{ once: true }}
            href={`mailto:${email}`}
            className="w-fit"
          >
            <button className="p-2 text-sm md:text-md bg-white bg-opacity-20 hover:bg-opacity-40 transition-all">
              Contact via Email {"->"}
            </button>
          </motion.a>
        </div>
        <div className="flex justify-center">
          <div className="flex w-full flex-wrap gap-8">
            {socialLinks.map((s: SocialLinks, i: number) => {
              return (
                <a
                  key={i}
                  className="text-[#8FFF00] hover:underline text-sm md:text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={s.link}
                >
                  {s.name}
                </a>
              );
            })}
          </div>
          <p className="text-nowrap text-sm lg:text-md">
            &copy; 2025
          </p>
        </div>
      </div>
    </section>
  );
}
