import React from "react";

export default function Intro() {
   const imgArr = ["./tw.png", "./tg.png", "./pkswap.png", "./bscscan.png"];
   return (
      <div className="intro bg-pr">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8 col-12">
                  <div className="intro-text">
                     <div className="intro-text-head text-light">
                        <h1>$JEET</h1>
                     </div>
                     <div className="intro-text-body text-light">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Odio, aperiam a facilis ratione blanditiis,
                           officiis accusantium quaerat minima, quae optio
                           quidem quod debitis pariatur officia praesentium
                           laboriosam. Vitae, accusantium mollitia?
                        </p>
                        <div className="img-con">
                           {imgArr.map((i, index) => (
                              <a href="#">
                                 <img src={i} alt="$Jeet" />
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-12">
                <div className="intro-img d-flex justify-content-center">
                    <img src="./pepe.png" alt="jeet" className="img-fluid" />
                </div>
               </div>
            </div>
         </div>
      </div>
   );
}
