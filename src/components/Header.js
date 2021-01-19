import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from 'components'
import {
	Container,
	Content,
	NavContainer,
	Path,
	PathText,
} from 'styles/HeaderStyles'

const Header = () => {
	const location = useLocation()
	const path =
		location.pathname === '/' ? '<!-- Home -->' : '<!-- Projects -->'

	return (
		<Container>
			<Content>
				<Path>
					<PathText data-cy='logo'>{path}</PathText>
				</Path>
				<NavContainer>
					<Navbar />
				</NavContainer>
			</Content>
		</Container>
	)
}

export default Header
