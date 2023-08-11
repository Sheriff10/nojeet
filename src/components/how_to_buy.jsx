import React from "react";

export const HTB = () => {
   const htbFunc = (img, title, text, tClass) => {
      return { img, title, text, tClass };
   };
   const htbArr = [
      htbFunc(
         "h1.png",
         "Create  a Wallet",
         "Download Metamask or your wallet of choice that supports Arbitrum One. Desktop users, download the google chrome extension by going to metamask.io.",
         "tXn"
      ),
      htbFunc(
         "bscscan.png",
         "Fund your wallet with BASE ETH",
         "Fund your wallet with base by bridging from eth",
         "tXp"
      ),
      htbFunc(
         "pkswap.png",
         "Purchase $Jeets using Rocketswap",
         "Navigate to https://rocketswap.exchange/ and ensure you are on BASE mainnet.",
         "tXn"
      )
   ];
   return (
      <div className="htb bg-pr" id="buy">
         <div className="container-fluid">
            <div className="htb-head text-center">
               <h1>how to buy</h1>
            </div>
            <div className="row">
               {htbArr.map((i, index) => (
                  <div className={`col-12 ${i.tClass}`} key={index}>
                     <div className="container">
                        <div className="htb-con row">
                           <div className="htb-img col-lg-2 col-12">
                              <img src={i.img} alt="Mpepe" />
                           </div>
                           <div className="htb-text col-lg-10 col-12">
                              <div className="s-wrp">
                                 <span>{i.title}</span> <br />
                              </div>
                              <small>{i.text}</small>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
