// function Home(){
//     return(
//         <div className="card">
//             <p className="cookieHeading">We use cookies.</p>
//             <p className="cookieDescription">This website uses cookies to ensure you get the best experience on our site.</p>

//             <div className="buttonContainer">
//                 <button className="acceptButton">Allow</button>
//             <button className="declineButton">Decline</button>
//             </div>
//         </div>
//     )
// }
// export default Home;

import React from "react";
import {useState} from 'react';

const StateX=()=>{
    const [visible,setVisible] = useState(true);
    const toggle=()=>{
        setVisible(!visible)
    }
    setTimeout(()=>{
        setVisible(true)
    },5000)
    return(
        <>
        {visible ? (<button onClick={toggle}>Welcome</button>):
        (<button onClick={toggle}>Good Bye</button>)}
        </>
    )
}
export default StateX;