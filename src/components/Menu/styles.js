import styled from 'styled-components'
import { Link } from 'gatsby'
import colors from '../../styles/colors'

export const Wrapper = styled.nav`
  background: #272328;
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  transition: top 0.4s ease-in;
  top: ${props => (props.opened ? 0 : '100vh')};
`

export const Content = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  font-size: 2.5rem;
  text-align: center;
`

export const Item = styled.li`
  margin: 8px 0;
  border: 2px solid transparent;
  position: relative;
`

export const MenuLink = styled(Link).attrs({
  cover: true,
  direction: 'left',
  bg: colors.primary,
})`
  padding: 10px;
  color: #d69d63;
  font-weight: 700;
  text-shadow: none;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    content: '';
    opacity: 0;
    -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
    -moz-transition: opacity 0.3s, -moz-transform 0.3s;
    transition: opacity 0.3s, transform 0.3s;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  &:before {
    top: 0;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  &:after {
    bottom: 0;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
  }

  &:hover {
    color: #fff;

    &:before,
    &:after {
      opacity: 1;
      -webkit-transform: translateY(0px);
      -moz-transform: translateY(0px);
      transform: translateY(0px);
    }
  }
`
