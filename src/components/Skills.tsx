import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  const [isDesktop, setDesktop] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1450) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1450) {
        setDesktop(true);
      } else {
        setDesktop(false);
      }
    };
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col h-screen text-center md:text-left max-w-[2000px] xl:px-10 items-center mx-auto"
    >
      <h3 className="uppercase tracking-[20px] mt-20 mb-5 text-gray-500 text-2xl lg:mt-10 2xl:mt-20">
        Skills
      </h3>
      <h3 className="w-3/4 uppercase tracking-[3px] text-xs text-gray-500 md:text-sm md:w-auto md:-mb-20">
        {isDesktop ? "Hover Over" : "Press"} a skill for the name of the
        technology
      </h3>
      {isDesktop ? (
        <div className="grid grid-cols-3 mt-6 md:mt-32 md:grid-cols-4 gap-5 2xl:my-auto">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} direction={-200} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} direction={200} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-6 md:mt-32 md:grid-cols-4 gap-5">
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
