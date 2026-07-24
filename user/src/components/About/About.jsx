import React from "react";
import "./About.css";
import { motion } from "framer-motion";


const About = () => {


  const info = [
    {
      number:"10+",
      text:"Projects"
    },
    {
      number:"1+",
      text:"Years Learning"
    },
    {
      number:"5+",
      text:"Technologies"
    }
  ];



  return (

    <section id="about" className="about">


      <motion.div

        className="about-container"

        initial={{opacity:0, y:80}}

        whileInView={{opacity:1, y:0}}

        transition={{duration:0.8}}

        viewport={{once:true}}

      >



        <motion.div

          className="about-image"

          initial={{opacity:0, x:-80}}

          whileInView={{opacity:1, x:0}}

          transition={{duration:0.8}}

          viewport={{once:true}}

        >


          <img

            src="/profile.jpeg"

            alt="profile"

          />


        </motion.div>





        <motion.div

          className="about-content"

          initial={{opacity:0, x:80}}

          whileInView={{opacity:1, x:0}}

          transition={{duration:0.8}}

          viewport={{once:true}}

        >



          <h2>

            About Me

          </h2>




          <p>

            I am a passionate MERN Stack Developer
            who creates modern, responsive and
            user-friendly web applications.

          </p>




          <p>

            I work with React.js, JavaScript,
            Node.js, Express.js and MongoDB to
            build full-stack applications.

          </p>





          <div className="about-info">


            {
              info.map((item,index)=>(


                <motion.div

                  key={index}

                  initial={{opacity:0, y:40}}

                  whileInView={{opacity:1, y:0}}

                  transition={{
                    duration:0.5,
                    delay:index * 0.2
                  }}

                  viewport={{once:true}}

                >


                  <h3>

                    {item.number}

                  </h3>


                  <span>

                    {item.text}

                  </span>


                </motion.div>


              ))
            }



          </div>




        </motion.div>



      </motion.div>



    </section>

  );

};


export default About;