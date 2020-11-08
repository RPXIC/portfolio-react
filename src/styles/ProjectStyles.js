import styled from 'styled-components'
import { Image } from 'react-datocms'

export const Title = styled.h3`
    text-transform: uppercase;
`

export const ImageDato = styled(Image)`
    border-radius: 2rem;
`

export const ListFlex = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
`

export const Description = styled.p`
    text-align: center;
    height: 3.5rem;
`

export const Stack = styled.p`
    text-align: center;
`