import React, { useState } from "react";
import "./dashh.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SidebarDash/Sidebar";
import { Link } from "react-router-dom";
import Breakfast from "../Breakfast/breakfast";
import Servefood from "../image/servefood.png";
import Defaultt from "../DefaultOrder/Default";
import Carousel from "../Caruosel/Carosel";
// import checkout from "../Checkout/Checkoutspg";
// import Breakft from "../Breakfast/breakfast";


const Dashboard = () => {

  const [Default, setDefault] = useState(true);
  const [Special, setSpecial] = useState(false);
  return (
    <div>
      <div className="ni">
        <Sidebar />
        <div>
          <Navbar />
          <section className="fatherss">
            <div className="back-img">
              <div className="select-parent">
                <section className="after-nav">
                  <div className="father-one">
                    <div className="ordertype">
                      <span className="order-type">Select Order type</span>
                      <Link className="order-btn">
                        <button 
                        className="default-order"
                        onClick={(()=>{
                          setDefault(true);
                          setSpecial(false);
                        })}
                        style={{
                          background:Special? "":"#36aad9",
                          color:Special? "":"white",
                          border: Special?"" : "none"
                       }}
                        >Default Order</button>
                        <button 
                        className="special-order"
                        onClick={(()=>{
                          setSpecial(true);
                          setDefault(false);
                        })}
                        style={{
                           background:Special? "#36aad9":"",
                           color:Special? "white":"",
                           border: Special?"none" : ""
                        }}
                        >Special Order</button>
                      </Link>
                      
                    </div>

                    {/* <div className="ordertime">
                      <span className="countdow-holder">
                        <div className="may8">
                          <span className="mayy">8</span>
                          <span className="may">May</span>
                        </div>
                        <div className="deadline">
                          <span className="deadline-text">Deadline</span>
                          <span className="timee">
                            0 Days : 2hrs : 48mins : 56 secs
                          </span>
                        </div>
                      </span>
                    </div> */}
                    <div className="ordertype-two">
                    <Carousel/>
                    </div>

                  </div>
             
                  {Default && <Defaultt/>}
                  {Special && <Breakfast/>}
                  {/* <Breakfast/> */}
                 
                </section>

                {/* second div */}
                <section className="ORDER-POPS">
                    <div className="ORDERS-HOLDER">
                        <section className="ORDER">
                        <span className="MAMAJ-ORDER">ORDER FROM</span>
                        <span className="ORDER-MAMAJ">Mama J Bukka</span>
                        </section>

                        <section className="serv-food">
                            <img src={Servefood} alt="" />
                            <span className="NO-ITEMS">No Item Yet</span>
                            <span className="MADE-ORDER">Looks like you have'nt made your order yet</span>
                        </section>

                        <section className="Order-btn">
                            <span className="order-int">
                                <input type="text" placeholder="Cashback" className="cash-back" />
                                <span className="one-thousand">-&#8358;1000.00</span>
                            </span>
                            <Link 
                            to="/checkout"
                            className="proceed-btn"
                            >
                            PROCEED TO CHECKOUT
                            </Link>
                        </section>
                        
                    </div>
                </section>
                {/* end */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;