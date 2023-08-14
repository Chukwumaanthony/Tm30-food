import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const VendorContext = createContext();

const VendorContextProvider = ({ children }) => {
  const [loading, setLoading] = useState();
  const [data, setdata] = useState([]);
  const vendorId = localStorage.getItem("vendorId");
  const getToken = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://89.38.135.41:7654/api/users/vendors/${vendorId}`, config)
      .then((response) => {
        console.log(response?.data.data);
        setdata(response.data.data);
        setLoading(false);
      });
  }, []);
  return (
    <VendorContext.Provider value={{ data: data, loading: loading }}>
      {children}
    </VendorContext.Provider>
  );
};

export default VendorContextProvider;
