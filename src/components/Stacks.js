import React from 'react'
import { Html, Javascript, Css, Sass, ReactIcon, Next, Gatsby, Redux, Graphql, Apollo, Firebase, Mongodb, Node, Express, Babbel, Jest, Mocha, Chai } from 'components/icons/stacks'
import { StacksContainer, IconS, IconM, IconXL } from 'styles/StacksStyles'

const Stacks = () => {
    return (
        <StacksContainer data-cy="stacks">
            <IconS>
                <Html />
            </IconS>
            <IconS>
                <Javascript />
            </IconS>
            <IconS>
                <Css />
            </IconS>
            <IconM>
                <Sass />
            </IconM>
            <IconM>
                <ReactIcon />
            </IconM>
            <IconM>
                <Next />
            </IconM>
            <IconM>
                <Gatsby />
            </IconM>
            <IconM>
                <Redux />
            </IconM>
            <IconM>
                <Graphql />
            </IconM>
            <IconM>
                <Apollo />
            </IconM>
            <IconS>
                <Firebase />
            </IconS>
            <IconXL>
                <Mongodb />
            </IconXL>
            <IconM>
                <Node />
            </IconM>
            <IconXL>
                <Express />
            </IconXL>
            <IconM>
                <Babbel />
            </IconM>
            <IconM>
                <Jest />
            </IconM>
            <IconM>
                <Mocha />
            </IconM>
            <IconM>
                <Chai />
            </IconM>
        </StacksContainer>
    )
}

export default Stacks