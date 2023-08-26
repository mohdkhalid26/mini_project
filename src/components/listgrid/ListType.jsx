import React, { useState } from "react";
import "./ListType.css";
import all from "../listgrid/images/clipboard (1) 1.svg";
import work from "../listgrid/images/briefcase (1) 1.svg";
import study from "../listgrid/images/book 1.svg";
import travel from "../listgrid/images/world 1.svg";
import shopping from "../listgrid/images/online-shopping 1.svg";
import home from "../listgrid/images/house 1.svg";
import { useNavigate } from "react-router";

function ListType() {

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

  const [workData, setWorkData] = useState(getworkd());
  const [homeData, setHomeData] = useState(gethomed());
  const [travelData, setTravelData] = useState(gettraveld());
  const [studyData, setStudyData] = useState(getstudyd());
  const [shoppingData, setShoppingData] = useState(getshoppingd());
  const [allData, setAllData] = useState([].concat(homeData,studyData,workData,travelData,shoppingData));


  const navigate = useNavigate();
  const [data] = useState([
    {
      heading: "All",
      task: "Task "+allData.length,
      logo: all,
      func: func1,
    },
    {
      heading: "Work",
      task: "Task "+workData.length,
      logo: work,
      func: func2,
    },
    {
      heading: "Study",
      task: "Task "+studyData.length,
      logo: study,
      func: func3,
    },
    {
      heading: "Travel",
      task: "Task "+travelData.length,
      logo: travel,
      func: func4,
    },
    {
      heading: "Shopping",
      task: "Task "+shoppingData.length,
      logo: shopping,
      func: func5,
    },
    {
      heading: "Home",
      task: "Task "+homeData.length,
      logo: home,
      func: func6,
    },
  ]);

  function func1() {
    navigate("/alltask");
  }
  function func2() {
    navigate("/Work");
  }
  function func3() {
    navigate("/Study");
  }
  function func4() {
    navigate("/Travel");
  }
  function func5() {
    navigate("/Shopping");
  }
  function func6() {
    navigate("/Home");
  }

  return (
    <div className="grid">
      {data?.map((todo, index) => {
        return (
          <div
            onClick={todo.func}
            className={`div${index + 1}`}
            key={index + 1}
          >
            <span className={`span${index + 1}`}>
              <img
                className={`img${index + 1}`}
                src={todo.logo}
                alt={todo.logo}
                srcSet=""
              />
            </span>

            <section className={`section${index + 1}`}>
              <h3 className={`h3${index + 1}`}>{todo.heading}</h3>
              <p className={`p${index + 1}`}>{todo.task}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default ListType;
