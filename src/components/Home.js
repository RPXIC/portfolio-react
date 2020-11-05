import React from "react"
import { Container, Title, SubTitle, Name, Advice, Welcome, W1, W2, W3, W4, W5 } from 'styles/HomeStyles'

const Home = () => (
    <Container>
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
        <SubTitle>A Full Stack Developer</SubTitle>
        <Advice>Under construction...</Advice>
    </Container>
)

export default Home