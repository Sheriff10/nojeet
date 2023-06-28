import React from "react";

export default function Roadmap() {
   return (
      <div className="roadmap bg-pr text-light">
         <div className="container">
            <div className="r-head text-center p-3">
               <h1>Roadmap</h1>
            </div>
            <div className="row  text-center p-3 justify-content-center">
               <div className="col-lg-4 p-3 col-12 ">
                  <img src="./pepe.png" alt="jeet" />
               </div>
               <div className="col-lg-4 p-3 col-12">
                  <div className="r-wrap">
                     <span>Phase 1: Meme</span> <br />
                     <span>Phase 2: Vibe and HODL</span> <br />
                     <span>Phase 3: Meme Takeover</span>
                     <br />
                  </div>
               </div>
               <div className="col-lg-4 p-3 col-12">
                  <img src="./pepe.png" alt="jeet" />
               </div>
            </div>
            <div className="r-comment text-center p-3">
               All jokes aside, here is a rough sketch of $pepe path ahead. We
               dont wan’t <br /> to give everything away on day 1, Expect
               surprises along the way.
            </div>
            <div className="row">
               <div className="col-lg-4 col-12 p-2">
                  <div className="card-con">
                     <div className="c-head">
                        <h3><b>PHASE 1</b></h3>
                     </div>
                     <div className="c-body">
                        <ul>
                           <li>Launch</li>
                           <li>CoinGecko/Coinmarketcap Listings</li>
                           <li>1,000+ Holders</li>
                           <li>Get $PEPE Trending on twitter with our memetic power</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-12 p-2">
                  <div className="card-con">
                     <div className="c-head text-center">
                        <h3><b>PHASE 2</b></h3>
                     </div>
                     <div className="c-body">
                        <ul>
                           <li>Community Partnerships Pepe Times digital newsletter</li>
                           <li>Formation of token gated discord group, Pepe Palace, for holders, more details tba</li>
                           <li>CEX Listings 10,000+holders</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-12 p-2">
                  <div className="card-con">
                     <div className="c-head">
                        <h3><b>PHASE 3</b></h3>
                     </div>
                     <div className="c-body">
                        <ul>
                           <li>Pepe merch</li>
                           <li>Pepe Academy</li>
                           <li>Pepe Tools</li>
                           <li>T1 Exchange Listings 100,000+ holders</li>
                           <li>Meme Takeover</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
