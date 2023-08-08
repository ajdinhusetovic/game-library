import React from 'react'
import { Link } from "react-router-dom"
import companyLogo from "../../assets/logo.png"

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo-container">
                <img src={companyLogo} alt="" width={100} />
            </div>
            <Link to={"/"}>Home</Link>
            <Link to={"/browse"}>Browse</Link>
            <Link to={"/search"}>Search</Link>
            <Link to={"/about"}>About</Link>
        </div>
    )
}
