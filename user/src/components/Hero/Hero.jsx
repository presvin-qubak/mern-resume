import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";


const Hero = () => {


  return (

    <section id="home" className="hero">


      <motion.div

        className="hero-content"

        initial={{opacity:0, x:-100}}

        animate={{opacity:1, x:0}}

        transition={{duration:1}}

      >


        <motion.h1

          initial={{opacity:0, y:30}}

          animate={{opacity:1, y:0}}

          transition={{delay:0.3, duration:0.8}}

        >

          Hi, I'm <span>PRESVIN QUBAK</span>

        </motion.h1>



        <motion.h2

          initial={{opacity:0, y:30}}

          animate={{opacity:1, y:0}}

          transition={{delay:0.5, duration:0.8}}

        >

          MERN Stack Developer

        </motion.h2>




        <motion.p

          initial={{opacity:0}}

          animate={{opacity:1}}

          transition={{delay:0.8, duration:0.8}}

        >

          I build modern, responsive web applications
          using React, Node.js, Express and MongoDB.

        </motion.p>




        <motion.div

          className="hero-buttons"

          initial={{opacity:0, y:50}}

          animate={{opacity:1, y:0}}

          transition={{delay:1, duration:0.8}}

        >


          <button>

            View Projects

          </button>



          <button className="resume-btn">

            Download Resume

          </button>


        </motion.div>



      </motion.div>





      <motion.div

        className="hero-image"

        initial={{opacity:0, scale:0.5}}

        animate={{opacity:1, scale:1}}

        transition={{duration:1}}

      >


        {/** debug: show resolved image URL so you can open it in browser */}
        {(() => {
          const imgSrc = `${import.meta.env.BASE_URL}profile.jpeg`;
          return (
            <>
              <motion.img
                src={imgSrc}
                alt="profile"
                whileHover={{scale:1.05}}
                transition={{duration:0.3}}
              />
              <p style={{fontSize:'12px',color:'#666',marginTop:'8px'}}>Image URL: {imgSrc}</p>
            </>
          );
        })()}


      </motion.div>



    </section>

  );

};


export default Hero;