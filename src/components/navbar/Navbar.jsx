import '../../scss/navbar.scss'
import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbar-wrapper">
                <div className="logo-container">
                    <h1 id='title'>Game Tag</h1>
                </div>
                <div className="navbar-links">
                    <Link to={"/"}>Home</Link>
                    <Link to={"/browse"}>Browse</Link>
                    <Link to={"/search"}>Search</Link>
                    <Link to={"/about"}>About</Link>
                </div>
            </div>
        </div>
    )
}
