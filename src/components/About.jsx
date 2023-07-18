import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constans";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ title }) => { // Add the 'title' parameter
  return (
    <p>{title}</p>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="m-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
      >
        Meet a highly skilled programmer with a passion for Java programming and the Spring framework. With a comprehensive understanding of PHP, CSS, HTML, and JavaScript, they possess a diverse skill set. Currently, they are exploring the world of React and are enthusiastic about learning more in this field. Additionally, their proficiency extends to C# programming, and they are well-versed in programming with C, C++, and Bash. With such a wide range of expertise, they are a valuable asset to any development team and are always eager to take on new challenges in the world of software development.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} title={service.title} /> // Add the 'title' prop
        ))}
      </div>
    </>
  );
};

export default About;
