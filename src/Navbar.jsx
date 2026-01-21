// // function Navbar(){
// //     return(
// //         <nav>
// //         <h1>Welcome to the coding word</h1>
// //        <button>Submit</button>
// //         </nav>
// //     )
// // }
// // export default Navbar;


// import React from 'react';
// import { useState } from 'react';

 
// class Navbar extends React.Component{
  
//     constructor(props){
//         super(props);
//         this.state={
//         count:1,
        
//         }
//       }

//     const[counting,setCounting]=useState(0); 
    
      
    
//     componentDidMount(){
//         console.log("element created and rendered");
//     }

//     componentDidUpdate(){
//         console.log("element updated");
//       }

//     componentWillUnmount(){
//         console.log("element deleted");
//     }

//    render(){
    
//     return (
//       <>
//       <p>count is {counting}</p>
//     <button onClick={()=>setCounting(counting+1)}>Increase count </button>

  
//     </>  
//     )
    

//    }
// }

// // Navbar.defaultProps={
// //    name:"random"
// // }

// export default Navbar ;