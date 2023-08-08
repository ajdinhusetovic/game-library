import React from 'react'
import './navbar.scss'
import { Link } from "react-router-dom"
import companyLogo from "../../assets/logo.svg"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-container">
                <img src={companyLogo} alt="" width={100} id='logo'/>
            </div>
            <div className="navbar-links">
                <Link to={"/"}>Home</Link>
                <Link to={"/browse"}>Browse</Link>
                <Link to={"/search"}>Search</Link>
                <Link to={"/about"}>About</Link>
            </div>
        </div>
    )
}
