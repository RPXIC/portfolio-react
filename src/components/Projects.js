import React from "react"
import { ProjectsList } from 'components'
import { Title } from 'styles/ProjectsStyles'
import { useQuery } from 'graphql-hooks'

const PROJECTS_QUERY = `query {
	allProjects {
        id
        title
        description
        stack
        website
        image {
            responsiveImage(imgixParams: { fit: crop, w: 257, h: 460, auto: format }){
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
        }
    }
}`

const Projects = () => {
    const { loading, error, data } = useQuery(PROJECTS_QUERY)

    if (loading) return null

    const { allProjects } = data

    return (
        <>
            <Title>Projects</Title>
            {!error && 
                <ProjectsList projects={allProjects} />
            }
        </>
    )
}

export default Projects