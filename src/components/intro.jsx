import React from "react";

export default function Intro() {
   const imgArr = ["./tw.png", "./tg.png", "./pkswap.png", "./bscscan.png"];
   const links = ['https://twitter.com/Notforjeets?t=9_0pAXNHSpAUH7bpv5n1kQ&s=09', 'https://t.me/NFJEETS']
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
                           We are a group of degens who are here for the
                           enjoyment and community spirit. This project is
                           solely meant to teach jeets a lesson and bring
                           laughter to the BASE mainnet community.
                        </p>
                        <div className="img-con">
                           {imgArr.map((i, index) => (
                              <a href={links[index]}>
                                 <img src={i} alt="$Jeet" />
                              </a>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-12">
                  <div className="intro-img d-flex justify-content-center">
                     <img src="./jeets.png" alt="jeet" className="img-fluid" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
