import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";


const Skills = () => {


  const skills = [

    {
      name:"HTML",
      icon:"🌐"
    },

    {
      name:"CSS",
      icon:"🎨"
    },

    {
      name:"JavaScript",
      icon:"⚡"
    },

    {
      name:"React JS",
      icon:"⚛️"
    },

    {
      name:"Node JS",
      icon:"🟢"
    },

    {
      name:"Express JS",
      icon:"🚀"
    },

    {
      name:"MongoDB",
      icon:"🍃"
    },

    {
      name:"Git & GitHub",
      icon:"🔗"
    }

  ];



  return (

    <section id="skills" className="skills">


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

        My Skills

      </motion.h2>





      <motion.div

        className="skills-container"

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
              staggerChildren:0.15
            }

          }

        }}

      >



        {
          skills.map((skill,index)=>(


            <motion.div

              className="skill-card"

              key={index}


              variants={{

                hidden:{

                  opacity:0,

                  y:60

                },


                visible:{

                  opacity:1,

                  y:0

                }

              }}


              whileHover={{

                scale:1.08

              }}


              transition={{

                duration:0.4

              }}


            >



              <div className="skill-icon">

                {skill.icon}

              </div>



              <h3>

                {skill.name}

              </h3>



            </motion.div>


          ))
        }



      </motion.div>



    </section>

  );

};


export default Skills;