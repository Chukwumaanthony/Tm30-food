import React, { useEffect, useState } from "react";
import axios from "axios";
import Loadingstate from "../Animations/anime.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";

const Othervend = () => {
  const [vendorlist, setVendorlist] = useState([]);
  const [loading, setloading] = useState(true);
  const getToken = localStorage.getItem("token");
  // const vendorids = localStorage.getItem("vendorId");

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  const Url = "http://89.38.135.41:7654/api/users/company-vendors";
  useEffect(() => {
    setloading(true);

    axios
      .get(Url, config)
      .then(function (response) {
        setloading(false);
        setVendorlist(response.data.data);
        // console.log(response.data.data);
      })
      .catch(function (error) {
        setloading(false);
        console.log("Error:", error);
      });
  }, []);
  return (
    <div>
      <div className="mamajline-top">
        {vendorlist?.map((a) => {
          console.log(a);
          return (
            <section
              onClick={() => {
                localStorage.setItem("vendorId", a.id);
                window.location = "/dash";
              }}
              className="mamajsec"
            >
              <span>
                <img className="mamaj" src={a.vendorImageUrl} alt="" />
              </span>
              <span className="Mamajtext">{a.vendorBusinessName}</span>
            </section>
          );
        })}
      </div>

      <Modal open={loading}>
        <section className={classes.modalBackground}>
          <div>
            <img
              className={classes.loadingState}
              src={Loadingstate}
              alt=""
              srcset=""
            />
          </div>
        </section>
      </Modal>
    </div>
  );
};

export default Othervend;
