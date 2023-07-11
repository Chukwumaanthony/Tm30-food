import React, {useState} from 'react'
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import White from "../image/WhiteRice.png";
import { BsPlus } from "react-icons/bs";
// import FriedRice from "../image/FriedRice.png";
// import Jollof from "../image/jolloff.png";
import Native from "../image/NativeRice.png";
import Ofada from "../image/Ofada.png";
import Jolloftwo from "../image/jollofdsec.png"

const Ricee = () => {
    const [show, setShow] = useState(false);
  

    const Map = [
        {
          id: 1,
          Name: "White Rice",
          Discount: "10% Discount",
          icon: <BsPlus />,
          Hundred: "400",
          Image: White,
          className: "breakfast-sect",
        },
        {
          id: 2,
          Name: "Fried Rice",
          icon: <BsPlus />,
          Hundred: "400",
        //   Image: FriedRice,
        Image: Jolloftwo,

          className: "breakfast-sect",
        },
        {
          id: 3,
          Name: "Jollof Rice",
          icon: <BsPlus />,
          Hundred: "400",
        //   Image: Jollof,
          Image: Jolloftwo,
          className: "breakfast-sect",
        },
        {
          id: 4,
          Name: "Native Rice",
          Discount: "10% Discount",
          icon: <BsPlus />,
          Hundred: "400",
        //   Image: Jolloftwo,
          Image: Native,
          className: "breakfast-sect",
        },
        {
          id: 5,
          Name: "Ofada Rice",
          Discount: "5% Discount",
          icon: <BsPlus />,
          Hundred: "500",
          Image: Ofada,
          className: "breakfast-sect",
        },
        {
          id: 6,
          Name: "Jollof & Fried Rice",
          Discount: "5% Discount",
          icon: <BsPlus />,
          Hundred: "500",
          Image: Jolloftwo,
          className: "breakfast-sect",
        },
      ];
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

export default Ricee