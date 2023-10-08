import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProfileContext = createContext();

const ProfileContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const getToken = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  };
  useEffect(() => {
    axios
      .get("http://89.38.135.41:7654/api/users/profile", config)
      .then((response) => {
        setData(response.data.data);
      });
  }, []);
  return (
    <ProfileContext.Provider value={{ data: data }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContextProvider;
