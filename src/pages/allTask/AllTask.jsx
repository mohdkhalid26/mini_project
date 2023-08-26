import React, { useEffect, useState } from "react";
import "./AllTask.css";
import notask from "../images/Title.png"
import backLogo from "../images/return 1.svg";
import all from "../images/clipboard (1) 1.svg";
import checkme from "../images/checked 1.svg";
import deleteme from "../images/delete 1.svg";
import blur from "../images/blur 1.svg";
import plus from "../images/plus 1.svg";
import { useNavigate } from "react-router";

function AllTask() {
  const gethomed = () => {
    let homeD = localStorage.getItem("Home");
    if (homeD) {
      return JSON.parse(homeD);
    } else {
      return [];
    }
  };

  const getstudyd = () => {
    let studyD = localStorage.getItem("Study");
    if (studyD) {
      return JSON.parse(studyD);
    } else {
      return [];
    }
  };

  const getworkd = () => {
    let workD = localStorage.getItem("Work");
    if (workD) {
      return JSON.parse(workD);
    } else {
      return [];
    }
  };
  const gettraveld = () => {
    let travelD = localStorage.getItem("Travel");
    if (travelD) {
      return JSON.parse(travelD);
    } else {
      return [];
    }
  };
  const getshoppingd = () => {
    let shoppingD = localStorage.getItem("Shopping");
    if (shoppingD) {
      return JSON.parse(shoppingD);
    } else {
      return [];
    }
  };

  const crossData = () => {
    const c = localStorage.getItem("crossItem");
    if (c) {
      return JSON.parse(c);
    } else {
      return [];
    }
  };

  const [workData, setWorkData] = useState(getworkd());
  const [homeData, setHomeData] = useState(gethomed());
  const [studyData, setStudyData] = useState(getstudyd());
  const [travelData, setTravelData] = useState(gettraveld());
  const [shoppingData, setShoppingData] = useState(getshoppingd());
  const [allData, setAllData] = useState(
   [].concat(homeData,studyData,workData,travelData,shoppingData)
    );
  const [crossD, setCrossD] = useState(crossData());
  
  const [popUp, setPopUp] = useState("delete-hide");
  const navigate = useNavigate();

  const handleCross = (cross) => {
    if (crossD.includes(cross)) {
      const updatedCross = crossD.filter((c) => c !== cross);
      setCrossD(updatedCross);
    } else {
      setCrossD([...crossD, cross]);
    }
  };

  useEffect(() => {
    localStorage.setItem("crossItem", JSON.stringify(crossD));
  }, [crossD]);

  const handleDelete = ((del) => {
    workData.map((d, i) => {
     
      if (d.myId === del) {
        const updateWorkData = workData.filter((d, index) => {
          return index !== i;
        } )
        setWorkData(updateWorkData)
      }
        
      setPopUp("delete-show");
      setTimeout(() => setPopUp("delete-hide"), 1000);
      })
      homeData.map((d, i) => {
      
          if (d.myId === del) {
            const updateHomeData = homeData.filter((d, index) => {
              return index !== i;
            });
            setHomeData(updateHomeData);
          }
          setPopUp("delete-show");
          setTimeout(() => setPopUp("delete-hide"), 1000);
          
        })

            travelData.map((d, i) => {
              if (d.myId === del) {
                const updateTravelData = travelData.filter((d, index) => {
                  return index !== i;
                });
                setTravelData(updateTravelData);
              }
            
          setPopUp("delete-show");
          setTimeout(() => setPopUp("delete-hide"), 1000);})
                              shoppingData.map((d, i) => {
                  if (d.myId === del) {
                    const updateShoppingData = shoppingData.filter(
                      (d, index) => {
                        return index !== i;
                      }
                    );

                    setShoppingData(updateShoppingData);
                    
                  }
                
          setPopUp("delete-show");
          setTimeout(() => setPopUp("delete-hide"), 1000);}) 
                    studyData.map((d, i) => {
                      if (d.myId === del) {
                        const updateStudyData = studyData.filter((d, index) => {
                          return index !== i;
                        });
                        setStudyData(updateStudyData)}
                        
          setPopUp("delete-show");
          setTimeout(() => setPopUp("delete-hide"), 1000);
                      })
                    })
       
                    

useEffect(() => {
  localStorage.setItem("Work", JSON.stringify(workData))
  
  
}, [workData]);

useEffect(() => {
  localStorage.setItem("Home", JSON.stringify(homeData));
}, [homeData]);

useEffect(() => {
  localStorage.setItem("Travel", JSON.stringify(travelData));
}, [travelData]);

useEffect(() => {
  localStorage.setItem("Study", JSON.stringify(studyData));
}, [studyData]);

useEffect(() => {
  localStorage.setItem("Shopping", JSON.stringify(shoppingData));
}, [shoppingData]);


useEffect(() => {
  setAllData([].concat(homeData,studyData,workData,travelData,shoppingData)
  )
}, [homeData,studyData,workData,travelData,shoppingData]);


  return (
    <div className="alltask">
      <div className="goback">
        <img
          className="back"
          onClick={() => navigate("/")}
          src={backLogo}
          alt=""
        />
      </div>
      <div className="alltaskhead">
        <h1>ALL TASK</h1>
        <img src={all} alt="" />
        
      </div>
      <div className="taskdiv">
        {allData.length < 1  ?
        

            
            
            
          <img className="notask" src={notask} alt="wkhrekl" />
          :
        allData.map((t, i) => {
          return (
            <div key={t.myId} className="data">
              <img className="blur" src={blur} alt="" />
              <div
                className={`datap ${crossD.includes(t.myId) ? "cross" : ""}`}
              >
                {t.myData}
              </div>
              <img
                className="checkme"
                onClick={() => {
                  handleCross(t.myId);
                }}
                src={checkme}
                alt=""
              />
              <img
                onClick={() => {
                  handleDelete(t.myId);
                }}
                className="deleteme"
                src={deleteme}
                alt=""
              />
            </div>
            
            ) 
            
          })
          
         }
      </div>
      <div className="add">
        <img
          onClick={() => navigate("/addalltask")}
          className="addlogo"
          src={plus}
          alt=""
        />
      </div>
      <div className={popUp}>Item Deleted</div>
    
    </div>
  );
}

export default AllTask;
