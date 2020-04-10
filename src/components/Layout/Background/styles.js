import styled, { css } from 'styled-components'

const LargeSquare = css`
  width: 350px;
  height: 350px;
  border: 2px solid #2d282e;
  position: absolute;
`

const SmallSquare = css`
  width: 32px;
  height: 32px;
  border: 2px solid #393439;
  position: absolute;
  @keyframes rotateSquares {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow: hidden;
  z-index: -999;
`

export const Square1 = styled.div`
  ${LargeSquare}
  top: -64px;
  right: -64px;
  transform: rotateZ(-30deg);
`

export const Square2 = styled.div`
  ${LargeSquare}
  bottom: 32px;
  left: -180px;
  transform: rotateZ(30deg);
`

export const Square3 = styled.div`
  ${SmallSquare}
  bottom: 40%;
  left: 20%;
  animation: rotateSquares 2s ease-in infinite;
`

export const Square4 = styled.div`
  ${SmallSquare}
  top: 20%;
  left: 60%;
  animation: rotateSquares 2s ease-in reverse infinite;
`
