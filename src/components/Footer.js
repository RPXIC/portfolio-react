import React from 'react'
import { GitHub, LinkedIn, Mail, Download } from 'components/icons'
import { FooterContainer, Nav, Link, CVLink } from 'styles/FooterStyles'
import { useQuery } from 'graphql-hooks'

const DOCS_QUERY = `query {
	allDocs {
        cv {
            url
        }
    }
}`

const Footer = () => {
    const { loading, error, data } = useQuery(DOCS_QUERY)

    if (loading) return null

    const { cv: { url } } = data.allDocs[0]

    return (
        <FooterContainer>
            <Nav>
                <Link href="https://github.com/RPXIC" target="_blank" rel="noreferrer" title="GitHub">
                    <GitHub />
                </Link>
                <Link href="https://www.linkedin.com/in/ruben-ponce-ca%C3%B1adas/" target="_blank" rel="noreferrer" title="LinkedIn">
                    <LinkedIn />
                </Link>
                <Link href="mailto:rpc2works@gmail.com" target="_blank" rel="noreferrer" title="Mail">
                    <Mail />
                </Link>
                {!error && <CVLink href={url} target="_blank" rel="noreferrer" title="CV">
                    <Download />
                </CVLink>}
            </Nav>
        </FooterContainer>
    )
}

export default Footer