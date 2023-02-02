import React from "react";
import { motion } from "framer-motion";
import { Project } from "typings";
import { urlFor } from "sanity";
import { url } from "inspector";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-center mx-auto items-center z-0">
      <h3 className="mt-20 -mb-24 lg:-mb-28 2xl:-mb-24 uppercase tracking-[20px] text-gray-500 text-2xl lg:mt-10 2xl:mt-20">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects?.map((project) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{ duration: 1.5 }}
            className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:space-y-10 md:justify-start pt-5 md:mt-20"
            key={project._id}
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt="Screenshot of project"
              className="w-full md:max-w-md 2xl:max-w-3xl md:mt-8 object-contain"
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl">
              <h4 className="2xl:text-4xl md:text-2xl text-xl font-semibold text-center underline decoration-[#F7AB0A]/50">
                {project?.title}
              </h4>

              <div className="flex flex-wrap items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-5 w-5 md:h-10 md:w-10 object-contain"
                    key={technology._id}
                    src={urlFor(technology?.image).url()}
                    alt="Technologies used in project"
                  />
                ))}
              </div>

              <p className="hidden w-3/4 text-xs m-auto text-center md:block md:text-sm 2xl:text-lg 2xl:block 2xl:text-left">
                {project?.summary}
              </p>

              <div className="flex flex-col justify-center items-center gap-3 md:flex-row md:gap-10">
                <button
                  onClick={() =>
                    window.open(
                      project?.linkToBuild,
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  className="mt-2 px-6 py-2 border rounded-full uppercase text-sm tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/60 hover:text-[#F7AB0A]/60"
                >
                  Live Preview
                </button>
                <button
                  onClick={() =>
                    window.open(
                      project?.linkToGitHub,
                      "_blank",
                      "noopener noreferrer"
                    )
                  }
                  className="mt-2 px-6 py-2 border rounded-full uppercase text-sm tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/60 hover:text-[#F7AB0A]/60"
                >
                  GitHub Repo
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center h-10">
              <ChevronDoubleLeftIcon className="text-gray-500 w-3" />{" "}
              <h3 className="uppercase tracking-[3px] text-gray-500 text-sm mx-3">
                SCROLL FOR MORE
              </h3>
              <ChevronDoubleRightIcon className="text-gray-500 text-sm w-3" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
