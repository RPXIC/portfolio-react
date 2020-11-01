import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
`

export const Link = styled(NavLink)`
    color: #11d7d8;
    margin: 1.3rem 2rem;
    padding: 1rem 0;
    transition: color 1s;
    @media (max-width: 768px) {
        margin-bottom: 1rem;
        font-size: 2.5rem;
    }
    &.current-page {
        border-top: 2px solid #ff6200;
        border-bottom: 2px solid #ff6200;
        color: #ff6200;
        font-size: 4.5rem;
        @media (max-width: 768px) {
            margin-bottom: 1rem;
            font-size: 3rem;
        }
    }
    &:hover {
        color: #ff6200;
    }
    &:last-of-type {
        margin-right: 3rem;
    }
`