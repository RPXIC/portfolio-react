import styled from 'styled-components'

export const Container = styled.header`
	display: flex;
	flex: 1;
	@media (min-width: 1025px) {
		flex-direction: column;
		align-items: start;
	}
`

export const Content = styled.div`
	display: flex;
	flex: 1;
	flex-direction: column;
	margin: 0 auto;

	@media (min-width: 768px) {
		align-items: center;
		justify-content: space-between;
	}
	@media (min-width: 1024px) {
		align-items: start;
	}
`

export const Path = styled.div`
	color: black;
	margin-left: 2rem;
	@media (min-width: 1025px) {
		margin-left: 0;
	}
`

export const PathText = styled.h1`
	text-align: center;
	font-size: 2.3rem;
	margin: 1.5rem;
`

export const NavContainer = styled.div`
	flex: 1;
`
