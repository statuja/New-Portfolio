import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const items = [
  {
    id: 1,
    title: "myNorway",
    img: "/myNorway.png",
    desc: "myNorway marks my initial foray into web development through the DCI Further Training program as a Web & Software Developer.This personal blog stems from my inspiring journey to Norway, driving the inception of this project. To craft this webpage, I used HTML and CSS for the development.",
    demoLink: "https://statuja.github.io/travel_blog-myNorway/",
    githubLink: "https://github.com/statuja/travel_blog-myNorway",
  },
  {
    id: 2,
    title: "Pokemon lite",
    img: "/pokemon.jpg",
    desc: "This project serves as a practical exercise in applying programming concepts to create a simple interactive simulation. It also provides a foundation that can be built upon for more complex projects and serves as a starting point for learning game development or simulation programming.",
    demoLink: "https://github.com/statuja/text-based_RPG-Pokemon_lite",
    githubLink: "https://github.com/statuja/text-based_RPG-Pokemon_lite",
  },
  {
    id: 3,
    title: "Sunrise Retreat",
    img: "/sunrise.png",
    desc: "The Sunrise Retreat website is the team's first joint project, developed by three junior developers during our DCI Further Training for Web & Software Development. This group project showcases our skills in CSS/SASS/Bootstrap. Beyond improving our technical skills, it has provided a platform for us to work cohesively as a team, refine our soft skills, and seamlessly collaborate using GitHub. We decided to create a website for a beautiful retreat place in Sri Lanka, inspired by our shared love for nature and stunning images of the country.",
    demoLink: "https://statuja.github.io/hospitality_platform-Sunrise_Retreat/",
    githubLink: "https://github.com/statuja/hospitality_platform-Sunrise_Retreat",
  },
  {
    id: 4,
    title: "HugStore",
    img: "/e-commerce.png",
    desc: "This e-commerce website, was developed during my training as a web developer at DCI (Digital Career Institute). The project showcases my skills in front-end development, utilizing React with Vite as the build tool. Notably, this project does not currently have a backend and serves as a practice exercise by following tutoring on YouTube.",
    demoLink: "https://hug-store-e-commerce-ii73bnm15-statuja.vercel.app/",
    githubLink: "https://github.com/statuja/e-commerce-HugStore",
  },
  {
    id: 5,
    title: "BeyondWork",
    img: "/beyondwork.png",
    desc: "BeyondWork is a MERN stack group project, developed by four junior developers as a part of the Final Project of the DCI Further Training as a Web & Software Developer. Beyond Work is a platform for employees to connect on a personal level.",
    demoLink: "https://beyondworkclient.onrender.com/",
    githubLink: "https://github.com/statuja/social_app-BeyondWork",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    //offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="linksContainer">
            <button>See Demo</button>
            <a href="" >
              <GitHubIcon style={{height: "30px", width: "30px"}}/>
            </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
