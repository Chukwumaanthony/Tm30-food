import React from "react";
import Tmlogo from "../image/tmlogo.png";
import "./sidebar.css";
import { RiDashboardLine } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
// import { icons } from 'react-icons';

const Sidebar = () => {
  const dash = [
    {
      Name: "Dashboard",
      icon: <RiDashboardLine />,
      className: "Map",
      path: "/dash",
    },
    {
      Name: "Services",
      icon: <FiGlobe />,
      className: "Map",
      path: "/services",
    },
  ];

  const Dashtwo = [
    {
      Name: "Settings",
      icon: <FiSettings />,
      className: "Map",
      path: "/settings",
    },
    {
      Name: "Log Out",
      icon: <BiLogOut />,
      className: "Map",
      path: "/logout",
    },
  ];
  return (
    <div className="side-bar">
      <div>
        <img src={Tmlogo} alt="" style={{ width: "80px" }} />
      </div>
      {dash?.map((e) => {
        return (
          <NavLink to={e.path}>
            <div
              className="dash-loc"
              style={{
                background: `${
                  window.location.pathname === e.path ? "#36AAD9" : ""
                }`,
                color: `${window.location.pathname === e.path ? "white" : ""}`,
                borderRadius: `${
                  window.location.pathname === e.path ? "10px" : ""
                }`,
              }}
            >
              <span
                className="icon"
                style={{
                  color: `${
                    window.location.pathname === e.path ? "white" : ""
                  }`,
                }}
              >
                {" "}
                {e.icon}{" "}
              </span>
              <span
                className={e.className}
                style={{
                  color: `${
                    window.location.pathname === e.path ? "white" : ""
                  }`,
                }}
              >
                {" "}
                {e.Name}{" "}
              </span>
            </div>
          </NavLink>
        );
      })}
      <div>
        <hr className="horiz" />
      </div>

      {Dashtwo?.map((f) => {
        return (
          <NavLink to={f.path}>
            <div
              className="dash-loc"
              style={{
                background: `${
                  window.location.pathname === f.path ? "#36AAD9" : ""
                }`,
                color: `${window.location.pathname === f.path ? "white" : ""}`,
                borderRadius: `${
                  window.location.pathname === f.path ? "10px" : ""
                }`,
              }}
            >
              <span
                className="icon"
                style={{
                  color: `${
                    window.location.pathname === f.path ? "white" : ""
                  }`,
                }}
              >
                {" "}
                {f.icon}{" "}
              </span>
              <span
                className={f.className}
                style={{
                  color: `${
                    window.location.pathname === f.path ? "white" : ""
                  }`,
                }}
              >
                {" "}
                {f.Name}{" "}
              </span>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
