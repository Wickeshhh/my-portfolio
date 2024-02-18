"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [  
  {
    id: 1,
    title: "Portfolio Design inspiration",
    description: "Designed a portfolio website for my developer friend. A great experience in bringing it to life! Check the site at https://portfolio-final-saksham.vercel.app",
    image: "/images/portfolio-inspiration.png",
    tag: ["All", "Web"],
    gitUrl : "https://www.behance.net/gallery/188762027/PORTFOLIO-DESIGN",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "'Prime Hydration' Site Redesign",
    description: "Attempted to redesign drinkprime.com by Logan Paul, made simple UI changes to my preference.",
    image: "/images/primeredesign.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/190024457/PRIME-REDESIGN-%28drinkprimecom%29",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Prime Redesign (Mobile View)",
    description: "Mobile UI for the Prime Redesign, implementing the roulette used in smaller screens with minor adjustments.",
    image: "/images/primemobile.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.behance.net/gallery/190067137/PRIME-REDESIGN-(MOBILE-VIEW)",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Travis Scott 3d Prototype",
    description: "Created this for one of my favourite artists. This 3d transition effect and design is inspired by ux.howardle.",
    image: "/images/travismockup.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/189737849/Travis-Scott-3D-Slide-(howardlee-inspo)",
    previewUrl: "/",
  },
  // {
  //   id: 5,
  //   title: "Sneaker page",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/shoes.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  {
    id: 6,
    title: "ATM Simulation",
    description: "This was one of my first ever projects made in Figma. Created a simulation for an ATM interface, paired with proper navigation and UI. It was my Semester project in college.",
    image: "/images/atm.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/189740479/ATM-SYSTEM-UI-PROTOTYPE",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Kuffee - Order your Coffee",
    description: "KUFFEE is an inspired Cafe website, to order coffee with neat interfaces. Also includes Mobile UI.",
    image: "/images/kuffee.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://www.behance.net/gallery/189561607/KUFFEE-CAFE-DESIGN-CONCEPT-by-Akhilesh-P-S",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Wildlife and Tourism site design",
    description: "One of my early stage projects, where I made use of User Navigation and Sliders.",
    image: "/images/W&T.png",
    tag: ["All", "Web"],
    gitUrl: "https://www.behance.net/gallery/182843547/Wildlife-and-Tourism-Slide-IDEAS",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "App Redesign - NetClan",
    description: "Project Case: Tasked to redesign any 5 screens of this networking app called NetClan. My observations helped me improve the understanding of creating simpler and effective UI.",
    image: "/images/compare.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.behance.net/gallery/190073277/Redesigning-Networking-App",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Pharma App",
    description: "Designed a pharmaceutical app interface, which allows to book appointments with doctors and also order medicines online. Online ordering interface very coming soon!",
    image: "/images/pharma-mockup.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://www.behance.net/gallery/191803761/PharmaMedical-App",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-green-500 mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <p className="text-center text-2xl font-regular text-white mt-3 mb-8 md:mb-10">
        Here are my projects and some design challenges I have worked on. Only looking to get better day by day! <br /> Updating this section regularly! Most projects are in my Behance. <br />Reach out for the figma link!
      </p>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;


// ALTERNATIVE OPTION FOR PROJECT SECTION 

// import React from 'react';
// import {motion} from 'framer-motion';
// import { fadeIn } from '../variants';
// import Image from 'next/image';

// const ProjectsSection = () => {
//   return (
//     <section className="section" id="ProjectsSection">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row gap-x-10">
//           <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
//             <div>
//               <h2 className="text-3xl font-semibold text-green-500 mb-5">
//                 My Latest Work
//               </h2>
//               <p className="text-xl max-w-sm mb-16">
//                 Here are my projects and some design challenges I have worked
//                 on. Only looking to get better day by day! <br /> Updating this
//                 section regularly! View all the shown projects in my Behance. <br />
//                 Reach out for the figma link!
//               </p>
//               {/* <button className='btn btn-sm'>View all projects</button> */}
//               <button className=" font-semibold px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-green-500 to bg-green-700 hover:bg-green-800 text-black">
//                 View in Behance
//               </button>
//             </div>
//             {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'> */}
//             <div className="group relative overflow-hidden border-2 border-green-500 rounded-x1">
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src="/images/kuffee.png"
//                 alt="kuffee site"
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-green-500">
//                   Designed a clean and attractive Coffee ordering site
//                 </span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3xl text-white">Coffee Shop</span>
//               </div>
//             </div>
//             {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'> */}
//             <div className="group relative overflow-hidden border-2 border-green-500 rounded-x1">
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src="/images/portfolio-inspiration.png"
//                 alt=""
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-green-500">
//                   Designing portfolio for bro!
//                 </span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3xl text-white">
//                   Portfolio Design Inspiration
//                 </span>
//               </div>
//             </div>
//           </div>
//           <div className="flex-1 flex flex-col gap-y-10">
//             {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'> */}
//             <div className="group relative overflow-hidden border-2 border-green-500 rounded-x1">
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src="/images/shoes.png"
//                 alt=""
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-green-500">
//                   Designed an interactive shoes selling site
//                 </span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3xl text-white">Sneakers site</span>
//               </div>
//             </div>
//             {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1'> */}
//             <div className="group relative overflow-hidden border-2 border-green-500 rounded-x1">
//               <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
//               <img
//                 className="group-hover:scale-125 transition-all duration-500"
//                 src="/images/wildlife.png"
//                 alt=""
//               />
//               <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
//                 <span className="text-green-500">
//                   Tourism + Widlife Safari concept design
//                 </span>
//               </div>
//               <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
//                 <span className="text-3xl text-white">
//                   Wildlife Tourism Site
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;
