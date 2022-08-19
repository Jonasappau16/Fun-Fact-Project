import React from "react";
import chelseaLogo from "../Chelsea-Logo.png"
import { Link, withRouter, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
         
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <img src={chelseaLogo} alt="logo" className="logo"/> 
                <Link to="/" className="text-head">Fact one</Link>
                <Link to="/facttwo" className="text-head">Fact two</Link>           
                <NavLink to="/factthree" className="text-head">Fact three</NavLink>
            </div>
        </nav>
       
    )
}

export default withRouter(Navbar)