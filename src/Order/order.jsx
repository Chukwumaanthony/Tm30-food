import React from "react";
import "./Order.css";
import whiterice from "../image/Maskrice.png";
import yam from "../image/podyam.png";
import fish from "../image/Maskfish.png";

const order = () => {
  const Order = [
    {
      Name: "White Rice, Plaintain...",
      image: whiterice,
      date: "June 4,2023 at 12:15 pm",
      progress: " In Progress",
      className: "ordermap",
    },
    {
      Name: "Pounded Yam, Egusi...",
      image: yam,
      date: "June 4,2023 at 12:15 pm",
      completer: "Completed",
      className: "ordermap",
    },
    {
      Name: "Grilled Fish",
      image: fish,
      date: "June 4,2023 at 12:15 pm",
      completer: " Completed",
      className: "ordermap",
    },
    {
      Name: "Pounded Yam, Egusi...",
      image: yam,
      date: "June 4,2023 at 12:15 pm",
      completer: " Completed",
      className: "ordermap",
    },
  ];
  return (
    <div className="ordermap">
      {Order.map((Ord) => {
        return (
          <section
            className={Ord.progress == " In Progress" ? "work" : undefined || "works"}
         
          >
            <div>
              <img
                src={Ord.image}
                alt=""
                style={{ width: "50px", borderRadius: "30px" }}
              />
            </div>
            <div className="ordchange">
              <section className="columnord">
                <span className="ordname">{Ord.Name}</span>
                <span className="orddate"> {Ord.date}</span>
              </section>
            </div>

            {Ord.progress && (
              <span 
              className='ordprog'
              style={{
                color: "#c3af6a",
                backgroundColor: "#fdf7e8"
              }}
              >{Ord.progress}</span>
              )}
              {Ord.completer && (
              <span 
              className='ordprog'
              style={{
                color: "#239735",
                backgroundColor: "#e6f3e8"
              }}
              >{Ord.completer}</span>
              )}
          </section>
        );
      })}
      <div className="dbuttord">
        <button className="viewallord">View all orders</button>
      </div>
    </div>
  );
};

export default order;
