import styled from 'styled-components'
import Img from 'gatsby-image'

export const Wrapper = styled.main`
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 64px 16px;
  color: #f6f6f6;
  margin-top: 16px;
`

export const Container = styled.div`
  max-width: 640px;
  width: 100%;
  margin: 0 auto;
`

export const Header = styled.header`
  margin-bottom: 32px;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 2.25rem;
`

export const Description = styled.h1`
  font-size: 1.125rem;
  color: #aaa;
`

export const LinkButton = styled.a`
  display: inline-block;
  background: #d89e63;
  color: #221d23;
  text-transform: uppercase;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid transparent;
  transition: 0.4s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    background: transparent;
    color: #d89e63;
    border: 1px solid #d89e63;
  }
`

export const Image = styled(Img)`
  margin-top: 32px;
  width: 640px;
  height: 480px;
  object-fit: cover;
`

export const Main = styled.section`
  margin-top: 64px;

  p,
  li {
    color: #aaa;
    font-size: 1.25rem;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  ul {
    list-style-type: disc;
    padding-left: 2rem;
  }

  hr {
    margin: 32px 0;
  }

  h2 {
    font-size: 1.75rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
`
