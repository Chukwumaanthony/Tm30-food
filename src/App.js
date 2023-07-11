// import logo from './logo.svg';
import './App.css';
import Login from './Login/login';
import Signuo from './signup pg/signuo';
import Otp from './Otp/otp';
import Verify from './Veriftotp/verify';
import Forget from './Forget/forget';
import Reset from "./ResetPass/reset";
import OnBoard from "./Onboard/Onboard";
import Dash from "./Dashboard/dashboard";
import Service from './Servicess/servIces';
import Settings from "./Settings/Settin";
import Profile from './Profile/Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
     <Router>
      <Routes>   
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signuo />} />
        <Route path="/Otp" element={<Otp/>} />
        <Route path="/verifyy" element={<Verify/>} />
        <Route path="/forget" element={<Forget/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/Onboard" element={<OnBoard/>}/>
        <Route path="/dash" element={<Dash/>}/>
        <Route path= "/services" element={<Service/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
