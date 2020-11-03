import React from 'react'
import { Home, Eye } from 'components/icons'
import { Nav, Link } from 'styles/NavbarStyle'

const Navbar = () => {
    return (
        <Nav>
            <Link exact to={'/'} activeClassName="current-page" title="About"><Home /></Link>
            <Link to={'/projects'} activeClassName="current-page" title="Projects"><Eye /></Link>
        </Nav>
    )
}

export default Navbar