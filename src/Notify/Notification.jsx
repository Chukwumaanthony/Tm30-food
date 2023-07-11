import React from 'react'
import "./notification.css"
import   {BsCheckAll} from "react-icons/bs"
import passchange from "../image/notcard (2).png"
import passchange2 from "../image/notcard (3).png"
import passchange3 from "../image/notcard (1).png"


const Notification = () => {
  const Notify = [
    {
      Name: "Your password has been successfully changed.",
      date: "May 22,2023 at 11:15 am",
      Image: passchange,
    },
    {
      Name: "Your password has been successfully changed.",
      date: "May 22,2023 at 11:15 am",
      Image: passchange2,
      className:"notifymap"
    },
    {
      Name: "Your password has been successfully changed.",
      date: "May 22,2023 at 11:15 am",
      Image: passchange2,
      className:"notifymap"
    },
    {
      Name: "Your password has been successfully changed.",
      date: "May 22,2023 at 11:15 am",
      Image: passchange3,
      className:"notifymap"
    },
    {
      Name: "Your password has been successfully changed.",
      date: "May 22,2023 at 11:15 am",
      Image: passchange3,
      className:"notifymap"
    },
  ]
  return (
    <div className='notifymap'>
          {Notify.map((Note) => {
            return(
              <section className='not-passlock'>
              <div>
                <img src={Note.Image} alt="" style={{width:"50px"}} />
              </div>
              <div className='passchange-succ'>
                <span className='password-note'>{Note.Name}</span>
                <span className='notedate'> {Note.date}</span>
              </div>
            </section>
            )   
          })}
          <div className='dbuttnot'>
            <button className='viewallnot'>View all notifications</button>
            <button className='viewallnott'>
             <BsCheckAll/>
              Mark all as read
              </button>
          </div>
    </div>
  )
}

export default Notification