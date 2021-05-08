import React from 'react'
import { Stacks } from 'components'
import { Container, Content, Text, Welcome } from 'styles/HomeStyles'

const Home = () => (
  <Container>
    <Content>
      <Welcome>
        <h1>Ruben Ponce</h1>
      </Welcome>
      <Text data-cy='description'>
        I'm a Full Stack Developer from Barcelona. I was graduated in{' '}
        <a
          href='https://www.skylabcoders.com/es'
          target='_blank'
          rel='noreferrer'>
          Skaylab Coders Academy
        </a>
        , and I'm currently working at{' '}
        <a href='https://www.spotlio.com/' target='_blank' rel='noreferrer'>
          Spotlio
        </a>
        . You can take a look at my projects and technologies that I have used.
        Anything, feel free to contact me.
      </Text>
    </Content>
    <Stacks />
  </Container>
)

export default Home
