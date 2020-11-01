import React from 'react'
import { Nav, Link } from 'styles/NavbarStyle'

const Navbar = () => {
    return (
        <Nav>
            <Link exact to={'/'} activeClassName="current-page"><i className="fas fa-home"></i></Link>
            <Link to={'/projects'} activeClassName="current-page"><i className="far fa-eye"></i></Link>
            <Link to={'/contact'} activeClassName="current-page"><i className="far fa-envelope"></i></Link>
        </Nav>
    )
}

export default Navbar