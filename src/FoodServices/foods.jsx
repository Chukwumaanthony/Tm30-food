import React, { useContext, useEffect, useState } from "react";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import "./food.css";
import Ricee from "../Rice/Riced";
const Foods = () => {
  const { data } = useContext(VendorContext);

  const [currentTab, setCurrentTab] = useState("");
  const [food, setFood] = useState();
  const [itemMenus, setItemMenus] = useState();

  useEffect(() => {
    if (data && data?.itemCategories?.length > 0) {
      setCurrentTab(data?.itemCategories[0]?.categoryName);
    }
  }, [data]);

  const handleClick = (e, item) => {
    console.log(e?.target?.dataset?.foodname);
    setCurrentTab(e?.target?.dataset?.foodname);
    setItemMenus(item);

    const foodElement = document.querySelector(".Breaks-btns");
    if (foodElement) {
      setFood(foodElement.getAttribute("data-foodname"));
    }
  };

  return (
    <div className="Declan-Rice">
      <div className="breakss">
        {data?.itemCategories?.map((m) => {
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        {itemMenus?.map((d) => {
          return (
            <div>
              <Ricee key={d?.catergoryId} item={d} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Foods;
