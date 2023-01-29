import React, { useState } from 'react';
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';
import logo from '../../assets/images/logo.png'
import { useAuth } from '../../utils/firebase';
import Auth from '../auth';

const Header = () => {

  const [authenticationModal, setAuthenticationModal] = useState<boolean>(false)
  const [mobNav, setMobNav] = useState<string>("none");
  const [mobNavMarginWithAuth, setmobNavMarginWithAuth] = useState<number>(0);
  const currentUser:any = useAuth();

  const handleModal = () => {
     setAuthenticationModal(!authenticationModal);
     console.log("authenticationModal: " + authenticationModal);
     //handleNavAndAuth
     if(!authenticationModal) setmobNavMarginWithAuth(330);
     else if(authenticationModal) setmobNavMarginWithAuth(0);
     console.log("mobnav: " + mobNavMarginWithAuth);
  }

  {currentUser?.email ? console.log("curren tUser: "+ currentUser.email):console.log("User probably logged off ("+ currentUser + ")")}
  //console.log(authenticationModal);
  
  const setModalClose = () => {
    setAuthenticationModal(false);
  }
  
  const handleBurger = () => {
    if(mobNav=="none") setMobNav("block");
    else if(mobNav=="block") setMobNav("none");
    console.log("hangleBurger display: " + mobNav);
  }

  const mobNavCss = {
    display: "block"
  };

  return (
    <header>
      <nav className="main-header">
        <div className="logo">
          <Image src={logo} alt="logo" width="90px" height="80px"/>
        </div>
        <div className="navigation">
          <ul className="pagesList">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'about-us'}>About Us</Link></li>
            <li><Link href={'contacts'}>Contacts</Link></li>
            <li onClick={handleModal}>{authenticationModal ? "Profile" : "Profile"}</li>
            {authenticationModal === true && <Auth setModalClose={setModalClose}/>}
            <li><Link href={'/'}>...</Link></li>
          </ul>
        </div>
      </nav>

      <nav className="mob-header">
        <div className="logo">
          <Image src={logo} alt="logo" width="90px" height="80px"/>
        </div>
        <div className="navigation">
          <ul className="pagesList" style={{display: mobNav, paddingTop: mobNavMarginWithAuth}}>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'about-us'}>About Us</Link></li>
            <li><Link href={'contacts'}>Contacts</Link></li>
            <li onClick={handleModal}>{authenticationModal ? "Profile" : "Profile"}</li>
            {authenticationModal === true && <Auth setModalClose={setModalClose}/>}
            <li><Link href={'/'}>...</Link></li>
          </ul>
        </div>
        <div className="burger"><span onClick={handleBurger}>X</span></div>
      </nav>
    </header>
  );
};

export default Header;