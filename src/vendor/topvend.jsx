import React, { useEffect, useState } from "react";
import axios from "axios";

const Topvend = () => {
  const [vendorlist, setVendorlist] = useState([]);
  const getToken = localStorage.getItem("token");
  // const vendorids = localStorage.getItem("vendorId");

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  const Url = "http://89.38.135.41:7654/api/admin/all-vendors";
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
    <div>
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
              <span>
                <img className="mamaj" src={a.vendorImageUrl} alt="" />
              </span>
              <span className="Mamajtext">{a.businessName}</span>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Topvend;
