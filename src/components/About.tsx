import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
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
        src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque tenetur
          doloribus porro temporibus soluta, ad ut dolore, sint atque hic a illo
          corrupti laborum esse praesentium aut provident eum placeat! Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Iusto, temporibus
          quasi minus voluptates officia, tempora odio doloremque molestias
          accusamus et amet illo perferendis maxime quia beatae quidem!
          Voluptates, eius sit? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aut dolorem numquam fuga sit sequi esse ipsam error
          natus minus, totam praesentium aperiam inventore vitae est amet illum
          optio quis harum!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
