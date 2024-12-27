import React from "react";
import { Navigate } from "react-router-dom";

const Protectedrout = ({children} )=>{
    const user = localStorage.getItem("logedin")
if(!user){
    return(
<Navigate to={"/Login"}/>
)
}
else{
    return children
}

}

export default Protectedrout


// const Protected = ({ children }) => {
    // const auth = localStorage.getItem("loggedIn")
//     if (!auth) {
//         return <Navigate to="/login" replace />
//     }
//     return children
// }

// export default Protected