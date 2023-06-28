import React from "react";

export default function Tokenomics() {
   return (
      <div className="tokenomics bg-pr text-light">
         <div className="container">
            <div className="tk-head text-center p-3">
               <h1>Tokenomics</h1>
            </div>
            <div className="tk-body">
               <div className="row">
                  <div className="col-lg-6 col-12">
                     <div className="tk-body-text">
                        <div className="tk-text-head mb-2"><h3>Token Supply: <br /> 420,690,000,000,000</h3></div> 
                        <div className="wrap">
                           <p>No Taxes, No Bullshit. It’s that simple.</p>{" "}
                           <br />
                           <p>
                              93.1% of the tokens were sent to the liquidity
                              pool, LP tokens were burnt, and contract is
                              renounced. The remaining 6.9% of the supply is
                              being held in a multi-sig wallet only to be used
                              as tokens for future centralized exchange
                              listings, bridges, and liquidity pools. This
                              wallet is easily trackable with the ENS name
                              “pepecexwallet.eth”
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="tk-img-con text-right">
                        <img src="./tkimg.png" alt="jeet" className="img-fluid" />
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
