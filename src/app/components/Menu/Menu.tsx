'use client'

import './styles.scss'
import { IoHomeOutline, IoMailOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa";
import { useState } from 'react';


const Menu = () => {

const [isHomeHovered, setIsHomeHovered] = useState(false);
const [isMoneyHovered, setIsMoneyHovered] = useState(false);
const [isEmailHovered, setIsEmailHovered] = useState(false);

const homeIconClasses = `menu-container__icons-wrapper__icon ${isHomeHovered ? 'menu-container__icons-wrapper__icon--hovered' : ''}`;
const moneyIconClasses = `menu-container__icons-wrapper__icon ${isMoneyHovered ? 'menu-container__icons-wrapper__icon--hovered' : ''}`;
const emailIconClasses = `menu-container__icons-wrapper__icon ${isEmailHovered ? 'menu-container__icons-wrapper__icon--hovered' : ''}`;  


  return (
    <nav className="menu-container">
      <div className="menu-container__icons-wrapper">
        <IoHomeOutline className={homeIconClasses} onMouseEnter={() => setIsHomeHovered(true)} onMouseLeave={() => setIsHomeHovered(false)}/>
        <FaDollarSign className={moneyIconClasses} onMouseEnter={() => setIsMoneyHovered(true)} onMouseLeave={() => setIsMoneyHovered(false)}/>
        <IoMailOutline className={emailIconClasses} onMouseEnter={() => setIsEmailHovered(true)} onMouseLeave={() => setIsEmailHovered(false)}/>
        
        </div>
    </nav>
  );
}

export default Menu 