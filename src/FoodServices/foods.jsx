import React, { useContext, useState, useEffect } from "react";
import Swallow from "../Swallows/Swallow";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import "./food.css";
import Ricee from "../Rice/Riced";
const Foods = () => {
  const { data, loading } = useContext(VendorContext);
  const [currentTab, setcurrentTab] = useState("Rice");
  const [currCategoryMenu, setCurrCategoryMenu] = useState();

  console.log(data, loading);
  let itemCatgories = data?.itemCategories;
  const filterItemCategory = (currTab) => {
    let filteredCat = itemCatgories?.filter(
      (category) => category?.categoryName === currTab
    );
    console.log(filteredCat);
    return loading === false ? filteredCat[0] : null;
  };

  useEffect(() => {
    filterItemCategory(currentTab);
  }, [loading]);

  useEffect(() => {
    setCurrCategoryMenu(filterItemCategory(currentTab)?.itemMenus);
  }, []);
  return (
    <div className="breakss">
      {data?.itemCategories?.map((m) => {
        console.log(m?.catergoryId);
        return (
          <div
            onClick={() => {
              alert(m?.categoryName);
            }}
            className="Breaks-btns"
            key={m?.catergoryId}
            id={m?.catergoryId}
          >
            {m?.categoryName}
          </div>
        );
      })}

      {loading === false && filterItemCategory(currentTab)?.itemMenus && (
        <div>
          {currCategoryMenu?.map((menu, idx) => {
            return <Ricee key={idx} item={menu} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Foods;
