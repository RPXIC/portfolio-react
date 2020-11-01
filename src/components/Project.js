import React from 'react'
import { Title, ListFlex, ImageDato, Description, Stack } from 'styles/ProjectStyles'

const Project = ({ project }) => {
    const { title, description, stack, website, image: { responsiveImage } } = project

    return (
        <ListFlex>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <a href={website} target="_blank" rel="noreferrer">
                <ImageDato data={responsiveImage} />
            </a>
            <Stack>{stack}</Stack>
        </ListFlex>
    )
}

export default Project