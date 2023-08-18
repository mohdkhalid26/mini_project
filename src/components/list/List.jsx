import React from 'react'
import "./List.css"
import Navbar from '../navbar/Navbar'
import ListType from '../listgrid/ListType'
function List() {
  return (
    <div className='listdiv'>

<Navbar/>
<div className="heading">
    <h1>TODO LIST</h1>
</div>
<ListType/>
    </div>
  )
}

export default List