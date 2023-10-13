import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Topvend = () => {
  const [vendorlist, setVendorlist] = useState([]);
  const getToken = localStorage.getItem("token");
  // const vendorids = localStorage.getItem("vendorId");

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  const Url = "http://89.38.135.41:7654/api/users/company-vendors";
  useEffect(() => {
    axios
      .get(Url, config)
      .then(function (response) {
        setVendorlist(response.data.data);
      })
      .catch(function (error) {
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
              }}
              className="mamajsec"
            >
              <Link className="the-dash" to="/dash">
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

export default Topvend;
const Container = styled.div`
  .the-dash {
    display: flex;
    flex-direction: column;
  }
`;
