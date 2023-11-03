import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loadingstate from "../Animations/anime.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";

const Topvend = () => {
  const [vendorlist, setVendorlist] = useState([]);
  const getToken = localStorage.getItem("token");
  const [loading, setloading] = useState(true);
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
        setVendorlist(response.data.data);
        setloading(false);
      })
      .catch(function (error) {
        setloading(false);
        console.log("Error:", error);
      });
  }, []);
  return (
    <Container>
      <div className="mamajline-top">
        {vendorlist.slice(0, 4)?.map((a) => {
          console.log(a);
          return (
            <section
              onClick={() => {
                localStorage.setItem("vendorId", a.id);
                window.location = "/dash";
              }}
              className="mamajsec"
            >
              {/* <Link className="the-dash" to="/dash"> */}
              <span>
                <img className="mamaj" src={a.vendorImageUrl} alt="" />
              </span>
              <span className="Mamajtext">{a.vendorBusinessName}</span>
              {/* </Link> */}
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
    </Container>
  );
};

export default Topvend;
const Container = styled.div`
  .the-dash {
    display: flex;
    flex-direction: column;
  }
`;
