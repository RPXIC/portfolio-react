import React from 'react'
import { Project } from 'components'
import { Container } from 'styles/ProjectsListStyles'

const ProjectsList = ({ projects }) => {
    
    if (projects.length === 0) return <p>No projects</p>

    return (
        <Container>
            { projects.map(project => (
                <Project 
                    key={project.id}
                    project={project}
                />
            ))}
        </Container>
    )
}

export default ProjectsList