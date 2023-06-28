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
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Perferendis similique quos dignissimos modi
                           iste voluptatum unde? Dolor aspernatur dolore fugit
                           explicabo, aliquam eveniet consectetur reiciendis
                           possimus et sint, corporis dolorem.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
