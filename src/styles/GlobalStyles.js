import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html {
        color: white;
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        margin: 0;
        min-width: 300px;
    }
    h1, h2, h3 {
        margin: 0;
        padding: 0;
        line-height: 1.5
    }
    h1 {
        font-size: 3.5rem;
    }
    h2 {
        font-size: 2.5rem;
    }
    h3 {
        font-size: 2rem;
    }
    a {
        text-decoration: none;
        font-size: 4rem;
    }
    p {
        font-size: 1.8rem;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`

export const App = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Main = styled.main`
    flex-grow: 1;
    width: 100%;
    height: auto;
    background-color: black;
`