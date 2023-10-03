import "./App.css";
import Login from "./pages/Login";
import Signuo from "./signup pg/signuo";
import Otp from "./pages/Otpcode";
import Verify from "./Veriftotp/verify";
import Forget from "./pages/Forget";
import Confirm from "./reset/Confirm";
import OnBoard from "./pages/Onboard";
import Dash from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Settings from "./Settings/Settin";
// import Checkoutspg from "./components/Checkoutspg";
// import WithCard from "./components/WithCard";
// import Corosel from "./Caruosel/Carosel";
import { Toaster } from "react-hot-toast";
import Test from "./test";
import Editt from "./components/Editprofile";
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
          <Route path="/otp" element={<Otp />} />
          <Route path="/verifyy" element={<Verify />} />
          <Route path="/forget" element={<Forget />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/onboard" element={<OnBoard />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/settings" element={<Settings />} /> */}
          {/* <Route path="/checkout" element={<Checkoutspg />} /> */}
          {/* <Route path="/withcard" element={<WithCard />} /> */}
          {/* <Route path="/logout" element={<Corosel />} /> */}
          <Route path="/rice" element={<Ricee />} />
          <Route path="/prof" element={<Editt />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
