import React, { useState } from 'react'
import "./ListType.css"
import all from "./clipboard (1) 1.svg"
import work from "./briefcase (1) 1.svg"
import study from "./book 1.svg"
import travel from "./world 1.svg"
import shopping from "./online-shopping 1.svg"
import home from "./house 1.svg"

function ListType() {
const [data] = useState([

{
    heading:"All",
    task:"Task 20",
    logo:all
},
{
    heading:"Work",
    task:"Task 5",
    logo:work
},
{
    heading:"Study",
    task:"Task 20",
    logo:study
},
{
    heading:"Travel",
    task:"Task 5",
    logo:travel
},
{
    heading:"Shopping",
    task:"Task 20",
    logo:shopping
},
{
    heading:"Home",
    task:"Task 5",
    logo:home
}
]);




  return (
    <div className='grid'>
{
    data?.map((todo,index)=>{
        return(

<div className={`div${index+1}`} key={index+1}>
    <span className={`span${index+1}`}>

    <img className={`img${index+1}`} src={todo.logo} alt="" srcset="" />
    </span>

<section className={`section${index+1}`}>
<h3 className={`h3${index+1}`}>{todo.heading}</h3>
<p className={`p${index+1}`}>{todo.task}</p>
</section>
</div>

        )
    })
}

    </div>
  )
}

export default ListType