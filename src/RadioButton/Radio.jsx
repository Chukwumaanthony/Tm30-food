import React, { useEffect, useState } from "react";
import "./radio.css";
import Counter from "../Counters/counter";
import axios from "axios";
import ProteinSides from "../components/ProteinSides";

function RadioButton({
  supplementItems,
  setsupplementItems,
  supplementCount,
  setsupplementCount,
  priceArr,
  setpriceArr,
  clearAllOrder,
}) {
  const [loading, setLoading] = useState([]);
  const [data, setData] = useState([]);
  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");
  const { selectedSide, setSelectedSide } = useState("");

  const proteinSupplements = data?.filter(
    (supplement) => supplement.supplementCategory === "PROTEINS"
  );
  const drinkSupplements = data?.filter(
    (supplement) => supplement.supplementCategory === "DRINKS"
  );

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };
  let selectedItemsArray = [];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://89.38.135.41:7654/api/orders/supplements?vendorId=${vendorId}`,
        config
      )
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
      });
  }, []);

  const handleSelectChange = (e) => {
    const { checked, value, name } = e.target;
    console.log(checked, name);
    if (checked) {
      setsupplementItems((prev) => {
        return [...prev, { supplementId: name, quantity: supplementCount }];
      });
    } else {
      setsupplementItems((prev) => {
        return prev.filter((item) => {
          return item.supplementId !== name;
        });
      });
    }
    console.log(selectedItemsArray);
  };

  return (
    <div className="radio-sty">
      <span
        style={{
          color: "#797979",
        }}
      >
        Your Extras
      </span>

      <section
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "50%",
            borderRight: "1px solid #e6e6e6",
            paddingRight: "1rem",
          }}
        >
          <span>ADD PROTIEN TO MEAL</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {proteinSupplements?.map(
              (
                {
                  supplementCategory,
                  supplementName,
                  supplementPrice,
                  supplementId,
                },
                i
              ) => {
                return (
                  <ProteinSides
                    supplementName={supplementName}
                    supplementId={supplementId}
                    supplementPrice={supplementPrice}
                    supplementItems={supplementItems}
                    setsupplementItems={setsupplementItems}
                    priceArr={priceArr}
                    setpriceArr={setpriceArr}
                    clearAllOrder={clearAllOrder}
                  />
                );
              }
            )}
          </div>
        </div>
        <div style={{ width: "50%", paddingLeft: "1rem" }}>
          <span>ADD DRINK?</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {drinkSupplements?.map(
              (
                {
                  supplementCategory,
                  supplementName,
                  supplementPrice,
                  supplementId,
                },
                i
              ) => {
                return (
                  <ProteinSides
                    supplementName={supplementName}
                    supplementId={supplementId}
                    supplementPrice={supplementPrice}
                    supplementItems={supplementItems}
                    setsupplementItems={setsupplementItems}
                    priceArr={priceArr}
                    setpriceArr={setpriceArr}
                    clearAllOrder={clearAllOrder}
                  />
                );
              }
            )}
          </div>
        </div>
      </section>
      <span
        style={{ borderBottom: "1px solid #e6e6e6", paddingBottom: ".5rem" }}
      >
        SOUPS
      </span>
      <div style={{ display: "flex" }}>
        {data.map(({ supplementCategory, supplementName }, i) => {
          return (
            <div style={{ display: "flex" }}>
              {supplementCategory === "SOUPS" && (
                <div style={{ display: "flex" }}>
                  <div>
                    <input type="radio" />
                  </div>
                  <div>{supplementName}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RadioButton;
