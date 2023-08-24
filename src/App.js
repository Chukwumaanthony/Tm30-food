// import logo from './logo.svg';
import "./App.css";
import Login from "./Login/login";
import Signuo from "./signup pg/signuo";
import Otp from "./Otp/Otpcode";
import Verify from "./Veriftotp/verify";
import Forget from "./Forget/forget";
import Confirm from "./reset/Confirm";
import OnBoard from "./Onboard/Onboard";
import Dash from "./Dashboard/dashboard";
import Service from "./Servicess/servIces";
import Settings from "./Settings/Settin";
import Profile from "./Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkoutspg from "./Checkout/Checkoutspg";
import { Toaster } from "react-hot-toast";
import WithCard from "./Paywithcard/WithCard";
import Corosel from "./Caruosel/Carosel";
import Test from "./test";
import Editt from "./Profile/editprofile";
import Reset from "./reset/Reset";
import Ricee from "./Rice/Riced";

function App() {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signuo />} />
          <Route path="/Otp" element={<Otp />} />
          <Route path="/verifyy" element={<Verify />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/Confirm" element={<Confirm />} />
          <Route path="/Onboard" element={<OnBoard />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/services" element={<Service />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/checkout" element={<Checkoutspg />} />
          <Route path="/Withcard" element={<WithCard />} />
          <Route path="/logout" element={<Corosel />} />
          <Route path="/Rice" element={<Ricee />} />
          <Route path="/prof" element={<Editt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
