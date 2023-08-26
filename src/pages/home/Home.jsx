import React, { useEffect, useState } from "react";
import "../allTask/AllTask.css";
import backLogo from "../images/return 1.svg";
import home from "../images/house 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

import notask from "../images/Title.png"

function Home() {
  const gethomed = () => {
    let homeD = localStorage.getItem("Home");
    if (homeD) {
      return JSON.parse(homeD);
    } else {
      return [];
    }
  };
  const [homeData, setHomeData] = useState(gethomed());
  const navigate = useNavigate();
  
  const crossData = ()=>{
    const c = localStorage.getItem("crossItem")
    if (c) {
      return JSON.parse(c)
    }else{
      return []
    }}
  const [crossD, setCrossD] = useState(crossData())
   
  const handleCross =(cross)=>{
    if (crossD.includes(cross)) {
          const updatedCross = crossD.filter(c => c !== cross);
          setCrossD(updatedCross);
        }
      
        else {
          setCrossD([...crossD, cross]);
  
        }
  }
  
     useEffect(() => {
      
        localStorage.setItem('crossItem', JSON.stringify(crossD));
      
    }, [crossD]);

const handleDelete=((del)=>{
homeData.map((d,i)=>{
 if (d.myId === del
  ) {
    const updateHomeData = homeData.filter((d,index)=>{
return index !== i
    })
    setHomeData(updateHomeData)
    
  }
})
})

useEffect(() => {
  localStorage.setItem('Home', JSON.stringify(homeData));
  
}, [homeData]);

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
        {homeData.length < 1  ?
        

            
            
            
        <img className="notask" src={notask} alt="wkhrekl"  />
        : homeData.map((t, i) => {
          return (
            <div key={i + 1} className="data">
              <img className="blur" src={blur} alt="" />
              <div className={`datap ${crossD.includes(t.myId)? 'cross' :''}`}>{t.myData}</div>
              <img className="checkme" onClick={()=>{handleCross(t.myId)}} src={checkme} alt="" />
              <img className="deleteme" src={deleteme} onClick={()=>handleDelete(t.myId)} alt="" />
            </div>
          );
        })}
      </div>
      <div className="add">
        <img
          onClick={() => navigate("/addtask ", { state: "Home" })}
          className="addlogo"
          src={plus}
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
