import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
 
 
const Projects = () => {
 
 
  const projects = [
 
    {
      title:"FreshNest E-Commerce website",
      description:
      "A full-stack grocery shopping application with product listing, cart system and user authentication.",
      tech:"React, Node.js, Express, MongoDB",
      image: `${import.meta.env.BASE_URL}grocery.jpeg`,
      link:"https://github.com/presvin-qubak/FreshNest123",
      "livedemo": "https://presvin-qubak.github.io/FreshNest123/"
    },
 
 
    {
      title:"Hotel Booking website",
      description:
      "A hotel booking platform with room management and booking features.",
      tech:"React, Express, MongoDB",
      image: `${import.meta.env.BASE_URL}hotel.jpeg`,
      link:"https://github.com/presvin-qubak/hotel",
      "livedemo": "https://presvin-qubak.github.io/hotel/"
    },
 
 
    {
      title:"Coffee Shop Website",
      description:
      "A modern responsive coffee shop website with menu and order sections.",
      tech:"React, CSS",
      image: `${import.meta.env.BASE_URL}coffee.jpeg`,
      link:"https://github.com/presvin-qubak/coffee_shop",
      "livedemo": "https://presvin-qubak.github.io/coffee_shop/"
    }
 
  ];
 
 
 
  return (
 
    <section id="projects" className="projects">
 
 
 
      <motion.h2
 
        initial={{
          opacity:0,
          y:-50
        }}
 
        whileInView={{
          opacity:1,
          
          y:0
        }}
 
        transition={{
          duration:0.8
        }}
 
        viewport={{
          once:true
        }}
 
      >
 
        My Projects
 
      </motion.h2>
 
 
 
 
 
      <motion.div
 
        className="project-container"
 
        initial="hidden"
 
        whileInView="visible"
 
        viewport={{
          once:true
        }}
 
        variants={{
 
          hidden:{
            opacity:0
          },
 
 
          visible:{
 
            opacity:1,
 
            transition:{
              staggerChildren:0.2
            }
 
          }
 
        }}
 
      >
 
 
 
      {
        projects.map((project,index)=>(
 
 
 
          <motion.div
 
            className="project-card"
 
            key={index}
 
 
            variants={{
 
              hidden:{
 
                opacity:0,
 
                y:80
 
              },
 
 
              visible:{
 
                opacity:1,
 
                y:0
 
              }
 
            }}
 
 
            whileHover={{
 
              y:-10
 
            }}
 
 
            transition={{
 
              duration:0.5
 
            }}
 
          >
 
 
 
 
            <motion.img
 
              src={project.image}
 
              alt={project.title}
 
 
              whileHover={{
 
                scale:1.08
 
              }}
 
 
              transition={{
 
                duration:0.4
 
              }}
 
            />
 
 
 
 
 
            <div className="project-content">
 
 
 
              <h3>
 
                {project.title}
 
              </h3>
 
 
 
 
              <p>
 
                {project.description}
 
              </p>
 
 
 
 
              <span>
 
                {project.tech}
 
              </span>
 
 
 
 
 
              <div className="project-buttons">
 
              <a href={project.livedemo} target="_blank" rel="noopener noreferrer">
                <motion.button
 
                  whileHover={{
                    scale:1.05
                  }}
 
                  whileTap={{
                    scale:0.95
                  }}
 
                >
 
                  Live Demo
 
                </motion.button>
 
              </a>
 
 
 
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <motion.button
 
                    className="github"
 
                    whileHover={{
                      scale:1.05
                    }}
 
                    whileTap={{
                      scale:0.95
                    }}
 
                  >
 
                    GitHub
 
                  </motion.button>
                </a>
 
 
 
              </div>
 
 
 
            </div>
 
 
 
 
          </motion.div>
 
 
 
        ))
      }
 
 
 
      </motion.div>
 
 
 
    </section>
 
  );
 
};
 
 
export default Projects;
 