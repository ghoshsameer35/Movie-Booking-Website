import React from "react";

const Buttons = ({className,onClick,text})=>{


    return(
        <>
           
      <button className={className} onClick={onClick}>
        {text}
      </button>
    </>
       
    )
}
export default Buttons;
// className="login"> <Link to="/Login">logIn</Link