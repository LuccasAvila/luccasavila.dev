import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.section`
  color: ${colors.light};
`

export const Title = styled.h1`
  color: ${colors.secondary};
  text-transform: uppercase;
  font-size: 1.5rem;
`

export const Text = styled.p`
  font-size: 2.25rem;
  font-weight: 300;
`

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

export const Form = styled.div`
  flex-basis: 360px;
`

export const Me = styled.h3`
  color: white;
  font-weight: 700;
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
    font-size: 23px;
  }
`

export const Ways = styled.div`
  margin-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #4e4a4f;
`

export const Link = styled.p`
  color: ${colors.light};
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  font-weight: 300;
  margin-bottom: 8px;

  svg {
    margin-right: 8px;
    font-size: 2.25rem;
    color: ${colors.secondary};
  }
`
