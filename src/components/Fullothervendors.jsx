import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Fullothervendors = () => {
  const [vendorlist, setVendorlist] = useState([]);

  //   const [data, setData] = useState({});

  console.log(vendorlist);

  useEffect(() => {
    axios
      .get("http://89.38.135.41:7654/api/auth/landing-page")
      .then((response) => {
        setVendorlist(response.data.data);
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
