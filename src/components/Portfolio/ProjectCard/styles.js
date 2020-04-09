import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const Wrapper = styled(Link)`
  display: inline-block;
  position: relative;
  box-shadow: 0 0 8px #1b171c;
  margin-top: 32px;
  width: 300px;
  height: 300px;
  overflow: hidden;

  .image {
    transition: 0.4s;
  }

  &:hover {
    .image {
      transform: scale(1.2);
    }

    .info {
      opacity: 1;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 80px;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(0, 0, 0, 0.2);
  bottom: 0;
  transition: 0.4s;
  padding-left: 32px;
`

export const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
