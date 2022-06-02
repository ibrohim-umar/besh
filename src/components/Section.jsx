import React from 'react'
import './styles/Section.css'
import  Pishakcha from './photo/pishakcha.jpg'

const Section = () => {
  return (
    <div className='section' >
           <div className="section-left">
                <h3>HELLO MY NAME IS</h3>
                <h1>ANDREW HERKEN</h1>
                
                <p>professional front-end react-js developer with 5 years of experiant and 3 the same position </p>
                <button>MY WORK</button>
           </div>
           <div className="section-right">
               <img src={Pishakcha} alt="" />
           </div>

    </div>
  )
}

export default Section