import axios from "axios";
import Loadingstate from "../Animations/anime.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";
import React, { createContext, useEffect, useState } from "react";

export const VendorContext = createContext();

const VendorContextProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [data, setdata] = useState([]);
  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");
  const [cartChecker, setCartChecker] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://89.38.135.41:7654/api/users/vendors?vendorId=${vendorId}`,
        config
      )
      .then((response) => {
        setdata(response.data.data);
      })
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [window.location.pathname]);
  return (
    <div>
      {" "}
      <VendorContext.Provider
        value={{
          data: data,
          loading: loading,
          cartChecker: cartChecker,
          setCartChecker: setCartChecker,
        }}
      >
        {children}
      </VendorContext.Provider>
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

export default VendorContextProvider;
