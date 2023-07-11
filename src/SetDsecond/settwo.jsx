import React from 'react';
import Mastercard from "../image/mastercard.png"
// import Visa from "../image/Visas.png"
import {RiDeleteBin6Line} from "react-icons/ri"
import {BsArrowRight} from "react-icons/bs"
import Verve from "../image/verve.png"
import "./settwo.css"

const settwo = () => {
    const Cards = [
        {
            Text:'Ending with 2834',
            Image: Mastercard,
        },
        {
            Text:'Ending with 2834',
            // Image: Visa,
            Image:Verve
        },
        {
            Text:'Ending with 2834',
            Image: Verve,
        },
        {
            Text:'Ending with 2834',
            Image: Mastercard,
        },
        {
            Text:'Ending with 2834',
            Image:Mastercard
            // Image: Visa,
        }
    ]
  return (
    <div>
        <section>
               
        <section className='cardz-map'>
            {Cards?.map((T)=>{
                return(
                    <div className=' cardz'>
                        <img src={T.Image} alt="" />
                        {T.Text}
                    </div>
                )
            })}
        </section>
        <section className='delete-cardarr'>
            <span className='del-selcard'>
                Delete Selected Card
                <BsArrowRight/>
            </span>
            <button className='del-btn'>
                <RiDeleteBin6Line/>
                Delete Card
            </button>
        </section>

        </section>
       
    </div>
  )
}

export default settwo