import React from 'react'
import Sidebar from '../SidebarDash/Sidebar'
import Navbar from '../Navbar/Navbar'
import {FaLongArrowAltLeft} from "react-icons/fa"
import Pics from "../image/pic.png";
import Changeprofile from "../image/lucide_edit.png"
import Deleteprofile from "../image/Vector.png"

import "./profile.css"

const Profile = () => {
  return (
    <div className='ni'>
        <Sidebar/>
        <div className='nnna'>
            <Navbar/>
            <div className='prod-padd'>
                <span className='backicon'>
                    <FaLongArrowAltLeft/>
                    Back
                </span>
               <div className='back-img'>
               <section className='Papawelcome'>
                <section className='Welcomepeter'>
                    <span className='hipeter'>Hi, Peters</span>
                    <span className='welcomepeter'>Welcome to your profile!</span>
                   </section>
                   <section className='ade-image'>
                    Adeleke Peters
                    <img style={{width:"40px"}} src={Pics} alt="" />
                   </section>
                 </section>
                  
               </div>
               <section className='dpicssect'>
                   <div className='pics-change-delete'>
                    <span className='image-profine'>
                      <img src={Pics} alt="" />
                    </span>
                    <span  className='changeprofiles'>
                      <div className='prof-pics'>
                        <img style={{width:"18px"}} src={Changeprofile} alt="" />
                        Change profile picture
                      </div>
                      <div className='prof-pics'>
                        <img style={{width:"20px"}} src={Deleteprofile} alt="" />
                        Delete profile picture
                      </div>
                    </span>

                   </div>
                   <div className='picdelsel'>
                      <span style={{borderBottom:"1px solid #ececec"}} className='picdel'>
                         <label htmlFor="" className='firstnamelabel'>First Name</label>
                         <span className='ade-leke'>Adeleke</span>
                      </span>
                      <span style={{borderLeft:"1px solid #ececec", borderBottom:"1px solid #ececec"}} className='picdel'>
                         <label htmlFor="" className='firstnamelabel'>Last Name</label>
                         <span className='ade-leke'>Peters</span>
                      </span>
                      <span className='picdel'>
                         <label htmlFor="" className='firstnamelabel'>Email Address </label>
                         <span className='ade-leke'>Adelekepeters@gmail.com</span>
                      </span>
                      <span style={{borderLeft:"1px solid #ececec"}} className='picdel'>
                         <label htmlFor="" className='firstnamelabel'>Phone Number</label>
                         <span className='ade-leke'>07083225145</span>
                      </span>
                      
                   </div>
                   <div className='prof-butdiv'>
                   <button className='edit-prof'>Edit Profile</button>
                   </div>
               </section>
            </div>
        </div>
    </div>
  )
}

export default Profile