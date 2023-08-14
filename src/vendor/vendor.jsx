import React, { useState } from "react";
import "./vendors.css";
import Topvend from "./topvend";
import Othervend from "./othervend";

const Vendor = () => {
  const [top, setTop] = useState(true);
  const [other, setOther] = useState();
  return (
    <div className="Flexcontainer">
      <div className="topvend">
        <button
          onClick={() => {
            setTop(true);
            setOther(false);
          }}
          style={{
            background: top ? "#36aad9" : "",
            color: top ? "white" : "",
          }}
        >
          Top Vendors
        </button>
        <button
          onClick={() => {
            setOther(true);
            setTop(false);
          }}
          style={{
            background: other ? "#36aad9" : "",
            color: other ? "white" : "",
          }}
        >
          Other Vendors
        </button>
      </div>

      {top && <Topvend />}
      {other && <Othervend />}
    </div>
  );
};

export default Vendor;

// const [message, setMessage] = useState("");
// const Navigate = useNavigate();

//Try and Catch Method

// const requestOptions = {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${getToken}`,
//   },
// };

// useEffect(() => {
//   fetchData();
// });

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "http://89.38.135.41:7654/api/users/dashboard",
//       requestOptions
//     );
//     const result = await response.json();
//     console.log(result);
//     setMessage(result.data);

//     if (result.status) {
//       //   setTimeout(() => {
//       //     Navigate("/dash");
//       //   }, 5000);
//     }
//     console.log(result.status);
//     console.log(message);
//   } catch (error) {
//     console.log("error", error);
//   }
// };
