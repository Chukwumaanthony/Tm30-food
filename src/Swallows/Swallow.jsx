import React, {useState} from 'react'
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import { BsPlus } from "react-icons/bs";
import Amala from "../image/Amala.png";
import Pounded from "../image/Pounded Yam 1 1.png";
import Semo from "../image/Semo  1.png";
import Wheat from "../image/Wheat 1.png";
import  Eba from "../image/Eba 1 1.png";



const Swallow = () => {
    const [show, setShow] = useState(false);

    const Map = [
        {
          id: 1,
          Name: "Amala",
          Discount: "10% Discount",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Amala,
          className: "breakfast-sect",
        },
        {
          id: 2,
          Name: "Pounded Yam",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Pounded,
          className: "breakfast-sect",
        },
        {
          id: 3,
          Name: "Semo",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Semo,
          className: "breakfast-sect",
        },
        {
          id: 4,
          Name: "Wheat",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Wheat,
          className: "breakfast-sect",
        },
        {
          id: 5,
          Name: "Eba",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Eba,
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
  )
}

export default Swallow