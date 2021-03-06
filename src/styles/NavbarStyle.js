import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    width: 7rem;
    border-radius: 0 1rem 1rem 0;
    background-color: #00000054;
    flex-direction: column;
    position: sticky;
    top: 30%;
    left: 0;
  }
`

export const Link = styled(NavLink)`
  width: 4rem;
  color: #11d7d8;
  margin: 1.3rem 2rem;
  padding: 1rem 0;
  transition: all 1s;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    width: 3rem;
  }
  @media (min-width: 1024px) {
    width: 3.5rem;
  }
  &.current-page {
    border-top: 2px solid #ff6200;
    border-bottom: 2px solid #ff6200;
    color: #ff6200;
    width: 4.5rem;
    @media (max-width: 768px) {
      margin-bottom: 1rem;
      width: 3.5rem;
    }
    @media (min-width: 1024px) {
      width: 4rem;
    }
  }
  &:hover {
    color: #ff6200;
  }
  &:last-of-type {
    margin-right: 3rem;
  }
`
