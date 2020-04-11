import styled from 'styled-components'
import colors from '../../../styles/colors'

export const Wrapper = styled.footer`
  margin-top: 32px;
  color: ${colors.light};
  font-weight: 300;
  font-size: 1.125rem;
  text-align: center;
  padding-bottom: 16px;
  a {
    border-bottom: 1px dashed ${colors.light};
  }
`
