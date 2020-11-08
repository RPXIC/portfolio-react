import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 73vh;
    @media (min-width: 768px) {
        min-height: 82vh;
    }
    @media (min-width: 1024px) {
        justify-content: space-between;
        min-height: 100vh;
    }
`

export const Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-grow: 1;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
    @media (max-width: 450px) {
        font-size: 3rem;
    }
    @media (min-width: 1025px) {
        margin: 2rem 0 10rem;
    }
`

export const Text = styled.h3`
    text-align: center;
    width: 80%;
    text-align: center;
    margin: 1rem auto;
    letter-spacing: .3rem;
    line-height: 2.5;
    @media (max-width: 450px) {
        letter-spacing: .1rem;
        line-height: 1.1;
        width: 90%;
        margin: 0 auto 1rem;
    }
    @media (min-width: 450px) and (max-width: 640px){
        letter-spacing: .1rem;
        line-height: 1.7;
        width: 90%;
        margin: 0 auto 1rem;
    }
    @media (min-width: 1025px) {
        width: 70%;
    }
`

export const Name = styled.span`
    font-family: 'Qwigley';
    font-size: 7rem;
    @media (max-width: 450px) {
        font-size: 5rem;
    }
`

export const Welcome = styled.div`
    display: flex;
    justify-content: center;
`

export const W1 = styled.span`
    text-align: center;
    font-size: 5rem;
    animation-duration: 1s;
    animation-name: welcome;
    color: transparent;
    display: block;
    margin-top: 2.7rem;

    @keyframes welcome {
        0% {
            color: white;
        }
        100% {
            color: transparent;
        }
    }
`

export const W2 = styled.span`
    text-align: center;
    font-size: 5rem;
    animation-delay: 1s;
    animation-duration: 1s;
    animation-name: welcome;
    color: transparent;
    display: block;
    margin-top: -6.8rem;
`

export const W3 = styled.span`
    text-align: center;
    font-size: 5rem;
    animation-delay: 2s;
    animation-duration: 1s;
    animation-name: welcome;
    color: transparent;
    display: block;
    margin-top: -6.8rem;
`

export const W4 = styled.span`
    text-align: center;
    font-size: 5rem;
    animation-delay: 3s;
    animation-duration: 1.5s;
    animation-name: welcome;
    color: transparent;
    display: block;
    margin-top: -6.8rem;
`

export const W5 = styled.div`
    text-align: center;
    font-size: 5rem;
    animation-duration: 4.5s;
    animation-name: welcome2;
    color: white;
    display: block;
    margin-top: -7.3rem;

    @keyframes welcome2 {
        0% {
            color: transparent;
        }
        90% {
            color: transparent;
        }
        100% {
            color: white;
        }
    }
`

export const IconContainer = styled.div`
    width: 3rem;
    height: 3rem;
`