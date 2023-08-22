import React, { useState } from "react";
import "./AllTask.css";
import backLogo from "../images/return 1.svg";
import all from "../images/clipboard (1) 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

function AllTask() {
  const gethomed=()=>{
        
    let homeD = localStorage.getItem("Home") 
    if (homeD) {
        return JSON.parse(homeD)
    }else{
        
        return[]
    }
  }
  
  const getstudyd=()=>{
        
    let studyD = localStorage.getItem("Study") 
    if (studyD) {
        return JSON.parse(studyD)
    }else{
        
        return[]
    }
  }
  
  const getworkd=()=>{
        
    let workD = localStorage.getItem("Work") 
    if (workD) {
        return JSON.parse(workD)
    }else{
        
        return[]
    }
  }
  const gettraveld=()=>{
        
    let travelD = localStorage.getItem("Travel") 
    if (travelD) {
        return JSON.parse(travelD)
    }else{
        
        return[]
    }
  }
  const getshoppingd=()=>{
        
    let shoppingD = localStorage.getItem("Shopping") 
    if (shoppingD) {
        return JSON.parse(shoppingD)
    }else{
        
        return[]
    }
  }
  const [allData] = useState(gethomed().concat(getstudyd(),getworkd(),gettraveld(),getshoppingd()));
  const navigate = useNavigate();
  return (
    <div className="alltask">
      <div className="goback">
        <img className="back" onClick={() => navigate("/")} src={backLogo} alt="" />
      </div>
      <div className="alltaskhead">
        <h1>ALL TASK</h1>
        <img src={all} alt="" />
      </div>
      <div className="taskdiv">
        {allData?.map((t, i) => {
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
        <img onClick={()=>navigate("/addalltask")} className="addlogo" src={plus} alt="" />
      </div>
    </div>
  );
}

export default AllTask;
