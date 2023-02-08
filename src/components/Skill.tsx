import React from "react";
import { motion } from "framer-motion";
import { Skill } from "typings";
import { urlFor } from "sanity";

type Props = {
  skill: Skill;
  direction?: number;
};

const Skill = ({ skill, direction }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: direction ? direction : 0,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border bg-white border-gray-500 object-contain w-12 h-12 md:w-28 md:h-28 lg:w-20 lg:h-20 2xl:w-32 2xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-gray-100 h-12 w-12 md:w-28 md:h-28 lg:w-20 lg:h-20 2xl:w-32 2xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-center text-[0.5rem] md:text-lg font-bold text-black opacity-100">
            {skill.skillName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
