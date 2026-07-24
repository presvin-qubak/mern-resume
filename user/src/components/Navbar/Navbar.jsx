import React, { useState } from "react";
import "./Navbar.css";

import { Menu, X } from "lucide-react";

import { motion } from "framer-motion";


const Navbar = () => {


const [menuOpen, setMenuOpen] = useState(false);



const closeMenu = () => {

    setMenuOpen(false);

};



return (

<motion.nav
className="navbar"

initial={{ y:-100, opacity:0 }}

animate={{ y:0, opacity:1 }}

transition={{ duration:0.8 }}

>


<div className="logo">

PRESVIN QUBAK

</div>




<ul className={menuOpen ? "nav-links active" : "nav-links"}>


<li>
<a href="#home" onClick={closeMenu}>
Home
</a>
</li>


<li>
<a href="#about" onClick={closeMenu}>
About
</a>
</li>


<li>
<a href="#skills" onClick={closeMenu}>
Skills
</a>
</li>


<li>
<a href="#projects" onClick={closeMenu}>
Projects
</a>
</li>


<li>
<a href="#contact" onClick={closeMenu}>
Contact
</a>
</li>



<li>

<button

className="resume"

onClick={()=>{

window.open("/Presvin_Resume.pdf","_blank");

closeMenu();

}}

>

Resume

</button>


</li>



</ul>





<button

className="menu-icon"

onClick={()=>setMenuOpen(!menuOpen)}

aria-label="Toggle Menu"

>

{

menuOpen ?

<X size={32}/> :

<Menu size={32}/>

}

</button>




</motion.nav>

);

};


export default Navbar;