import React from "react";
import Sidebar from "../SidebarDash/Sidebar";
import Navbar from "../Navbar/Navbar";
import Manon from "../image/bsman.png"
import Wanon from "../image/bswom.png"
import "./servv.css";
import Airtime from "../image/mobile.png"
import Data from "../image/Group 237784.png"
import Cable from "../image/Group 237786.png"
import Elect from "../image/lamp-charge.png"
import HOT from "../image/basil_hotspot-solid.png"
import Fundz from "../image/Fundz.png"
import Insure from "../image/shield-tick.png"
import Waec from "../image/lam.png"
import tv from "../image/ticket.png"
import odas from "../image/IRSS.png"

const servIces = () => {

  const SecMap = [
    {
      Name:'Transfer Funds',
      Image: Fundz,
      className: "Elect-services"
    },
    {
      Name:'Insurance',
      Image: Insure,
      className: "Elect-services"
    },
    {
      Name:'Waec Result ',
      Image: Waec,
      className: "Elect-services"
    },
    {
      Name:'Cable Tv',
      Image: tv,
      className: "Elect-services"
    },
    {
      Name:'Others',
      Image: odas,
      className: "Elect-services"
    },
  ]

   const Map = [
    {
    Name: 'Buy Airtime',
    Image: Airtime,
    className: "Elect-services"
    },
    {
    Name: 'Buy Data',
    Image: Data,
    className: "Elect-services"
    },
    {
    Name: 'Buy Electricity',
    Image: Elect,
    className: "Elect-services"
    },
    {
    Name: 'Buy Cable Tv',
    Image: Cable,
    className: "Elect-services"
    },
    {
    Name: 'Internet Services',
    Image: HOT,
    className: "Elect-services"
    }
   ]
  return (
    <div>
      <div className="ni">
        <Sidebar />
        <div className="nnna">
          <Navbar />
          <div className="Serv-back">
            <section className="sect-airt">
              <span className="buy-airtime">
                Buy Airtime, Data & Pay Utility Bills
              </span>
              <span className="pay-money">
                Pay your bills in a stress-free manner.
              </span>

              <div className="manchi">
                <img src={Manon} alt="" style={{width:"350px"}} />
                <img src={Wanon} alt="" style={{width:"275px"}} />
              </div>

              <section className="All-services">
                {Map?.map((fasts)=> {
                  return(
                    
                      <div className={fasts.className}>
                      <img src= {fasts.Image} alt="" />
                      {fasts.Name}
                      </div>
                  
                    
                  )
                })}
    
              </section>
              <section className="All-services">
                  {SecMap?.map ((Sec)=>{
                    return(
                      <div className="Elect-services">
                         <img src={Sec.Image} alt="" />
                         {Sec.Name}
                      </div>
                    )
                  })}
              </section>


            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default servIces;
