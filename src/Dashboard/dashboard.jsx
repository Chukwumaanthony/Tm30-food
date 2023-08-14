import React from "react";
import "./dashh.css";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../SidebarDash/Sidebar";
import { Link } from "react-router-dom";
import Breakfast from "../Breakfast/breakfast";
import Servefood from "../image/servefood.png";
import Carousel from "../Caruosel/Carosel";

const Dashboard = () => {
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
                   
                    <div className="ordertype-two">
                      <Carousel />
                    </div>
                  </div>

                  <Breakfast/>
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
                      <span className="MADE-ORDER">
                        Looks like you have'nt made your order yet
                      </span>
                    </section>

                    <section className="Order-btn">
                      <span className="order-int">
                        <input
                          type="text"
                          placeholder="Cashback"
                          className="cash-back"
                        />
                        <span className="one-thousand">-&#8358;1000.00</span>
                      </span>
                      <Link to="/checkout" className="proceed-btn">
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
