import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Onboardimg from "../assets/images/tmonboard.svg";
import Vendor from "../components/Vendor";
import { MdNotificationsActive } from "react-icons/md";
import { RiListIndefinite } from "react-icons/ri";
import Wave from "../assets/images/wave.png";
import HotDeals from "../components/Hotdeals";
import Table from "../components/Table";
import Fooddesk from "../assets/images/onbordimg.png";
import Media from "../components/Mediainput";
import "./onboard.css";
import { ProfileContext } from "../ContextApi/ProfileContext";

const Onboard = () => {
  // const RecentTrx = [
  //   {
  //     Date: "7",
  //     Month: "Aug",
  //     Name: "Fund Deposit",
  //     Math: "+",
  //     Amount: "6,500",
  //     Id: "ID",
  //     No: "283947",
  //     Outcome: true,
  //   },
  //   {
  //     Date: "7",
  //     Month: "Aug",
  //     Name: "Food Purchased",
  //     Math: "-",
  //     Amount: "2,200",
  //     Id: "ID",
  //     No: "283947",
  //     Outcome: false,
  //   },
  // ];

  // const [loading, setLoading] = useState(true);

  // const Click = () => {
  //   setLoading(!loading);
  // };
  const { data } = useContext(ProfileContext);

  console.log(data);

  return (
    <div className="Onboard">
      {/* NavBar  */}
      <navbar className="navbarr-var">
        <section className="navbarr">
          <div className="inputlogo">
            <img className="onboardlogo" src={Onboardimg} alt="" />
            <div className="vendor-search">
              <input type="text" placeholder="Search for vendor" />
              <button>SEARCH</button>
            </div>
            <span className="media-sp">
              <Media />
            </span>
          </div>

          <div className="navtwo">
            <div className="nav-two">
              <div className="nots">
                <RiListIndefinite />
              </div>
              <div className="notss">
                <MdNotificationsActive />
              </div>
            </div>
            <Link to="/profile" className="navthree">
              <div className="pics-img">
                <img
                  className="picss"
                  src={data.profilePictureUrl}
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="nav-three">
                <b className="adeleke">
                  <span>{data.lastName}</span>
                  <span>{data.firstName}</span>
                </b>
                <span className="ade-mail">{data.email}</span>
              </div>
            </Link>
          </div>
        </section>
      </navbar>
      {/* End of NavBar */}

      <div className="D-sec">
        <div className="food-platform">
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <span className="welcome-food">Welcome to TM30 Food Platform</span>
            <div className="border-meal"></div>
          </div>
          <div className="taste-anytime">
            <span className="tasty-meal">Tasty Meal</span>
            <span className="anytime">Anytime.</span>
          </div>
          <div className="Delicious-food">
            Delicious food is waiting for you
          </div>
        </div>
        <div className="foodesk">
          <img src={Fooddesk} alt="" />
        </div>
      </div>
      <section>
        <div className="peter-expense">
          <div className="peter-welcome">
            Welcome Back, Peters <img src={Wave} alt="" />
          </div>
          <div className="bal-expense">Balance and Expenses</div>
        </div>
        {/* 
        <div className="ubalance-div">
          <section className="ubalance-sec">
            <div className="total-wallet">
              <div className="total-ubalc">
                <span className="total-baley">
                  <span>Total Balance</span>
                  <button onClick={Click} className="baley-btn">
                    {" "}
                    {loading ? <AiOutlineEyeInvisible /> : <AiFillEye />}
                  </button>
                </span>
                <button className="ubalc-button">
                  UBALANCE
                  <BsExclamationCircleFill />
                </button>
              </div>
              <h3 style={{ margin: "0", paddingBlock: ".4rem 1.5rem" }}>
                &#8358;{loading ? 6800.0 : "*****"}
              </h3>
            </div>
            <button className="fund-wallet">Fund Wallet</button>
          </section>
          <section className="ubalance-tran">
            <div className="rec-view">
              <span className="rec-trn">Recent Transactions</span>
              <span className="view-icn">
                <span> View all</span>
                <span className="right-arw">
                  <MdKeyboardArrowRight />{" "}
                </span>
              </span>
            </div>
            {RecentTrx.slice(0, 2)?.map((t, i) => {
              return (
                <table className="mapped-tbl" key={i}>
                  <tbody>
                    <tr
                      className=""
                      style={{ background: i % 2 === 0 ? "#fafafa" : "#fff" }}
                    >
                      <td className="date-sec">
                        <div>{t.Date}</div>
                        <div> {t.Month}</div>
                      </td>
                      <td className="t-name">{t.Name}</td>
                      <td className="t-amount" style={{ width: "20%" }}>
                        <div>{t.Math}</div>
                        <div> &#8358;{t.Amount}</div>
                      </td>
                      <td className="t-dnum" style={{ width: "20%" }}>
                        <div>{t.Id}</div>
                        <div className="d-idfort">{t.No}</div>
                      </td>
                      <td className="d-outcome">
                        {t.Outcome ? (
                          <button style={{ background: "green" }}>
                            Successful
                          </button>
                        ) : (
                          <button style={{ background: "rgb(240, 70, 70)" }}>
                            Failed
                          </button>
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              );
            })}
          </section>
        </div> */}
      </section>

      <Vendor />
      <HotDeals />
      <Table />
    </div>
  );
};

export default Onboard;
