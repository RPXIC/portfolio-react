import React from 'react'
import { GitHub, LinkedIn, Mail /*, Download*/ } from 'components/icons'
import { FooterContainer, Nav, Link /*, CVLink*/ } from 'styles/FooterStyles'
// import { useQuery } from 'graphql-hooks'
// import { DOCS_QUERY } from 'queries/queries'

const Footer = () => {
  // const { loading, error, data } = useQuery(DOCS_QUERY)

  // if (loading) return <FooterContainer></FooterContainer>

  // const {
  // 	cv: { url },
  // } = data.allDocs[0]

  return (
    <FooterContainer>
      <Nav data-cy='navbar-footer'>
        <Link
          href='https://github.com/RPXIC'
          target='_blank'
          rel='noreferrer'
          title='GitHub'
          data-cy='link-github'>
          <GitHub />
        </Link>
        <Link
          href='https://www.linkedin.com/in/ruben-ponce-ca%C3%B1adas/'
          target='_blank'
          rel='noreferrer'
          title='LinkedIn'
          data-cy='link-linkedin'>
          <LinkedIn />
        </Link>
        <Link
          href='mailto:rpc2works@gmail.com'
          target='_blank'
          rel='noreferrer'
          title='Mail'
          data-cy='link-mail'>
          <Mail />
        </Link>
        {/* {!error && (
					<CVLink
						href={url}
						target='_blank'
						rel='noreferrer'
						title='CV'
						data-cy='link-cv'>
						<Download />
					</CVLink>
				)} */}
      </Nav>
    </FooterContainer>
  )
}

export default Footer
