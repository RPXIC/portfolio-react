import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 78vh;
  @media (min-width: 768px) {
    min-height: 82.4vh;
  }
  @media (min-width: 1024px) {
    padding-top: 8rem;
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

export const Text = styled.h2`
  text-align: center;
  width: 80%;
  text-align: center;
  margin: 1rem auto;
  letter-spacing: 0.3rem;
  line-height: 2.5;
  @media (max-width: 450px) {
    letter-spacing: 0.1rem;
    line-height: 1.1;
    width: 90%;
    margin: 0 auto 1rem;
  }
  @media (min-width: 450px) and (max-width: 640px) {
    letter-spacing: 0.1rem;
    line-height: 1.7;
    width: 90%;
    margin: 0 auto 1rem;
  }
  @media (min-width: 1025px) {
    width: 70%;
  }
  & > a {
    font-size: 2.8rem;
  }
`

export const Welcome = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  @media (min-width: 1025px) {
    margin: 2.5rem 0;
  }
`

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
`
