import React from 'react'
import { GitHub, LinkedIn, Mail } from 'components/icons'
import { FooterContainer, Nav, Link } from 'styles/FooterStyles'

const Footer = () => {
    return (
        <FooterContainer>
            <Nav>
                <Link href="https://github.com/RPXIC" target="_blank" rel="noreferrer">
                    <GitHub />
                </Link>
                <Link href="https://www.linkedin.com/in/ruben-ponce-ca%C3%B1adas/" target="_blank" rel="noreferrer">
                    <LinkedIn />
                </Link>
                <Link href="mailto:rpc2works@gmail.com" target="_blank" rel="noreferrer">
                    <Mail />
                </Link>
            </Nav>
        </FooterContainer>
    )
}

export default Footer