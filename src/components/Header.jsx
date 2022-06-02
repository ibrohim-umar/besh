import { CloseOutlined, MenuOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import {Link}  from 'react-router-dom'
import './styles/Header.css'
const Header = () => {

    const [menu, setMenu] = useState(false)

    const showMenu = () => {
        setMenu(!menu)
    }

  return (
      <div>
    <div className='header' >

      <nav className="container">
          
          <div className="logo">
              <h1>Emim .</h1>
          </div>

          <div className="right">
              <ul className="right-ul">
                  <li className="right-li">
                      <Link to='/' > Home </Link>
                      <Link to='/about' > About </Link>
                      <Link to='/Ser' > Services </Link>
                      <Link to='/pr' > Projects </Link>
                      <Link to='/bl' > Blog </Link>
                      <Link to='/con' > Contacts </Link>
                  </li>
              </ul>
              <div className="menu">
                  <MenuOutlined  className='menu-icon' onClick={showMenu} />
              </div>
          </div>
      </nav>

      <nav className={menu ? 'slider-active' : 'slider'} onClick={showMenu} >
          <ul className='menu-ul' >
              <li className="menu-li">
                  
                  <Link onClick={showMenu}  to='/' >Home</Link>
                  <Link to='/about'>About</Link>
                  <Link to='/' >Contact</Link>
                  <Link to='/' >Services</Link>
                  <Link to='/' >Blog</Link>
              </li>
          </ul>

      </nav>

    </div>
    </div>
  )
}

export default Header