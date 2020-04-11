import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 32px 0;
  margin-bottom: 32px;
  ${props =>
    props.center || media.lessThan('medium')
      ? `margin: 0 auto; display: flex; justify-content: center;`
      : 'left'};
`

export const Subtitle = styled.h2`
  font-size: 3rem;
  font-weight: 300;
  margin-left: 32px;
  color: #f6f6f6;
  ${media.lessThan('medium')`
      font-size: 1.75rem;
  `}
`

export const Title = styled.h1`
  font-size: 9rem;
  text-transform: uppercase;
  font-weight: 900;
  position: absolute;
  color: #2d282e;
  z-index: -1;
  ${media.lessThan('medium')`
      font-size: 4rem;
  `}
`
