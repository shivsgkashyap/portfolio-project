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
      className="flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="w-3/4 absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm md:w-auto">
        {isDesktop ? "Hover Over" : "Press"} a skill for the name of the
        technology
      </h3>
      {isDesktop ? (
        <div className="grid grid-cols-3 mt-32 md:grid-cols-4 gap-5">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <Skill key={skill._id} skill={skill} direction={-200} />
          ))}
          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <Skill key={skill._id} skill={skill} direction={200} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-32 md:grid-cols-4 gap-5">
          {skills?.map((skill) => (
            <Skill key={skill._id} skill={skill} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Skills;
