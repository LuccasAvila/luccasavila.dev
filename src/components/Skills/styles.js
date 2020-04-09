import styled from 'styled-components'
import colors from '../../styles/colors'

export const Wrapper = styled.section`
  margin-top: 16px;
`

export const Text = styled.p`
  font-size: 1.125em;
  margin-top: 32px;
  color: ${colors.light};
`

export const SkillList = styled.ul`
  overflow: hidden;
  display: flex;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 16px;
`

export const Skill = styled.li`
  color: #4e4a4f;
  font-size: 6em;
  flex: 1 1 360px;
  transition: 0.4s;
  margin-top: 4px;

  &:hover {
    transform: scale(1.2);
    color: #5f5a61;
  }
`
