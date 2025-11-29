import React, { useState } from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../assets/teslaLogoSmall.svg'


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <div className= 'header'>
        <div className="header__logo">
            <img src={logo} alt=" tesla logo" />
        </div>
        <div className="header__center">
            <p><a href="#">Model S</a></p>
            <p><a href="#">Model 3</a></p>
            <p><a href="#">Model X</a></p>
            <p><a href="#">Model Y</a></p>
            <p><a href="#">Solar Roof</a></p>
            <p><a href="#">Solar Panels</a></p>
        </div>
        <div className="header__rignt">
            <p><a href="#">Shop</a></p>
            <p><a href="#">Account</a></p>
            <div className="header__menu" onClick={()=>setBurgerStatus(true)}>
                <MenuIcon />
            </div>
        </div>

        <div className="burgerNav" style={{transform: burgerStatus ? 'translateX(0)': 'translateX(100%)'}}>
            <div className="closeWrapper">
                <div className="customClose" onClick={()=>setBurgerStatus(false)}>
                    <CloseIcon />
                </div>
            </div>
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model 3</a></li>
            <li><a href="#">Model X</a></li>
            <li><a href="#">Model Y</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
        </div>

    </div>
  


  )
}

export default Header