import React, { useContext, useState } from "react";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import "./food.css";
import Ricee from "../Rice/Riced";
const Foods = () => {
  const { data } = useContext(VendorContext);

  const [currentTab, setCurrentTab] = useState("");
  const [food, setFood] = useState();
  const [itemMenus, setItemMenus] = useState();

  // console.log(food);

  const handleClick = (e, item) => {
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
          // justifyContent:"space-between",
          // height:"25rem",
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

//   const { data, loading } = useContext(VendorContext);
//   const [currentTab, setcurrentTab] = useState("Rice");
//   const [currCategoryMenu, setCurrCategoryMenu] = useState();

//   console.log(data, loading);
//   let itemCatgories = data?.itemCategories;
//   const filterItemCategory = (currTab) => {
//     let filteredCat = itemCatgories?.filter(
//       (category) => category?.categoryName === currTab
//     );
//     console.log(filteredCat);
//     return loading === false ? filteredCat[0] : null;
//   };

//   useEffect(() => {
//     filterItemCategory(currentTab);
//   }, [loading]);

//   useEffect(() => {
//     setCurrCategoryMenu(filterItemCategory(currentTab)?.itemMenus);
//   }, []);
//   return (
//     <div className="breakss">
//       {data?.itemCategories?.map((m) => {
//         console.log(m?.catergoryId);
//         return (
//           <div
//             onClick={() => {
//               alert(m?.categoryName);
//             }}
//             className="Breaks-btns"
//             key={m?.catergoryId}
//             id={m?.catergoryId}
//           >
//             {m?.categoryName}
//           </div>
//         );
//       })}

//       {loading === false && filterItemCategory(currentTab)?.itemMenus && (
//         <div>
//           {currCategoryMenu?.map((menu, idx) => {
//             return <Ricee key={idx} item={menu} />;
//           })}
//         </div>
//       )}
//     </div>
//   );
// };
