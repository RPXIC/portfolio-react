import React from "react"
import { Stacks, Seo } from 'components'
import { Container, Content, Title, Text, Name, Welcome, W1, W2, W3, W4, W5 } from 'styles/HomeStyles'

const Home = () => {
    return (
        <>
            <Seo />
            <Container>
                <Content>
                    <Welcome>
                        <div>
                            <W1>WELCOME</W1>
                            <W2>TO</W2>
                            <W3>MY</W3>
                            <W4>PORTFOLIO</W4>
                            <W5>
                                <Title>Hey! I'm <Name>Ruben</Name></Title>
                            </W5>
                        </div>
                    </Welcome>
                    <Text>I'm a Full Stack Developer from Barcelona. Recently graduated in Skaylab Coders Academy, i find myself looking to join a group of Developers while I continue deep learning more technologies. You can take a look at my projects and technologies that I have used. Anything, feel free to contact me.</Text>
                </Content>
                <Stacks />
            </Container>
        </>
    )
}

export default Home