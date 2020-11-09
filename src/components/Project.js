import React from 'react'
import { Title, ListFlex, ImageDato, Description, Stack } from 'styles/ProjectStyles'

const Project = ({ project }) => {
    const { title, description, stack, website, image: { responsiveImage } } = project

    return (
        <ListFlex data-cy="project-container">
            <Title data-cy="project-title">{title}</Title>
            <Description data-cy="project-description">{description}</Description>
            <a href={website} target="_blank" rel="noreferrer" data-cy="project-link">
                <ImageDato data={responsiveImage} />
            </a>
            <Stack data-cy="project-stack">{stack}</Stack>
        </ListFlex>
    )
}

export default Project