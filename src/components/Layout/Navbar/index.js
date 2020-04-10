import React from 'react'
import * as S from './styles'
import colors from '../../../styles/colors'

import { useStaticQuery, graphql } from 'gatsby'

const Navbar = () => {
  const { logo } = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <S.Brand to="/" cover direction="left" bg={colors.primary}>
        <S.Image fluid={logo.childImageSharp.fluid} alt="Luccas Avila" />
        <S.Name>Luccas Ávila</S.Name>
      </S.Brand>
      <S.Menu>
        <div>
          <S.Bars />
          <S.Bars />
        </div>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Navbar
