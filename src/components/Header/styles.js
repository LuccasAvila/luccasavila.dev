import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.div`
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Square = styled.div`
  width: 320px;
  height: 320px;
  border: 1px solid rgba(56, 51, 56, 0.45);
  position: absolute;
  top: -70px;
  z-index: -1;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
`

export const Circle = styled.div`
  border: 1px solid #393439;
  height: 300px;
  width: 300px;
  position: absolute;
  border-radius: 150px;
  z-index: -1;
`

export const Content = styled.div`
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

export const Developer = styled.h2`
  font-size: 3em;
  color: ${colors.secondary};
  margin: 16px 0;
`

export const Quote = styled.p`
  font-size: 1.125em;
`
