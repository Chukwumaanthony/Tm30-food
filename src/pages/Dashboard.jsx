import React, { useEffect, useState } from "react";
import "./dashh.css";
import Navbar from "../components/Navbar";
// import Sidebar from "../SidebarDash/Sidebar";
// import { Link } from "react-router-dom";
import Breakfast from "../components/Breakfast";
import Servefood from "../assets/images/servefood.png";
import Carousel from "../Caruosel/Carosel";
import styled from "styled-components";
// import axios from "axios";

const Dashboard = () => {
  // const [item, setItem] = useState(false);
  // const [data, setData] = useState({});
  // const [itemName, setItemName] = useState([]);
  // const [orderId, setOrderId] = useState("");
  const [cart, setCart] = useState();

  useEffect(() => {
    const Food = localStorage.getItem("food");
    if (Food) {
      setCart(Food);
      console.log(cart.itemName);
    }
  }, []);

  const recieveCart = () => {};
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${getToken}`,
  //   },
  // };
  // useEffect(() => {
  //   axios
  //     .get("http://89.38.135.41:7654/api/orders/carts", config)
  //     .then((response) => {
  //       setData(response.data.data);
  //       setItem(true);
  //       setItemName(
  //         response.data.data.orderResponses?.length !== 0
  //           ? response.data.data.orderResponses[0].items
  //           : []
  //       );

  //       setOrderId(
  //         response.data.data.orderResponses?.length !== 0
  //           ? response.data.data.orderResponses[0].orderId
  //           : ""
  //       );
  //       // setOrderId(data?.orderResponses[0]?.orderId);
  //       // console.log(orderId);
  //       //  work on optimistic update
  //       // console.log(data?.orderResponses[0]?.orderId);
  //       // console.log(data);
  //     });
  // }, []);

  // console.log({ itemName });

  // useEffect(() => {
  //   if (itemName.length !== 0) {
  //     setItem(true);
  //   } else {
  //     setItem(false);
  //   }
  // }, [item]);

  // const submitOrder = async () => {
  //   const response = await fetch(
  //     `http://89.38.135.41:7654/api/orders/submit-cart?orderId=${orderId}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${getToken}`,
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();
  //   if (data?.status === true) {
  //     window.location.reload();
  //   }
  // };
  return (
    <Div>
      <div className="ni">
        {/* <Sidebar /> */}
        <div>
          <Navbar />
          <section className="fatherss">
            <div className="back-img">
              <div className="select-parent">
                <section className="after-nav">
                  <div className="father-one">
                    <div className="ordertype-two">
                      <Carousel />
                    </div>
                  </div>

                  <Breakfast />
                </section>

                {/* second div */}
                <section className="ORDER-POPS">
                  <div className="ORDERS-HOLDER">
                    <section className="ORDER">
                      <span className="MAMAJ-ORDER">ORDER FROM</span>
                      <span className="ORDER-MAMAJ">Mama J Bukka</span>
                    </section>
                    {/* {item ? (
                      <section className="serv-foods">
                        <div className="item-map">
                          <span>
                            <img
                              src={
                                itemName.length === 0
                                  ? ""
                                  : itemName[0].imageUri
                              }
                              alt=""
                            />
                          </span>
                          <span className="Item-name">
                            {itemName.map((m) => {
                              return <p>{m.itemName},</p>;
                            })}
                          </span>
                          <span>
                            &#8358;
                            {itemName.length !== 0
                              ? data.orderResponses[0].totalAmount
                              : ""}
                          </span>
                        </div>
                      </section>
                    ) : ( */}
                    {cart?.map((e) => {
                      return (
                        <div>
                          <div>{e.itemName}</div>
                        </div>
                      );
                    })}
                    <section className="serv-food">
                      <img src={Servefood} alt="" />
                      <span className="NO-ITEMS">No Item Yet</span>
                      <span className="MADE-ORDER">
                        Looks like you have'nt made your order yet
                      </span>
                    </section>
                    {/* // )} */}
                    <section className="Order-btn">
                      <span className="order-int">
                        <input
                          type="text"
                          placeholder="Cashback"
                          className="cash-back"
                        />
                        <span className="one-thousand">-&#8358;1000.00</span>
                      </span>
                      <div className="proceed-btn">SUBMIT ORDER</div>
                    </section>
                  </div>
                </section>
                {/* end */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </Div>
  );
};

export default Dashboard;
const Div = styled.div`
  @media screen and (max-width: 40em) {
    .ORDER-POPS {
      display: none;
    }
  }
`;
