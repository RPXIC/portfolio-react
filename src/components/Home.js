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
				I'm a Full Stack Developer from Barcelona. Recently graduated in
				Skaylab Coders Academy, I find myself looking to join a group of
				Developers while I continue deep learning more technologies. You
				can take a look at my projects and technologies that I have
				used. Anything, feel free to contact me.
			</Text>
		</Content>
		<Stacks />
	</Container>
)

export default Home
