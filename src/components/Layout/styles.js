import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  ${media.lessThan('medium')`
      padding: 0 16px;
  `}
`
