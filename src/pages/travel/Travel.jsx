import React, { useEffect, useState } from "react";
import "../allTask/AllTask.css";
import backLogo from "../images/return 1.svg";
import travel from "../images/world 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

import notask from "../images/Title.png"

function Travel() {
  const gettraveld = () => {
    let travelD = localStorage.getItem("Travel");
    if (travelD) {
      return JSON.parse(travelD);
    } else {
      return [];
    }
  };
  const [travelData, setTravelData] = useState(gettraveld());
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
      travelData.map((d,i)=>{
       if (d.myId === del
        ) {
          const updateTravelData = travelData.filter((d,index)=>{
            return index !== i
          })
      setTravelData(updateTravelData)
      
    }
  })
})

useEffect(() => {
        localStorage.setItem('Travel', JSON.stringify(travelData));
        
      }, [travelData]);


  return (
    <div className="alltask">
      <div className="goback" onClick={() => navigate("/")}>
        <img className="back" src={backLogo} alt="" />
      </div>
      <div className="alltaskhead">
        <h1>TRAVEL</h1>
        <img src={travel} alt="" />
      </div>
      <div className="taskdiv">
        {travelData.length < 1  ?
        

            
            
            
        <img className="notask" src={notask} alt="wkhrekl"  />
        : travelData.map((t, i) => {
          return (
            <div key={i + 1} className="data">
              <img className="blur" src={blur} alt="" />
              <div className={`datap ${crossD.includes(t.myId)? 'cross' :''}`}>{t.myData}</div>
              <img className="checkme" onClick={()=>{handleCross(t.myId)}} src={checkme} alt="" />
              <img className="deleteme" onClick={()=>handleDelete(t.myId)}  src={deleteme} alt="" />
            </div>
          );
        })}
      </div>
      <div className="add">
        <img
          onClick={() => navigate("/addtask ", { state: "Travel" })}
          className="addlogo"
          src={plus}
          alt=""
        />
      </div>
    </div>
  );
}

export default Travel;
