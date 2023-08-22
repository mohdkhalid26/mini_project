import React, { useState } from 'react'
import "./ListType.css"
import all from "../listgrid/images/clipboard (1) 1.svg"
import work from "../listgrid/images/briefcase (1) 1.svg"
import study from "../listgrid/images/book 1.svg"
import travel from "../listgrid/images/world 1.svg"
import shopping from "../listgrid/images/online-shopping 1.svg"
import home from "../listgrid/images/house 1.svg"
import { useNavigate } from 'react-router'

function ListType() {
    const navigate = useNavigate()
const [data] = useState([

{
    heading:"All",
    task:"Task 20",
    logo:all,
    func:func1
},
{
    heading:"Work",
    task:"Task 5",
    logo:work,
    func:func2
},
{
    heading:"Study",
    task:"Task 20",
    logo:study,
    func:func3
},
{
    heading:"Travel",
    task:"Task 5",
    logo:travel,
    func:func4
},
{
    heading:"Shopping",
    task:"Task 20",
    logo:shopping,
    func:func5
},
{
    heading:"Home",
    task:"Task 5",
    logo:home,
    func:func6
}
]);

function func1 () {
    navigate("/alltask")
}
function func2 () {
    navigate("/Work")
}
function func3 () {
    navigate("/Study")
}
function func4 () {
    navigate("/Travel")
}
function func5 () {
    navigate("/Shopping")
}
function func6 () {
    navigate("/Home")
}


  return (
    <div className='grid'>
{
    data?.map((todo,index)=>{
        return(

<div onClick={todo.func} className={`div${index+1}`} key={index+1}>
    <span className={`span${index+1}`}>

    <img className={`img${index+1}`} src={todo.logo} alt={todo.logo} srcSet="" />
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