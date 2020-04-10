import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Wrapper = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Brand = styled(Link)`
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

export const Menu = styled.div``

export const Bars = styled.div`
  width: 32px;
  height: 3px;
  margin: 8px 0;
  background: #fff;
  border-radius: 5px;
  transition: 0.4s;
`
