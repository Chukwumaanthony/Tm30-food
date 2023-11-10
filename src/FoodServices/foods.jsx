import React, { useContext, useEffect, useState } from "react";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import "./food.css";
import Ricee from "../Rice/Riced";
const Foods = () => {
  const { data } = useContext(VendorContext);

  const [currentTab, setCurrentTab] = useState("");
  const [food, setFood] = useState();
  const [itemMenus, setItemMenus] = useState();
  // console.log(data);

  useEffect(() => {
    if (data && data?.itemCategories?.length > 0) {
      setCurrentTab(data?.itemCategories[0]?.categoryName);
      setItemMenus(data?.itemCategories[0]?.itemMenus);
    }
  }, [data]);

  const handleClick = (e, item) => {
    setCurrentTab(e?.target?.dataset?.foodname);
    setItemMenus(item);

    const foodElement = document.querySelector(".Breaks-btns");
    if (foodElement) {
      setFood(foodElement.getAttribute("data-foodname"));
    }
  };

  // console.log(currentTab);

  return (
    <div className="Declan-Rice">
      <div className="breakss">
        {data?.itemCategories?.map((m) => {
          // console.log(m.categoryName);
          return (
            <div>
              <div className="brspo">
                <button
                  className="Breaks-btns"
                  data-foodname={m.categoryName}
                  key={m.catergoryId}
                  id={m.catergoryId}
                  disabled={currentTab === m.categoryName}
                  onClick={(e) => handleClick(e, m?.itemMenus)}
                >
                  {m.categoryName}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="itemenu-map">
        {itemMenus?.map((d) => {
          return (
            <div className="width-s">
              <Ricee key={d?.catergoryId} item={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Foods;
// my baby come out hustle don pay why you dey hide when mooney dey, enter the whip make we dey go, far away, no worries money dey

// we enter city come jolly, 2 days money don finsh, we go back to drinking garri,waiting for raining days even rain dey fall
