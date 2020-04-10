import React from 'react'
import * as S from './styles'
import Title from '../Title'
import {
  FaGraduationCap,
  FaAlignLeft,
  FaLightbulb,
  FaChartLine,
} from 'react-icons/fa'

const SoftSkills = () => {
  return (
    <S.Wrapper id="softskills">
      <Title title="Soft Skills" subtitle="Minhas Competências" center />
      <S.SoftSkillsList>
        <S.SoftSkill>
          <FaGraduationCap size={32} />
          <S.SoftSkillText>Autodidata</S.SoftSkillText>
        </S.SoftSkill>
        <S.SoftSkill>
          <FaAlignLeft size={32} />
          <S.SoftSkillText>Flexivel</S.SoftSkillText>
        </S.SoftSkill>
        <S.SoftSkill>
          <FaLightbulb size={32} />
          <S.SoftSkillText>Criativo</S.SoftSkillText>
        </S.SoftSkill>
        <S.SoftSkill>
          <FaChartLine size={32} />
          <S.SoftSkillText>Orientado à resultados</S.SoftSkillText>
        </S.SoftSkill>
      </S.SoftSkillsList>
      <hr />
    </S.Wrapper>
  )
}

export default SoftSkills
