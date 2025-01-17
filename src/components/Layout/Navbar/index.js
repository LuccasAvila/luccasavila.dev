import React from 'react'
import * as S from './styles'
import colors from '../../../styles/colors'

import { useStaticQuery, graphql } from 'gatsby'

const Navbar = ({ menuOpen, toggleMenu }) => {
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
      <S.Menu menuOpen={menuOpen} onClick={toggleMenu}>
        <S.Bars>
          <S.Bar className="bars1" />
          <S.Bar className="bars2" />
        </S.Bars>
      </S.Menu>
    </S.Wrapper>
  )
}

export default Navbar
