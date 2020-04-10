import React from 'react'
import * as S from './styles'
import colors from '../../../styles/colors'

const ProjectCard = ({ slug, data }) => {
  return (
    <S.Wrapper to={slug} cover direction="left" bg={colors.primary}>
      <S.Image
        className="image"
        fluid={data.featuredImage.childImageSharp.fluid}
      ></S.Image>
      <S.Info className="info">
        <h3>{data.title}</h3>
        <p>Clique para mais detalhes</p>
      </S.Info>
    </S.Wrapper>
  )
}

export default ProjectCard
