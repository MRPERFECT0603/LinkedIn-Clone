import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./header.scss";
import NavbarOption from "../NavbarOption/navbarOption";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import { signOut } from 'firebase/auth';
import { auth } from '../../config';
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate = useNavigate();
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };


  return (
    <div className='header'>
      <div className='header__left'>
        <img src="./linkedin.png" alt="" />
        {/* <LinkedInIcon /> */}
        <div className='headerSearch'>
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className='header__right'>
        <NavbarOption Icon={HomeOutlinedIcon} title='Home' />
        <NavbarOption Icon={SupervisorAccountOutlinedIcon} title='My Network' />
        <NavbarOption Icon={BusinessCenterOutlinedIcon} title='Jobs' />
        <NavbarOption Icon={SmsOutlinedIcon} title='Messaging' />
        <NavbarOption Icon={NotificationsActiveOutlinedIcon} title='Notifications' />
        <NavbarOption onClick={logout} avatar="./Post2.jpeg" title="me" />
      </div>
    </div>
  )
}

export default Header