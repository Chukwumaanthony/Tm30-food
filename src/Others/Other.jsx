import React, {useState} from 'react'
import Plainbeans from "../image/Plain beans 1.png";
import porridge from "../image/Beans porridge 1.png";
import Moi from "../image/Moin moin 1.png"
import French from "../image/Homemade-French-Fries 1.png"
import Yamarita from "../image/Yam porridge 1.png"
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import { BsPlus } from "react-icons/bs";

const Other = () => {
    const [show, setShow] = useState(false);

    const Map = [
        {
          id: 1,
          Name: "Plain Beans",
          Discount: "10% Discount",
          icon: <BsPlus />,
          Hundred: "500",
          Image: Plainbeans,
          className: "breakfast-sect",
        },
        {
          id: 2,
          Name: "Porridge Beans",
          icon: <BsPlus />,
          Hundred: "500",
          Image: porridge,
          className: "breakfast-sect",
        },
        {
          id: 3,
          Name: "Moin-Moin",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Moi,
          className: "breakfast-sect",
        },
        {
          id: 4,
          Name: "French Fries",
          icon: <BsPlus />,
          Hundred: "700",
          Image: French,
          className: "breakfast-sect",
        },
        {
          id: 5,
          Name: "Porridge Yam",
          icon: <BsPlus />,
          Hundred: "500",
          Image: Yamarita,
          className: "breakfast-sect",
        }
    ]

  return (
    <section className="breakfast-sect">
    {Map?.map((Fast) => {
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
                // localStorage.setItem("foodName", JSON.stringify(Fast));
                
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
                    onClick={() => setShow(false)}
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
  )}


export default Other