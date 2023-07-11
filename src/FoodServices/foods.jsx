import React,{ useState } from "react";
import BreakDash from "../Breakdash/BreakDash";
import Rice from "../Rice/Riced";
import "./food.css";
import Pasta from "../Pasta/Pastries";
import Swallows from "../Swallows/Swallow";
import Other from "../Others/Other";

const Foods = () => {
  // const [active, setActive] = useState("1")
  // const [tabs, setTabs] = useState(false)

  // const  [Cards, setCards] = useState(true);
  // const  [AddNew, setAddNew] = useState(false);
  const Map = [
    {
      Name: "Breakfast",
      id: 1,
      component: <BreakDash />
    },
    {
      Name: "Rice",
      id: 2,
      component: <Rice />
    },
    {
      Name: "Pasta",
      id: 3,
      component: <Pasta/>
    },
    {
      Name: "Swallows",
      id: 4,
      component: <Swallows/>
    },
    {
      Name: "Others",
      id: 5,
      component: <Other/>
    },
  ];
  const [currentTab, setCurrentTab] = useState('1');
  const handleClick = (e) => {
    setCurrentTab(e.target.id)
  }
  const O1 = 'One';
  const O2 = 'one'
  if ( O1 === O2) {
    console.log('true')
  }
  return (

    <section className="Declan-Rice">
      <div className="breakss">
        {Map.map((m) => {
          return(
            <div className="brspo">

            <button 
            className="Breaks-btns" 
            key={m.id} 
            id={m.id} 
            disabled={currentTab == m.id} 
            onClick={handleClick}
              >
                {m.Name}
            </button>
            </div>
          )
        })}

      </div>
      <div>
          {Map.map((m) => {
            // const {Name, id, component} = m;
            return(
            

              <div key={m.id}>
                {currentTab === `${m.id}` && 
                  <div>
                    {m.component}
                  </div>
                }
              </div>
            
            )
          })}

      </div>

     </section>
     
    
  );
};

export default Foods;
