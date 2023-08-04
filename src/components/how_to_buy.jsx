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
         "Fund your wallet with BSC",
         "Have some BSC (binance smart chain) token. $Jeet will be launching on bsc chain. you need BSC to purchase the token on a DEX (Pancakeswap).",
         "tXp"
      ),
      htbFunc(
         "pkswap.png",
         "Purchase $Jeets using Pancakeswap",
         "Navigate to Pancakeswap.finance and ensure you are on BSC mainnet. Use V2 to buy.",
         "tXn"
      ),
      htbFunc(
         "n.png",
         "Switch BSC for $Jeet",
         "Swap BSC for $Jeet on the V2 exchange , if the token doesn’t appear copy paste the contract.There is Zero Tax so there is no worry for specific slippage, although you may have to use slippage during market volatility.",
         "tXp"
      ),
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
