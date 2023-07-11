import React, {useState} from 'react'
import logo from "../image/tmlogo.png";
import food from "../image/Food.png";
// import pass from "../image/pass.png";
import "./reset.css"
import Passlock from "../image/pass.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Reset = () => {
    const [resetInput, setResetInput] = useState('password')
    const [show, setshow] = useState(false)

    const handleShow = () => {
        setshow(!show)
       setResetInput(resetInput === 'password' ? 'text' : 'password')
    }

    const [inputOne, setInputOne] = useState("password")
    const [showTwo, setshowtwo] = useState(false)

    const handleShowTwo = () =>{
        setshowtwo(!showTwo)
       setInputOne(inputOne === "password" ? "text" : "password")
    }
  return (
    <div className="login">
    <div className="left-side">
      <img className="img" src={logo} alt="" srcset="" />

      <div className="food">
        <img className="foods" src={food} alt="" srcset="" />
        <p>
          <b>Order your</b> favorite Lunch
        </p>
        <b>&</b>
        <p>
          Enjoy other <b>Services</b>
        </p>
        <p className="para"></p>
      </div>
    </div>

    <div className="right-side">
      <div className='resethold'>
        <div className='pathone'>
        <span className='passreset'>Reset Password</span>
        <span className='passresetbuttom'>Here you have to reset password</span>
        </div>
        

        <div>
            <label className='newpass'>Create New Password</label>
            <section className='setlocks-a'>
                <div className='resetimg'>
                    <img src={Passlock} alt=''/>
                </div>
                <div className='resetinputs'>
                    <input 
                    className='resetinput' 
                    placeholder='Enter New Password'
                    type={inputOne}                    
                    />
                <button onClick={handleShowTwo}  className="btnss">{showTwo ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
                </div>
            </section>
        </div>

        <div>
            <label className='newpass'>Confirm New Password</label>
            <section className='setlocks-a'>
                <div className='resetimg'>
                    <img src={Passlock} alt=''/>
                </div>
                <div className='resetinputs'>
                    <input 
                    className='resetinput' 
                    placeholder='Confirm New Password'
                    type={resetInput}
                    />
                <button onClick={handleShow}  className="btnss">{show ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}</button>
                </div>
                
            </section>
        </div>
          <button className='resettt'>Reset password</button>

      </div>
    </div>
  </div>
  )
}

export default Reset