import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll } from "framer-motion";
import Project from './Project';
import Marquees from './Marquees';



function Projects() {

  const [pos, setPos] = useState(0);
  const [hovered, setHovered] = useState(null);

  const [data, setData] = useState([
    {title: "FlameDesk", description: "FlameDesk is a powerful and sleek productivity web application designed to streamline your daily workflow and keep you motivated. Built with the MERN stack, it offers task management, goal tracking through challenges, and a personalized experience wrapped in a stunning glassmorphism UI.", gitHub: "https://github.com/nickyogi/FlameDesk", preview : "https://flamedesk.onrender.com/", live : true, case : true, hover : "group-hover/projects:bg-[#1F1E24]", gradient: "bg-gradient-to-r from-[#870FDB] to-[#1A0A39]", isGradient: false },
    {title: "FlickQuery", description: "FlickQuery is a sleek and modern web application designed for effortless exploration of movies, TV shows, and celebrities. Built with powerful technologies like React and Redux, it delivers an intuitive and seamless content discovery experience.", gitHub: "https://github.com/nickyogi/FlickQuery", preview : "https://flick-query.vercel.app/", live : true, case : true, hover : "group-hover/projects:bg-[#1F1E24]",  gradient: "bg-gradient-to-r from-[#014574] to-[#011030]", isGradient: false},
    {title: "Webora", description: "Digital Agency Website Welcome to the Webora - Digital Agency website project! This project aims to the design and functionality of the creative website using React-JS. Additionally, it utilizes Locomotive Scroll and GSAP for smooth scrolling effects, and framer-motion for animations.", gitHub: "https://github.com/nickyogi/Webora---Digital-Agency", live : false, case : true, hover : "group-hover/projects:bg-[#1F1E24]", gradient: "bg-gradient-to-r from-[#3bb9cd] to-[#5956D4]", isGradient: false },
    {title: "Obys", description: "Obys Agency is a responsive and visually engaging clone of the Obys Agency website, recreated using modern front-end technologies. It replicates the clean aesthetic, creative layout, and award-winning design feel of the original site.", gitHub: "https://github.com/nickyogi/Obys-Clone", preview : "https://nickyogi.github.io/Obys-Clone/", live : true, case : true, hover : "group-hover/projects:bg-[#1F1E24]", gradient: "bg-gradient-to-r from-[#6D00F2] to-[#2C005C]", isGradient: false},
    {title: "Ecomm", description: "A feature-rich, fully responsive eCommerce web application built with React and Vite. This project serves as a modern storefront where users can view, add, edit, delete, and enquire about products. It includes essential features such as image uploads, product filtering by category, and email-based enquiries, making it ideal for small to medium-sized online retail businesses.", gitHub: "https://github.com/nickyogi/Ecommerce-site---AMRR-TechSols-Assignment", preview : "https://ecommerce-site-amrr-tech-sols-assig.vercel.app/", live : true, case : true, hover : "group-hover/projects:bg-[#1F1E24]", gradient: "bg-gradient-to-r from-[#ED0097] to-[#9100C0]", isGradient: false },
    {title: "Dribble", description: "Clone is inspired by Dribbble’s attention to visual hierarchy, micro-interactions, and fluid user experience. From the animated card transitions to hover effects and grid layouts, the goal is to reflect the creativity and polish that make Dribbble stand out in the design community.", gitHub: "https://github.com/nickyogi/Minor-Projects/tree/main/Dribble_Responsive_Website", live : false, case : true, hover : "group-hover/projects:bg-[#1F1E24]", gradient: "bg-gradient-to-r from-[#F4C100] to-[#F04E00]", isGradient: false },
  ]);

  const isMobile = window.innerWidth <= 425;



  const videoRefs = useRef([]);

  const {scrollYProgress} = useScroll();

  const mover = (count) => {
    
  };

  const active = (index) => {
    const updatedData = data.map((item, i) => {
      if(i === index) {
        return {...item, isGradient : true}
      } else {
        return {...item, isGradient : false}
      }
    });
    setData(updatedData);
  }

  const click = (count) => {
    setHovered(count);
    active(count);
    setPos(isMobile ? (32.4 * count - (count * 0.1) ) : (18 * count ) );
  }

  scrollYProgress.on("change", (scrollVal) => {

    let val = Math.floor(scrollVal*100);

    if(isMobile) {
      if (val >= 25 && val < 39) {
        setPos(32.4 * 0 - 0 * 0.1);
        setHovered(0);
        active(0);
      } else if (val >= 39 && val < 46) {
        setPos(32.4 * 1 - 1 * 0.1);
        setHovered(1);
        active(1);
      } else if (val >= 46 && val < 53) {
        setPos(32.4 * 2 - 2 * 0.1);
        setHovered(2);
        active(2);
      } else if (val >= 53 && val < 60) {
        setPos(32.4 * 3 - 3 * 0.1);
        setHovered(3);
        active(3);
      } else if (val >= 60 && val < 67) {
        setPos(32.4 * 4 - 4 * 0.1);
        setHovered(4);
        active(4);
      } else if (val >= 67) {
        setPos(32.4 * 5 - 5 * 0.1);
        setHovered(5);
        active(5);
      }    
    } else {
      if (val >= 40 && val < 53) {
  setPos(18 * 0);
  setHovered(0);
  active(0);
} else if (val >= 53 && val < 59) {
  setPos(18 * 1);
  setHovered(1);
  active(1);
} else if (val >= 59 && val < 63) {
  setPos(18 * 2);
  setHovered(2);
  active(2);
} else if (val >= 63 && val < 70) {
  setPos(18 * 3);
  setHovered(3);
  active(3);
} else if (val >= 70 && val < 75) {
  setPos(18 * 4);
  setHovered(4);
  active(4);
} else if (val >= 75) {
  setPos(18 * 5);
  setHovered(5);
  active(5);
}
    }
    
  });

    useEffect(() => {
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === hovered) {
            video.play();
          } else {
            video.pause();
            video.currentTime = 0;
          }
        }
      });
    }, [hovered]);
    
  return (
    <div className='relative w-full bg-inherit pt-10 sm:pt-20' >

        { data.map((val, index) => (
            <Project key={index} val={val} count={index} click={click} mover={mover} />
        ))}
        <div className='absolute w-full h-full sm:mt-20 top-[8.5rem] sm:top-0 pointer-events-none'>
          <motion.div 
          initial={{ y: pos, x: "-50%" }}
          animate={{y: pos + "rem"}}
          transition={{ease: [0.76, 0, 0.24, 1], duration : 0.5}}
          className='absolute w-[22rem] h-[12rem] sm:h-[18rem] sm:w-[24rem] left-[49vw] sm:left-[45vw] overflow-hidden -translate-x-[50%]  pointer-events-none'>
            {[
            "flamedesk.mp4",
            "flickquery.mp4",
            "webora.mp4",
            "obys.mp4",
            "ecomm.mp4",
            "dribble.mp4",
          ].map((src, index) => (
            <motion.div
              key={index}
              animate={{ y: -pos + "rem" }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
              className="w-[22rem] h-[12rem] sm:h-full sm:w-full  rounded-2xl mb-[20.3rem] sm:mb-0 overflow-hidden"
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                muted
                loop
                src={`/videos/${src}`}
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          ))}
          </motion.div>
        </div>
        <Marquees />
    </div>
  )
}

export default Projects;