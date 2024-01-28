import React from 'react'
import "./navbarOption.scss"
import { Avatar } from '@mui/material'
function NavbarOption({avatar ,Icon , title, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
        <div className='navbarOption'onClick={handleClick}>
            {Icon && <Icon className="navbarOption_Icon" />}
            {avatar && <Avatar className='navbarOption_Icon' src={avatar} />}
            <h3 className='navbarOption_title'>{title}</h3>
        </div>
  )
}

export default NavbarOption