import React, {useState} from 'react'
import Plainpasta from "../image/Plainpasta.png";
import Jollofpasta from "../image/jollofpasta.png";
import Macaroni from "../image/Macaroni.png";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import { BsPlus } from "react-icons/bs";

const Pastries = () => {

    const [show, setShow] = useState(false);

    const Map = [
        {
          id: 1,
          Name: "Plain Pasta",
          Discount: "10% Discount",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Plainpasta,
          className: "breakfast-sect",
        },
        {
          id: 2,
          Name: "Jollof Pasta",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Jollofpasta,
          className: "breakfast-sect",
        },
        {
          id: 3,
          Name: "Macaroni",
          icon: <BsPlus />,
          Hundred: "400",
          Image: Macaroni,
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

export default Pastries