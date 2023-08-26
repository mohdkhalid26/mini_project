import React, { useEffect, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import "./AddAllTask.css";
import cross from "../images/close 1.svg";
import arrow from "../images/down-arrow 1.svg";
import { useNavigate } from "react-router";

function AddTask() {
  


  const getworkd = () => {
    let workD = localStorage.getItem("Work");
    if (workD) {
      return JSON.parse(workD);
    } else {
      return [];
    }
  };
  const gethomed = () => {
    let homeD = localStorage.getItem("Home");
    if (homeD) {
      return JSON.parse(homeD);
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
  const getstudyd = () => {
    let studyD = localStorage.getItem("Study");
    if (studyD) {
      return JSON.parse(studyD);
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

  const navigate = useNavigate();
  const [key, setKey] = useState(new Date().getTime());
  const [con1, setCon1] = useState(false);
  const [con2, setCon2] = useState(false);
  const [opt, setOpt] = useState("");
  const [text, setText] = useState("");
  const [workData, setWorkData] = useState(getworkd());
  const [homeData, setHomeData] = useState(gethomed());
  const [travelData, setTravelData] = useState(gettraveld());
  const [studyData, setStudyData] = useState(getstudyd());
  const [shoppingData, setShoppingData] = useState(getshoppingd());
  const [popUp, setPopUp] = useState("success-hide");
  const [isreq1, setIsreq1] = useState("is-req-span-1-hide");
  const [isreq2, setIsreq2] = useState("is-req-span-2-hide");


  const createFunc = () => {
    setCon1(false);
    setKey(new Date().getTime())
    if (opt === "") {
      setIsreq1("is-req-span-1");
    } else if (text === "") {
      setIsreq2("is-req-span-2");
    } else if (opt === "Work") {
      setWorkData([...workData, {myId : key,
        myData:text}]);
      setOpt("");
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq1("is-req-span-1-hide");
      setIsreq2("is-req-span-2-hide");
      setTimeout(() => {
        navigate("/alltask")
      }, 1000);
    } else if (opt === "Study") {
      setStudyData([...studyData,{myId : key,
        myData:text}]);
      setOpt("");
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq1("is-req-span-1-hide");
      setIsreq2("is-req-span-2-hide");
      setTimeout(() => {
        navigate("/alltask")
      }, 1000);
    } else if (opt === "Travel") {
      setTravelData([...travelData, {myId : key,
        myData:text}]);
      setOpt("");
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq1("is-req-span-1-hide");
      setIsreq2("is-req-span-2-hide");
      setTimeout(() => {
        navigate("/alltask")
      }, 1000);
    } else if (opt === "Home") {
      setHomeData([...homeData, {myId : key,
        myData:text}]);
      setOpt("");
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq1("is-req-span-1-hide");
      setIsreq2("is-req-span-2-hide");
      setTimeout(() => {
        navigate("/alltask")
      }, 1000);
    } else if (opt === "Shopping") {
      setShoppingData([...shoppingData, {myId : key,
        myData:text}]);
      setOpt("");
      setText("");
      setPopUp("success-show");
      setTimeout(() => setPopUp("success-hide"), 1000);
      setIsreq1("is-req-span-1-hide");
      setIsreq2("is-req-span-2-hide");
      setTimeout(() => {
        navigate("/alltask")
      }, 1000);
    }
    
  };
  const textAreaFunc = (e) => {
    setText(e.target.value);
  };
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

  const getEmoji = (elem) => {
    setText(text + elem.emoji);
    localStorage.removeItem("epr_suggested")
  };
  return (
    <div className="add-task-div">
      <div className={con2 ? "emoji-div-show" : "emoji-div-hide"}>
        <EmojiPicker
        suggestedEmojisMode="none"
          onEmojiClick={(elem) => getEmoji(elem)}
          previewConfig={{
            defaultEmoji: "",
            defaultCaption: "",
            showPreview: false,
          }}
          height="250px"
          width="87%"
        />
      </div>
      <div className="crossdiv">
        <img
          onClick={() => navigate("/alltask")}
          src={cross}
          alt=""
          className="cross"
        />
      </div>
      <div className="add-task-heading-div">
        <h1>ADD A TASK</h1>
      </div>
      <form className="taskbar">
        <div className="select-task-div">
          <label htmlFor="category">Select a category</label>
          <div
            onClick={() => setCon1(!con1)}
            className="select"
            name="select a category"
            id="category"
          >
            <span>{opt}</span>
          </div>
          <div
            onClick={() => setCon1(!con1)}
            className={con1 ? "opt-show" : "opt-hide"}
          >
            <option onClick={(e) => setOpt(e.target.value)}>Work</option>
            <option onClick={(e) => setOpt(e.target.value)}>Shopping</option>
            <option onClick={(e) => setOpt(e.target.value)}>Home</option>
            <option onClick={(e) => setOpt(e.target.value)}>Study</option>
            <option onClick={(e) => setOpt(e.target.value)}>Travel</option>
          </div>

          <img
            onClick={() => setCon1(!con1)}
            style={{ cursor: "pointer" }}
            src={arrow}
            alt=""
          />
          <span className={isreq1}>Please select a category</span>
        </div>
        <div className="type-task-div">
          <label htmlFor="textarea">
            Type a task here{" "}
            <span onClick={() => setCon2(!con2)}>
              <MdOutlineEmojiEmotions />
            </span>
          </label>
          <textarea
            name="textarea"
            id="textarea"
            onChange={(e) => textAreaFunc(e)}
            value={text}
          ></textarea>
          <span className={isreq2}>Please type your task</span>
        </div>
        <div onClick={() => createFunc()} className="create-btn-div">
          CREATE
        </div>
      </form>
      <div className={popUp}>Task add successfully</div>
    </div>
  );
}

export default AddTask;
