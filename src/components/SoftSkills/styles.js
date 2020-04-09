import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.section`
  margin: 64px 0;
  text-align: center;
`

export const SoftSkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 32px 0 64px 0;
`

export const SoftSkill = styled.li`
  display: flex;
  align-items: center;
  font-size: 2em;
  transition: 0.4s;
  padding: 8px 16px;
  color: ${colors.light};
  margin: 8px 0px;

  &:hover {
    transform: scale(1.2);
  }
`

export const SoftSkillText = styled.p`
  font-size: 1.3rem;
  font-weight: lighter;
  margin-left: 4px;
`
