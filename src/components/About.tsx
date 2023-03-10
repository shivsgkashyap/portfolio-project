import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "typings";
import { urlFor } from "sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center max-w-7xl px-10 mx-auto items-center md:text-left justify-center md:gap-10 2xl:gap-20"
    >
      <h3 className="pl-5 uppercase tracking-[20px] text-gray-500 text-2xl lg:-mb-5">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="my-2 flex-shrink-0 w-36 h-36 rounded-full object-cover md:rounded-lg md:w-[412px] md:h-[234px] 2xl:w-[825px] 2xl:h-[469px] lg:my-0"
      />

      <div className="space-y-2 2xl:space-y-10 px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background:
        </h4>
        <p className="text-xs md:text-base lg:text-sm 2xl:text-lg">
          {pageInfo?.backgroundInformation}
        </p>
        <p className="hidden text-xs md:block md:text-base lg:text-sm 2xl:text-lg">
          {pageInfo?.backgroundInformation2}
        </p>
        <p className="text-xs md:text-base lg:text-sm 2xl:text-lg">
          {pageInfo?.backgroundInformation3}
        </p>
      </div>

      <a
        href="https://www.github.com/shivsgkashyap"
        target="_blank"
        rel=" noopener noreferrer"
        className="mt-6 px-6 py-2 border rounded-full uppercase text-sm tracking-widest text-gray-400 transition-all hover:border-[#F7AB0A]/60 hover:text-[#F7AB0A]/60 md:mt-0 lg:mb-12 2xl:mb-0 2xl:-mt-14"
      >
        Github Repositories
      </a>
    </motion.div>
  );
};

export default About;
