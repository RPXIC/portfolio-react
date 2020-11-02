import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Logo = styled(Link)`
    color: white;
`

export const Container = styled.header`
    position: sticky;
    background-color: black;
    width: 100%;
    @media (min-width: 1025px) {
        width: 10rem;
    }
`

export const Content = styled.div`
    margin: 0 auto;

    @media (min-width: 768px) {
        display:flex;
        align-items: center;
        justify-content: space-between;    
    }
    @media (min-width: 1025px) {
        flex-direction: column;
    }
`

export const LogoText = styled.h1`
    text-align: center;
    font-family: 'Metal Mania';
    font-size: 5rem;
    margin: 2rem 0 1rem 3rem;

    @media (max-width: 768px) {
        margin: 0;
    }
    @media (min-width: 1025px) {
        margin: .5rem 0 0 .5rem;
    }
`