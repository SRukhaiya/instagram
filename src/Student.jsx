function Student(props){
  if(props.loggedin==true && props.age<=18){
    return (
      <h2>your are logged in but you are not eligible </h2>
    )
  }
   if(props.loggedin==false && props.age>=18){
    return (
      <h2>your eligible but not logged in </h2>
    )
  }
  else{
   return(
    <h1>you are logged in</h1>
   )}
   
  // const isloggedin=true;
  // return(
  //   <h2>{props.isloggedin?"loggedin":"login first"}</h2>
  // )
}

export default Student;