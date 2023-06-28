import React from "react";
import { FaTelegram, FaTwitter } from "react-icons/fa";

export default function Contact() {
   return (
      <div className="contact text-center bg-pr text-light">
         <div className="container">
            <div className="c-head">
               <h1>CONTACT</h1>
            </div>{" "}
            <br />
            <div className="c-icon">
               <i>
                  <FaTwitter />
               </i>{" "}
               <i>
                  <FaTelegram />
               </i>
            </div>{" "}
            <br />
            <div className="c-body">
               <p>
                  We do not have any utility. Dev is poor and hates to borrow
               </p>
            </div>
         </div>
      </div>
   );
}
