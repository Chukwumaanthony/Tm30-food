import React, { useEffect, useState } from "react";
import "./radio.css";
import Counter from "../Counters/counter";
import axios from "axios";

function RadioButton() {
  const [loading, setLoading] = useState([]);
  const { selectedSide, setSelectedSide } = useState("");
  const [data, setData] = useState([]);
  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");

  console.log(vendorId);

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://89.38.135.41:7654/api/orders/supplements?vendorId=${vendorId}`,
        config
      )
      .then((response) => {
        console.log(response?.data);
        setData(response.data.data);
        setLoading(false);
      });
  }, []);

  let selectedItemsArray = [];
  const handleSelectChange = (e) => {
    const { checked, value, name } = e.target;
    // setSelectedSide(name);
    console.log(checked, name);
    if (checked) {
      selectedItemsArray.push(name);
    } else {
      selectedItemsArray = selectedItemsArray.filter((item) => {
        return item !== name;
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
            width: "45%",
            borderRight: "1px solid #e6e6e6",
            paddingRight: "2rem",
          }}
        >
          <span>ADD PROTIEN TO MEAL</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.map(
              ({ supplementCategory, supplementName, supplementPrice }, i) => {
                return (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        // background: "red",
                        width: "100%",
                      }}
                    >
                      <section style={{ width: "100%" }}>
                        {supplementCategory === "PROTEINS" && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                  width: "100%",
                                }}
                              >
                                <input
                                  type="checkbox"
                                  name={supplementName}
                                  onChange={(e) => {
                                    handleSelectChange(e);
                                    console.log(i);
                                  }}
                                />
                                <p style={{ marginBlock: "5px" }}>
                                  {supplementName}
                                </p>
                                {supplementCategory === "PROTEINS" && (
                                  <div
                                    style={{
                                      display: "flex",
                                      fontSize: "13px",
                                      alignItems: "center",
                                      gap: "10px",
                                    }}
                                  >
                                    {/* {supplementPrice} */}

                                    <Counter
                                      supplementPrice={supplementPrice}
                                      selectedItemsArray={selectedItemsArray}
                                      supplementName={supplementName}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </section>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        <div style={{ width: "45%" }}>
          <span>ADD DRINK?</span>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {data.map(
              ({ supplementCategory, supplementName, supplementPrice }, i) => {
                return (
                  <div style={{ display: "flex" }}>
                    <div
                      style={{
                        display: "flex",
                        // background: "red",
                        width: "100%",
                      }}
                    >
                      <section style={{ width: "100%" }}>
                        {supplementCategory === "DRINKS" && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            <div
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div>
                                <input type="radio" />
                              </div>
                              <p style={{ marginBlock: "5px" }}>
                                {supplementName}
                              </p>{" "}
                            </div>
                            <div>
                              {supplementCategory === "DRINKS" && (
                                <div
                                  style={{
                                    display: "flex",
                                    fontSize: "13px",
                                    alignItems: "center",
                                    // gap: "10px",
                                  }}
                                >
                                  <Counter
                                    selectedItemsArray={selectedItemsArray}
                                    supplementName={supplementName}
                                    supplementPrice={supplementPrice}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </section>
                    </div>
                  </div>
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
