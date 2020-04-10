import React from 'react'
import * as S from './styles'
import Title from '../Title'
import {
  FaHtml5,
  FaCss3,
  FaSass,
  FaJs,
  FaPhp,
  FaReact,
  FaGit,
  FaLaravel,
  FaLinux,
} from 'react-icons/fa'

const Skills = () => {
  const skillList = [
    { name: 'Html', icon: FaHtml5 },
    { name: 'Css', icon: FaCss3 },
    { name: 'Sass', icon: FaSass },
    { name: 'Javascript', icon: FaJs },
    { name: 'PHP', icon: FaPhp },
    { name: 'React/React Native', icon: FaReact },
    { name: 'Git', icon: FaGit },
    { name: 'Laravel', icon: FaLaravel },
    { name: 'Linux', icon: FaLinux },
  ]

  return (
    <S.Wrapper id="skills">
      <Title title="Skills" subtitle="Minhas Habilidades" />
      <S.Text>
        Abaixo estão algumas das tecnologias que domino, com um alto nível de
        conhecimento e com projetos já em produção. <br />
        As linguagens em estudo não estão listadas.
      </S.Text>
      <S.SkillList>
        {skillList.map(skill => (
          <S.Skill key={skill.name} title={skill.name}>
            {React.createElement(skill.icon)}
          </S.Skill>
        ))}
      </S.SkillList>
      <hr />
    </S.Wrapper>
  )
}

export default Skills
