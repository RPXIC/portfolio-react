import React from 'react'
import { Helmet } from 'react-helmet'
import { useQuery } from 'graphql-hooks'
import { ProjectsList } from 'components'
import { PROJECTS_QUERY } from 'queries/queries'

const Projects = () => {
	const { loading, error, data } = useQuery(PROJECTS_QUERY)

	if (loading)
		return (
			<Helmet>
				<title>Loading...</title>
			</Helmet>
		)

	const { allProjects } = data

	return !error ? <ProjectsList projects={allProjects} /> : <></>
}

export default Projects
