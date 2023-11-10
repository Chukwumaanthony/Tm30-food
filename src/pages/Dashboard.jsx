import React, { useEffect, useState, useContext } from "react";
import "./dashh.css";
import Navbar from "../components/Navbar";
import Breakfast from "../components/Breakfast";
import Servefood from "../assets/images/servefood.png";
import Gif from "../Animations/Gif.svg";
// import Gif from "../Animations/loadinggif.png";
import submit from "../assets/images/submit.svg";
import Carousel from "../Caruosel/Carosel";
import { VendorContext } from "../ContextApi/VendorContextProvider";
import styled from "styled-components";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";

const Dashboard = () => {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);

  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount((count) => count - 1);
  };

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

  const postOrder = async () => {
    setLoading(true);
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
      setShow(false);
      setShow1(true);
      setShow2(false);
      setLoading(false);
    } else {
      setMessage(data.data);
      setLoading(false);
      setShow2(true);
    }
  };

  return (
    <Div>
      <div className="ni">
        {/* <Sidebar /> */}
        <div>
          <Navbar />
          <section className="fatherss">
            <div className="">
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
                                <section className="times-img">
                                  <div style={{ width: "25%" }}>
                                    {count}&times;
                                  </div>
                                  <div className="cart-img">
                                    <img
                                      src={e.cartItems[0]?.imageUrl}
                                      alt=""
                                      srcSet=""
                                      width="100%"
                                    />
                                  </div>
                                </section>
                                <section
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    width: "100%",
                                  }}
                                >
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
                                        return <div>{e?.supplementName},</div>;
                                      })}
                                    </div>
                                  </div>
                                  <section>
                                    &#8358;{e.totalPrice * count}
                                  </section>
                                </section>
                              </div>
                              <div className="total-food">
                                <button onClick={decrement}>-</button>
                                <button onClick={increment}>+</button>
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
                      <div
                        onClick={() => {
                          setShow(true);
                        }}
                        className="proceed-btn"
                      >
                        SUBMIT ORDER
                      </div>
                    </section>
                  </div>
                </section>
                <Modal open={show}>
                  <section className={classes.modalBackground}>
                    {loading ? (
                      <div className="submit-order">
                        <div>
                          Submitting <span> Order </span>
                        </div>
                        <img src={Gif} alt="" srcset="" />
                      </div>
                    ) : (
                      <div className="submit-order">
                        <img width="50px" src={submit} alt="" srcset="" />
                        <div className="sub-order">
                          Are you sure you want to submit your order
                        </div>
                        <div className="canc-ok">
                          <button
                            onClick={() => {
                              setShow(false);
                            }}
                            style={{
                              background: "white",
                              border: "1px solid #8f8f8f",
                              color: "#8f8f8f",
                            }}
                          >
                            Cancel
                          </button>
                          <button
                            onClick={postOrder}
                            style={{
                              background: "#36aad9",
                              color: "white",
                            }}
                          >
                            OK
                          </button>
                        </div>
                      </div>
                    )}
                  </section>
                </Modal>
                <Modal open={show1}>
                  <section className={classes.modalBackground}>
                    <div className="submit-order">
                      <img width="50px" src={submit} alt="" srcset="" />
                      <div className="sub-order">Done! </div>
                      <div className="sub-order">
                        Order submission <span>completed</span>{" "}
                      </div>
                      <div className="canc-ok">
                        <button
                          onClick={() => {
                            setShow1(false);
                          }}
                          style={{
                            color: "white",
                            background: "#36aad9",
                            width: "100%",
                          }}
                        >
                          Go back to menu
                        </button>
                      </div>
                    </div>
                  </section>
                </Modal>
                <Modal open={show2}>
                  <section className={classes.modalBackground}>
                    <div className="submit-order">
                      <img width="50px" src={submit} alt="" srcset="" />
                      <div className="sub-orderd">Failed! </div>
                      <div className="sub-orders">{message}</div>
                      <div className="canc-ok">
                        <button
                          onClick={() => {
                            setShow2(false);
                            setShow(false);
                          }}
                          style={{
                            color: "white",
                            background: "#36aad9",
                            width: "100%",
                          }}
                        >
                          Go back to menu
                        </button>
                      </div>
                    </div>
                  </section>
                </Modal>
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
    .select-parent {
      // width: 100vw;
      height: 100vh;
      padding: 1rem;
    }
    .after-nav {
      width: 100%;
    }
  }
`;
