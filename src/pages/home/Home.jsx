import React, { useState } from "react";
import "../allTask/AllTask.css";
import backLogo from "../images/return 1.svg";
import home from "../images/house 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

function Home() {
  
  const gethomed=()=>{
        
    let homeD = localStorage.getItem("Home") 
    if (homeD) {
        return JSON.parse(homeD)
    }else{
        
        return[]
    }
  }
      const [homeData] = useState(gethomed());
    const navigate = useNavigate();
    return (
      <div className="alltask">
        <div className="goback" onClick={() => navigate("/")}>
          <img className="back" src={backLogo} alt="" />
        </div>
        <div className="alltaskhead">
          <h1>HOME</h1>
          <img src={home} alt="" />
        </div>
        <div className="taskdiv">
          {homeData?.map((t, i) => {
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
          <img onClick={()=>navigate("/addtask ",{state:'Home'})} className="addlogo" src={plus} alt="" />
        </div>
      </div>
  
    )
}

export default Home