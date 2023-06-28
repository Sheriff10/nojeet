import React from "react";

export default function About() {
   return (
      <div className="about bg-pr">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-6 col-12">
                  <div className="img-con text-center">
                     <img src="./pepe.png" alt="jeet" className="img-fluid" />ƒ
                  </div>
               </div>
               <div className="col-lg-6 col-12">
                  <div className="abt-text text-light">
                     <div className="abt-text-head text-center">
                        <h1>
                           <b>about</b>
                        </h1>
                     </div>
                     <div className="abt-text-body ">
                        <p>
                           Notforjeets ($JEETS) is a meme token designed with a
                           unique purpose - to teach jeets a lesson and have a
                           little fun along the way. We are tired of Jeets and
                           have decided to create a token Notforjeets (JEETS)
                           We're a group of passionate individuals committed to
                           creating an exciting community-driven project.

                           <br /> <br />
                           TOKENOMICS: Supply: 999,000,000,000,000,000 JEETS
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
