import Course from "./Course.jsx";
import fruit from "../assets/fruit.jpg";
function Courselist(){
    const courses=[
        {
            image:fruit,
            name:"sayed",
            content:"this is course1"
        },

          {
            image:fruit,
            name:"pooja",
            content:"this is course1"
        },
          {
            image:fruit,
            name:"priya",
            content:"this is course1"
        }
    ]
    return(
        courses.map((el)=>
        <Course image={el.image} name={el.name} content={el.content}/>)
    )

}

export default Courselist;