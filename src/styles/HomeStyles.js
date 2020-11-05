import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    text-align: center;
    font-size: 4rem;
`

export const SubTitle = styled.h2`
    text-align: center;
`

export const Advice = styled.h2`
    text-align: center;
    color: yellow;
`

export const Name = styled.span`
    font-family: 'Qwigley';
    font-size: 7rem;
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