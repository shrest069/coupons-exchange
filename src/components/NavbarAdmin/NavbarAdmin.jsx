import React from "react";
import "./NavbarAdmin.css";
import { assets } from "../../assets/assets";
import { useNavigate, Link } from "react-router-dom";

const NavbarAdmin = () => {
  const navigate = useNavigate();
  const navToHome = () =>{
    navigate("/");
  }
  return (
    <div className="navbar">
      <Link to="/">
        <img onClick={()=>setAdminPanel(false)} className="logo" src={assets.logo} alt="" />
      </Link>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default NavbarAdmin;
