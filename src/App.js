import React from 'react'
import "./App.css"
import List from './components/list/List'
import AllTask from './pages/allTask/AllTask'
import  Work from "./pages/work/Work"
import Study  from "./pages/study/Study"
import Travel  from "./pages/travel/Travel"
import Shopping  from "./pages/shopping/Shopping"
import   Home from "./pages/home/Home"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddAllTask from './pages/addtask/AddAllTask'
import AddTask from './pages/addtask/AddTask'
function App() {
  
  return (
    <div className="body">
      

<BrowserRouter>
<Routes>


    <Route exact path='/' element={<List/>} />
    <Route exact path='/alltask' element={<AllTask/>} />
    <Route exact path='/Work' element={<Work/>} />
    <Route exact path='/Study' element={<Study/>} />
    <Route exact path='/Travel' element={<Travel/>} />
    <Route exact path='/Shopping' element={<Shopping/>} />
    <Route exact path='/Home' element={<Home/>} />
    <Route exact path='/addalltask' element={<AddAllTask/>} />
    <Route exact path='/addtask' element={<AddTask/>} />

</Routes>
</BrowserRouter>
      
    </div>
  )
}

export default App