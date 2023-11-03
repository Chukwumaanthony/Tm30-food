import React, { useEffect, useState, useContext } from "react";
import "./dashh.css";
import Navbar from "../components/Navbar";
import Breakfast from "../components/Breakfast";
import Servefood from "../assets/images/servefood.png";
import Carousel from "../Caruosel/Carosel";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import styled from "styled-components";

const Dashboard = () => {
  const { cartChecker } = useContext(VendorContext);
  const [dataStatus, setDataStatus] = useState(false);

  const [getCart, setGetCart] = useState();
  const localvalue = JSON.parse(localStorage.getItem("food"));

  useEffect(() => {
    if (localvalue) {
      setGetCart(localvalue);
    }
  }, [cartChecker]);

  useEffect(() => {}, [dataStatus]);

  console.log(localvalue);

  const r = localvalue?.map((d) => {
    return {
      itemId: d?.cartItems[0]?.itemId,
      quantity: d?.cartItems[0]?.quantity,
      supplementItems: d?.supplementItems?.map((e) => {
        return {
          supplementId: e?.supplementId,
          quantity: e?.quantity,
        };
      }),
    };
  });

  console.log(r);

  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");

  const details = {};

  const postOrder = async () => {
    const response = await fetch(
      `http://89.38.135.41:7654/api/orders/add-to-cart?vendorId=${vendorId}`,
      {
        method: "POST",
        body: JSON.stringify(r),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken}`,
          Accept: "application/json",
        },
      }
    );
    const data = await response.json();
    if (data?.status === true) {
      localStorage.removeItem("food");
      setDataStatus(!dataStatus);
      setGetCart();
      // window.location.reload();
    }
  };

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
                    {getCart ? (
                      <div className="cart-mapp">
                        {" "}
                        {getCart?.map((e) => {
                          return (
                            <section className="cart">
                              <div className="cart-food">
                                <div className="cart-img">
                                  <img
                                    src={e.cartItems[0]?.imageUrl}
                                    alt=""
                                    width="100%"
                                  />
                                </div>
                                <div className="cart-items">
                                  <section style={{ display: "flex" }}>
                                    <div
                                      style={{
                                        width: "fit-content",
                                        height: "fit-content",
                                      }}
                                    >
                                      {e.cartItems[0]?.itemName}
                                    </div>
                                  </section>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    {e?.supplementItems?.map((e) => {
                                      return <div>{e?.supplementName}, </div>;
                                    })}
                                  </div>
                                </div>
                                <section>{e.totalPrice}</section>
                              </div>
                            </section>
                          );
                        })}
                      </div>
                    ) : (
                      <section className="serv-food">
                        <img src={Servefood} alt="" />
                        <span className="NO-ITEMS">No Item Yet</span>
                        <span className="MADE-ORDER">
                          Looks like you have'nt made your order yet
                        </span>
                      </section>
                    )}
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
                      <div onClick={postOrder} className="proceed-btn">
                        SUBMIT ORDER
                      </div>
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
