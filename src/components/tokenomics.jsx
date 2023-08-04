import React from "react";
import { FaUikit } from "react-icons/fa";

export default function Tokenomics() {
   const tk = (name, percent, img) => {
      return { name, percent, img };
   };
   const tkArr = [
      [
         tk("Ethereum Reflection", "1%", "./tk1.jpeg"),
         tk("Token Burn", "1%", "./tk2.jpeg"),
         tk("Transaction Task", "5%", "./tk3.jpeg"),
         tk("Marketing", "3%", "./tk4.jpeg"),
         tk("Total Supply ", "1M $JEETs", "./tk5.jpeg"),
      ],
      [
         tk("Liquidity Pool", '30%'),
         tk("Automatic Burn", '30%'),
         tk("CEX Listing", '10%'),
         tk("Airdrop", '30%')
      ]
   ];
   return (
      <div className="tokenomics bg-pr text-light">
         <div className="container">
            <div className="tk-head d-flex p-3">
               <span className="bg-yellow px-3 rounded-pill fs-2 fw-bold">Tokenomics</span>
            </div>
            <div className="tk-body">
               <div className="row align-items-center">
                  <div className="col-lg-6 col-12">
                     <div className="row">
                        <div className="col-6">
                           {tkArr[0].map((i, index) => (
                              <div
                                 className="d-flex align-items-center"
                                 key={index}
                              >
                                 <img
                                    src={i.img}
                                    alt="Tokenomics"
                                    className=""
                                 />
                                 <div>
                                    <span className="fs-6 fw-bold">
                                       {i.name}.
                                    </span>{" "}
                                    <br />
                                    <span className="fs-4">{i.percent}</span>
                                 </div>
                              </div>
                           ))}
                        </div>
                        <div className="col-6">
                           {tkArr[1].map((i, index) => (
                              <div
                              className="d-flex align-items-center"
                              key={index}
                           >
                              <i className="fs-1 m-3" id={`ti${index}`}>
                                 <FaUikit />
                              </i>
                              <div>
                                 <span className="fs-6 fw-bold">
                                    {i.name}
                                 </span>{" "}
                                 <br />
                                 <span className="fs-3">{i.percent}</span>
                              </div>
                           </div>
                           ))}
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                     <div className="tk-img-con text-center">
                        <img src="./tk.png" alt="jeet" className="cir img-fluid" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
