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
         "h2.png",
         "Bridge ETH over onto Arbitrum",
         "Have some ETH on L1 / Ethereum Mainnet, swap it on a bridge onto Arbitrum You can also buy ETH on Arbitrum directly on exchanges like Binance and Crypto.com.",
         "tXp"
      ),
      htbFunc(
         "h3.png",
         "Purchase $MPEPE using camelot",
         "Navigate to Camelot and ensure you are on Arbitrum (not L1 / Ethereum Mainnet). Use Camelot V2 to buy.",
         "tXn"
      ),
      htbFunc(
         "h4.png",
         "Switch ETH for $MPEPE",
         "Swap Eth for MPEPE on the V2 exchange , if the token doesn’t appear copy paste the contract.There is Zero Tax so there is no worry for specific slippage, although you may have to use slippage during market volatility.",
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
                        <div className="htb-con">
                           <div className="htb-img">
                              <img src={i.img} alt="Mpepe" />
                           </div>
                           <div className="htb-text col-lg-10 ">
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
