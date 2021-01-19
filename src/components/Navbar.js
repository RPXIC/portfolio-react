import React from 'react'
import { Home, Eye } from 'components/icons'
import { Nav, Link } from 'styles/NavbarStyle'

const Navbar = () => (
	<Nav data-cy='navbar'>
		<Link
			exact
			to={'/'}
			activeClassName='current-page'
			title='About'
			data-cy='link-home'>
			<Home />
		</Link>
		<Link
			to={'/projects'}
			activeClassName='current-page'
			title='Projects'
			data-cy='link-projects'>
			<Eye />
		</Link>
	</Nav>
)

export default Navbar
