import { useEffect,useState } from "react";
function Example(){
  const[count,setcount]=useState(0);

  useEffect(()=>{
    //componentdidmount
    console.log("component mounted");
    //componentunmount
    return()=>{
        console.log("component unmounted");
    }
  },[]);

  //componentwillupdate
  useEffect(()=>{
    if(count !==0){
        console.log("count updated");
        console.log("count is "+count);
    }
  },[count]);

  return(
    <>
    <button onClick={()=>setcount(count+1)}>Add</button>
    </>
  )
}

export default Example;