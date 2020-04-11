import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import colors from '../../styles/colors'

export const Wrapper = styled.section`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: ${colors.light};
`

export const MeImage = styled(Img)`
  max-width: 420px;
  width: 100%;
  flex: 1 1 360px;
  margin-right: 32px;
  ${media.lessThan('medium')`
    margin-right: 0px;
  `}
`

export const Content = styled.div`
  flex: 2 1 570px;
`

export const Text = styled.p`
  text-align: justify;
  font-size: 1.125em;
`

export const SocialMedia = styled.div`
  margin-top: 32px;
  li {
    display: inline-block;
  }
`

export const SocialText = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: ${colors.secondary};
`

export const SocialLink = styled.a`
  border: 2px solid ${colors.secondary};
  color: ${colors.light};
  border-radius: 50%;
  font-size: 1.8em;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px;
  transition: 0.4s;

  &:hover {
    color: ${colors.secondary};
    border: 2px solid ${colors.light};
  }
`
