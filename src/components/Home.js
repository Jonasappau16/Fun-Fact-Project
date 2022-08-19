import React from 'react'
import  {Link, withRouter } from 'react-router-dom'
import ChelseaLogo from '../Chelsea-Logo.png'

const Home = () => {
return (
    <nav className="nav-wrapper blue darken-3">
    <div className="container">
    <img src={ChelseaLogo} alt="logo" className="logo"/>
        <Link to="/postOne">FactOne </Link>
        <Link to="/postTwo"> FactTwo </Link>           
        <Link to="/postThree"> FactThree </Link>
    </div>
</nav>

)
}

export default withRouter(Home)