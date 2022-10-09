import React from 'react';
import Link from '../../node_modules/next/link';
import Image from '../../node_modules/next/image';
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <footer>
       <div className="info">
       <Image src={logo} alt="logo" width="70px" height="60px"/>
       </div>
       <div><p>... 2022, © All rights reserved</p></div>
       <div className="nav">
          <ul className="pagesList">
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/about-us'}>About Us</Link></li>
            <li><Link href={'contacts'}>Contacts</Link></li>
            <li><Link href={'/'}>...</Link></li>
        </ul>
       </div>
    </footer>
  );
};

export default Footer;