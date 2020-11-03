import React from 'react'
import { Nav, Link } from 'styles/NavbarStyle'

const Navbar = () => {
    return (
        <Nav>
            <Link exact to={'/'} activeClassName="current-page" title="About"><i className="fas fa-home"></i></Link>
            <Link to={'/projects'} activeClassName="current-page" title="Projects"><i className="far fa-eye"></i></Link>
        </Nav>
    )
}

export default Navbar