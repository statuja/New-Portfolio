import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror"
    },
  },
};

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Iryna Khartanovich</motion.h2>
          <motion.h1 variants={textVariants}>Fullstack Web Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Contact me</motion.button>
            <motion.button variants={textVariants}>
              Download my CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
      Code well live swell
      </motion.div>
      <div className="imageContainer">
        <img src="./hero.png" alt="" />
      </div>
    </div>
  );
};
