import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
   const toggleMenu = () => {
      document.querySelector(".menu-con").classList.toggle('active-menu')
   }
   return (
      <div className="header text-light">
         <div className="container">
            <div className="row align-items-center">
               <div className="col">
                  <div className="logo-con d-flex align-items-center">
                     <img src="./n.png" alt="jeet" className="img-fluid" /> <span className="ms-3 fs-1">JEETS</span>
                  </div>
               </div>
               <div className="col-6">
                  <div className="menu-con">
                     <ul>
                        <div className="x text-right">
                           <span onClick={toggleMenu}>X</span>
                        </div>
                        <a href="#" onClick={toggleMenu} >Home</a>
                        <a href="#" onClick={toggleMenu}>About</a>
                        <a href="#" onClick={toggleMenu}>How to buy</a>
                        <a href="#" onClick={toggleMenu}>Tokenomics</a>
                        <a href="#" onClick={toggleMenu}>Roadmap</a>
                     </ul>
                  </div>
               </div>
               <div className="col">
                  <div className="btn-con text-right">
                     <button className="btn btn-lg bg-yellow px-4">Buy now </button>
                     <i className="bar" onClick={toggleMenu}>
                        <FaBars />{" "}
                     </i>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
