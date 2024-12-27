import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";
// import { toast } from "react-toastify";
const Payment = ()=>{
  
    return(
        <div className="paysucess">
            <FcCheckmark className="font" /><br />
            <h3>Payment Sucess</h3>
            <button className="GotoHome"><Link to="/">Goto Home</Link></button>
            
        </div>
        
    )
}
export default Payment