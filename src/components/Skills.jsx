import React from "react";
import { motion, useScroll } from "motion/react";
import { useState } from "react";
import Stripes from "./Stripes";


const skillsData = [
  { img: "/Icons/html.png", title: "HTML", code: 2 },
  { img: "/Icons/css.png", title: "CSS", code: 2 },
  { img: "/Icons/javascript.png", title: "Javascript", code: 2 },
  { img: "/Icons/react.png", title: "React JS", code: 2 },
  { img: "/Icons/express.png", title: "Express JS", code: 3 },
  { img: "/Icons/nodejs.png", title: "Node JS", code: 3 },
  { img: "/Icons/mongodb.png", title: "MongoDB", code: 3 },
  { img: "/Icons/sql.png", title: "SQL", code: 3 },
  { img: "/Icons/wordpress.png", title: "Wordpress", code: 4 },
  { img: "/Icons/tailwind.png", title: "Tailwind", code: 2 },
  { img: "/Icons/photoshop.png", title: "Photoshop", code: 4 },
  { img: "/Icons/VScode.png", title: "VS Code", code: 4 },
];

function Skills() {
  const [skills, setSkills] = useState(skillsData);

  const fadeInAnimationVariants = {
    initial: {
      y: 60,
    },
    animate: (index) => ({
      y: 0,
      transition: {
        delay: 0.05 * index,
        ease: "easeIn",
      },
    }),
    transition: {
      delay: 0.02,
    },
  };

  const [tabs, setTabs] = useState([
    { title: "All", code: 1, isActive: false },
    { title: " Frontend Technologies", code: 2, isActive: false },
    { title: "Backend & Database", code: 3, isActive: false },
    { title: "Tools & Design", code: 4, isActive: false },
  ]);

  const [ImgData, setImgData] = useState([
    {
      url: "/skillsImages/skills1.jpg",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "/skillsImages/skills2.jpg",
      top: "55%",
      left: "52%",
      isActive: false,
    },
    {
      url: "/skillsImages/skills3.jpg",
      top: "60%",
      left: "45%",
      isActive: false,
    },
    {
      url: "/skillsImages/skills4.jpg",
      top: "65%",
      left: "54%",
      isActive: false,
    },
    {
      url: "/skillsImages/skills5.jpg",
      top: "70%",
      left: "45%",
      isActive: false,
    },
    {
      url: "/skillsImages/skills6.jpg",
      top: "75%",
      left: "48%",
      isActive: false,
    },
  ]);

  const setSkillsData = (c) => {
    let updatedSkills;
    let updatedTabs = tabs.map((item) => {
      if (item.code === c) {
        return { ...item, isActive: true };
      } else {
        return { ...item, isActive: false };
      }
    });

    setTabs(updatedTabs);

    if (c === 1) {
      setSkills(skillsData);
    } else {
      updatedSkills = skillsData.filter((item) => item.code === c);
      setSkills(updatedSkills);
    }
  };

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (latestScrollVal) => {
    function imageShow(arr) {
      setImgData((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) == -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(latestScrollVal * 100)) {
      case 8:
        imageShow([]);
        break;
      case 10:
        imageShow([0]);
        break;
      case 12:
        imageShow([0, 1]);
        break;
      case 14:
        imageShow([0, 1, 2]);
        break;
      case 16:
        imageShow([0, 1, 2, 3]);
        break;
      case 18:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 20:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div id="Skills" className="w-full -mt-10 h-auto">
      <div className="relative max-w-6xl mx-auto text-[30vw] text-white font-semibold leading-none tracking-tight select-none text-center">
        skills
        <div className="absolute Images w-full h-full top-0">
          {ImgData.map((item, index) => {
            return (
              item.isActive && (
                <img
                  key={index}
                  src={item.url}
                  alt="image"
                  className="absolute h-16 sm:h-52 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{
                    top: item.top,
                    left: item.left,
                    boxShadow: "0 0 10px rgb(255 255 255 / 0.2)",
                  }}
                />
              )
            );
          })}
        </div>
      </div>

      <div className=" gap-[1px] mx-10 sm:mx-72 grid grid-cols-4 rounded-full border-[1px] border-zinc-700 mt-16 overflow-hidden">
        {tabs.map((item, index) => (
          <button
            key={index}
            onClick={() => setSkillsData(item.code)}
            className={`px-2 py-1 text-[0.65rem] outline-none hover:text-purple-600 hover:bg-white ${
              item.isActive
                ? "text-white bg-purple-600 font-bolder"
                : "text-white"
            } font-semibold border border-r-[1px] border-zinc-700 transition-all duration-300`}
          >
            <h1>{item.title}</h1>
          </button>
        ))}
      </div>

      <div className="sm:min-h-[80vh] min-h-[60vh]">
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-10 sm:px-[5vw] pb-10 mt-10">
        {skills.map((item, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index + 1.5}
              className=" p-5 text-white rounded-lg h-fit border-[1px] border-zinc-700 shadow-sm cursor-pointer font-semibold hover:font-bold shadow-white hover:bg-zinc-800 hover:text-purple-600  hover:scale-110 duration-300"
            >
              <img
                src={item.img}
                className="h-16 w-16 sm:h-40 sm:w-40 mx-auto drop-shadow-2xl"
                alt="404 Image not found"
              />
              <h4 className="text-sm sm:text-base text-center mt-5">{item.title}</h4>
            </motion.div>
          );
        })}
      </div>
      </div>

      <Stripes />
    </div>
  );
}

export default Skills;
