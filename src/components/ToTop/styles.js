import styled from 'styled-components'
import media from 'styled-media-query'
import colors from '../../styles/colors'

export const Wrapper = styled.button`
  position: fixed;
  right: 64px;
  bottom: 64px;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  background: none;
  border: 2px solid ${colors.secondary};
  color: ${colors.secondary};
  cursor: pointer;

  ${media.lessThan('medium')`
    right: 16px;
    bottom: 16px;
    width: 42px;
    height: 42px;
  `}
`
