import { useState } from "react";
function Counter(){
const[counting,setCounting]=useState(0);
return(
    <>
    <h2>count is {counting }</h2>
    <button onClick={()=>setCounting(counting+1)}>Increase</button>
    </>
)
}

export default Counter;