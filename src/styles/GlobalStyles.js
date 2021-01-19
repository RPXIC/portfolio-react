import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import img from 'img/img.jpg'

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
        font-family: 'Roboto Mono'
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    body {
        backdrop-filter: invert(30%);
        background: white url(${img}) center/cover no-repeat fixed;
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
	min-width: 380px;
	min-height: 100vh;
	height: auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	@media (min-width: 1025px) {
		flex-direction: row;
	}
`

export const Main = styled.main`
	flex-grow: 1;
	width: 100%;
	height: auto;
`
