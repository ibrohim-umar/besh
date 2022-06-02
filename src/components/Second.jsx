import React from 'react'
import './styles/Second.css'
import pishakcha from './photo/pishakcha.jpg'

const Second = () => {
  return (
    <div className='second' >
           <div className="second-right">
               <p>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, ducimus illum blanditiis tempora laboriosam numquam nostrum doloremque rem itaque repellat animi atque expedita eius. Dolores qui cumque itaque voluptate omnis non pariatur quod, commodi natus. Neque assumenda tempore vel quidem.
               </p>
           </div>

           <div className="second-left">
               <img src={pishakcha} alt="" />
           </div>
    </div>
  )
}

export default Second