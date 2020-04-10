import React from 'react'
import * as S from './styles'
import { FaCoffee, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <S.Wrapper>
      <p>
        Feito com <a href="https://gatsbyjs.org">GatsbyJS</a>, <FaCoffee /> e{' '}
        <FaHeart />
      </p>
      <p>© Copyright {new Date().getFullYear()} - Luccas Avila</p>
    </S.Wrapper>
  )
}

export default Footer
