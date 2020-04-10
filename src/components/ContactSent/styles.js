import styled from 'styled-components'

export const Wrapper = styled.section`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Text = styled.div`
  text-align: center;
  color: #f6f6f6;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Title = styled.p`
  font-size: 1.5em;
  text-transform: uppercase;
`

export const Return = styled.h2`
  font-size: 3em;
  color: #d89e63;
  margin: 16px 0;
`

export const Quote = styled.p`
  font-size: 1.125em;
`
