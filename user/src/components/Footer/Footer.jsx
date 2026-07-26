import React from "react";
import "./Footer.css";


const Footer = () => {


  return (

    <footer className="footer">


      <h3>
        PRESVIN QUBAK
      </h3>


      <p>
        MERN Stack Developer
      </p>


      <div className="social-links">


        <a href="https://github.com/presvin-qubak/" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>


        {/* <a href="#">
          LinkedIn
        </a> */}


        <a href="mailto:presvin10@gmail.com">
          Email
        </a>


      </div>


      <p className="copyright">

        © 2026 Presvin. All Rights Reserved.

      </p>


    </footer>

  );

};


export default Footer;