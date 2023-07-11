import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import Yam from "../image/Englishbreakfast.png";
import { BsPlus } from "react-icons/bs";
import Omelette from "../image/Omelette.png";
import Egg from "../image/scrambledeggs.png";
import Bread from "../image/Hotbread.png";
import English from "../image/Englishbreak.png";

const BreakDash = () => {
  const [show, setShow] = useState(false);

  const Map = [
    {
      id: 1,
      Name: "Boiled Yam & Egg",
      Discount: "10% Discount",
      icon: <BsPlus />,
      Hundred: "600",
      Image: Yam,
      className: "breakfast-sect",
    },
    {
      id: 2,
      Name: "Omelette",
      Discount: "5% Discount",
      icon: <BsPlus />,
      Hundred: "500",
      Image: Omelette,
      className: "breakfast-sect",
    },
    {
      id: 3,
      Name: "Scrambled Egg",
      icon: <BsPlus />,
      Hundred: "600",
      Image: Egg,
      className: "breakfast-sect",
    },
    {
      id: 4,
      Name: "Hot Bread",
      icon: <BsPlus />,
      Hundred: "600",
      Image: Bread,
      className: "breakfast-sect",
    },
    {
      id: 5,
      Name: "English Breakfastg",
      Discount: "10% Discount",
      icon: <BsPlus />,
      Hundred: "600",
      Image: English,
      className: "breakfast-sect",
    },
  ];
  return (
    <section className="breakfast-sect">
      {Map?.map((Fast) => {
        // console.log(Fast);
        return (
          <div className="Yam-Cont" key={Fast.id}>
            <section className="yamcont">
              <img src={Fast.Image} className="Yam-img" alt="" />
              <span className="dis-cont">
                <span className="yamndegg">{Fast.Name}</span>
                {Fast.Discount && (
                  <span className="discount">{Fast.Discount}</span>
                )}
                <span className="naira6">&#8358;{Fast.Hundred}</span>
              </span>
            </section>

            <section>
              <section
                className="plusicon"
                onClick={() => {
                  setShow(true);
                  console.log(Fast);
                  // sessionStorage.setItem("foodName", Fast);
                }}
              >
                <BsPlus />
              </section>

              <Modal open={show}>
                <section className={classes.modalBackground}>
                  <div className={classes.modalContent}>
                    <section className="cancel">
                      <h3 className="Moad-Yam">Boiled Yam & Egg</h3>
                      <button
                        className="Canc-line"
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setShow(false);
                          console.log(Fast);
                        }}
                      >
                        x
                      </button>
                    </section>

                    <MODA data={Fast} />
                  </div>
                </section>
              </Modal>
            </section>
          </div>
        );
      })}
    </section>
  );
};

export default BreakDash;
