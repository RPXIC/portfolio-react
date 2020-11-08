import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #000000e3;
    width: 100%;
    @media (min-width: 1024px) {
        width: 10rem;
    }
`

export const Nav = styled.nav`
    width: 100%;
    background-color: #8080804a;
    display: flex;
    justify-content: center;
    @media (min-width: 1024px) {
        border-radius: 1rem 0 0 1rem;
        width: 7rem;
        flex-direction: column;
        position: fixed;
        top: 25%;
        right: 0rem;
    }
`

export const Link = styled.a`
    width: 4.5rem;
    margin: 1.2rem 3rem 0rem;
    @media (min-width: 1024px) {
        margin: 1rem 1rem;
    }
`

export const CVLink = styled.a`
    color: white;
    width: 3.5rem;
    margin: 1rem 3rem 0;
    @media (min-width: 1024px) {
        height: 4.5rem;
        margin: 1.2rem 1.7rem 2.2rem;
    }
`