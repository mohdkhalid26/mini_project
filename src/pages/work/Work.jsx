import React, { useState } from "react";
import "../allTask/AllTask.css";
import backLogo from "../images/return 1.svg";
import work from "../images/briefcase (1) 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

function Work() { 
  const getworkd=()=>{
        
  let workD = localStorage.getItem("Work") 
  if (workD) {
      return JSON.parse(workD)
  }else{
      
      return[]
  }
}
  const navigate = useNavigate()
  const [workData] = useState(getworkd());
  return (
    <div className="alltask">
      <div className="goback" onClick={() => navigate("/")}>
        <img className="back" src={backLogo} alt="" />
      </div>
      <div className="alltaskhead">
        <h1>WORK</h1>
        <img src={work} alt="" />
      </div>
      <div className="taskdiv">
        {workData?.map((t, i) => {
          return (
            <div key={i + 1} className="data">
              <img className="blur" src={blur} alt="" />
              <div className="datap">{t}</div>
              <img className="checkme" src={checkme} alt="" />
              <img className="deleteme" src={deleteme} alt="" />
            </div>
          );
        })}
      </div>
      <div className="add">
        <img onClick={()=>navigate("/addtask ",{state:'Work'})} className="addlogo" src={plus} alt="" />
      </div>
    </div>
  );
}

export default Work