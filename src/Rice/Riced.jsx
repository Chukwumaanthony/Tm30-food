import React, { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import MODA from "../ModaPage/moda";
import { BsPlus } from "react-icons/bs";

const Ricee = ({ item }) => {
  const [show, setShow] = useState(false);

  return (
    <section className="breakfast-sect">
      <div className="Yam-Cont" key={item.id}>
        <section className="yamcont">
          <img src={item.imageUrl} className="Yam-img" alt="" />
          <span className="dis-cont">
            <span className="yamndegg">{item.itemName}</span>

            <span className="naira6">&#8358;{item.itemPrice}</span>
          </span>
        </section>

        <section>
          <section
            className="plusicon"
            onClick={() => {
              setShow(true);
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

                <MODA data={item} />
              </div>
            </section>
          </Modal>
        </section>
      </div>
    </section>
  );
};

export default Ricee;
