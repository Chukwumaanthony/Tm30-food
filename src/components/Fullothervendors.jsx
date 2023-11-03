import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Loadingstate from "../Animations/anime.svg";
import Modal from "../Modal/Modal";
import classes from "../styled.module.css";

const Fullothervendors = () => {
  const [loading, setloading] = useState(true);
  const [vendorlist, setVendorlist] = useState([]);

  console.log(vendorlist);

  useEffect(() => {
    setloading(true);

    axios
      .get("http://89.38.135.41:7654/api/auth/landing-page")
      .then((response) => {
        setVendorlist(response.data.data);
      })
      .then((res) => {
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }, []);
  return (
    <Container>
      <div className="mamajline-top">
        {vendorlist?.map((a) => {
          console.log(a);
          return (
            <section
              onClick={() => {
                localStorage.setItem("vendorId", a.id);
              }}
              className="mamajsec"
            >
              <Link className="the-dash">
                <span>
                  <img className="mamaj" src={a.vendorImageUrl} alt="" />
                </span>
                <span className="Mamajtext">{a.vendorBusinessName}</span>
              </Link>
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

export default Fullothervendors;
const Container = styled.div`
  .the-dash {
    display: flex;
    flex-direction: column;
  }
`;
