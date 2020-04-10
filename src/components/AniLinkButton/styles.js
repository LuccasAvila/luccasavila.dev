import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import colors from '../../styles/colors'

export const Button = styled(AniLink).attrs({
  cover: true,
  direction: 'left',
  bg: colors.primary,
})`
  font-weight: bolder;
  text-transform: uppercase;
  padding: 12px 53px;
  border-radius: 32px;
  border: 1px solid transparent;
  transition: 0.4s;
  cursor: pointer;

  background: ${colors.secondary};
  color: ${colors.primary};

  &:hover {
    background: transparent;
    color: ${colors.secondary};
    cursor: pointer;
    border: 1px solid ${colors.secondary};
  }

  ${props =>
    props.block &&
    `
    display: block;
    width: 100%;
  `}

  ${props => props.margin && `margin-top: ${props.margin}px;`}
`
