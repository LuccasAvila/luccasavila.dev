import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Brand = styled(AniLink)`
  display: flex;
  align-items: center;
`

export const Image = styled(Img)`
  width: 32px;
  height: 32px;
  margin-right: 8px;
  * {
    object-fit: contain !important;
  }
`

export const Name = styled.h1`
  line-height: 64px;
  color: #f6f6f6;
  font-size: 1.125rem;
  font-weight: normal;
`

export const Menu = styled.div`
  ${props =>
    props.menuOpen &&
    css`
      .bars1 {
        transform: rotateZ(45deg);
        position: relative;
        top: 11px;
      }

      .bars2 {
        transform: rotateZ(-45deg);
        position: relative;
      }

      & > div {
        position: fixed;
        z-index: 999;
      }
    `}
`

export const Bars = styled.div`
  width: 32px;
  height: 3px;
  margin: 8px 0;
  background: #fff;
  border-radius: 5px;
  transition: 0.4s;
`
