
// import fruit from "./assets/fruit.jpg"

// import "./App.css";
import colors from "./Course.module.css";
function Course({name,image,content}){
    // const Styles={
    //     backgroundColor:"yellow",
    //     border:"2px solid black",
         
    //      padding:"10px",
    //      textAlign:"center",
    //      display:"inline-block"

    // }
     return(
        <>
        <div className={colors.box}  >
            <img className={colors.fruit} src={image} ></img>
            <h3>{name}</h3>
            <p>{content}</p>
        </div>
        </>
    )
}

// Course.PropTypes={
//    user:PropTypes.string,
//    content:PropTypes.string,
//    image:PropTypes.string
// }

export default Course;


