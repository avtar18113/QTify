import React from 'react'
import "./Logo.css";
import BrandLogo from "../../assets/BrandLogo.png"
const Logo = () => {
  return (
    <div className="logo">
     <img src={BrandLogo} alt='logo' width={67} />
    </div>
  );
};

export default Logo;