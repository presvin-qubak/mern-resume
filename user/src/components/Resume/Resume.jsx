import React from "react";
import "./Resume.css";
import { motion } from "framer-motion";


const Resume = () => {


  return (

    <section 
      id="resume" 
      className="resume-section"
    >



      <motion.div

        className="resume-box"


        initial={{
          opacity:0,
          scale:0.8
        }}


        whileInView={{
          opacity:1,
          scale:1
        }}


        transition={{
          duration:0.8
        }}


        viewport={{
          once:true
        }}

      >





        <motion.h2

          initial={{
            opacity:0,
            y:-30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            delay:0.3
          }}

          viewport={{
            once:true
          }}

        >

          My Resume

        </motion.h2>







        <motion.p

          initial={{
            opacity:0
          }}

          whileInView={{
            opacity:1
          }}

          transition={{
            delay:0.5
          }}

          viewport={{
            once:true
          }}

        >

          Download my resume to know more about my
          skills, projects, education and experience.

        </motion.p>







        <motion.a

          href="/Presvin_Resume.pdf"

          download


          whileHover={{
            scale:1.08
          }}


          whileTap={{
            scale:0.95
          }}


        >


          <button className="download-btn">

            Download Resume

          </button>


        </motion.a>






      </motion.div>



    </section>

  );

};


export default Resume;