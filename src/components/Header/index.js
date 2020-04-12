import React from 'react'
import * as S from './styles'
import AniLinkButton from '../../components/AniLinkButton'
import { FaAngleDown } from 'react-icons/fa'

const Header = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Square />
        <S.Circle />
        <S.Title>Olá! Sou Luccas Avila e um</S.Title>
        <S.Developer>DESENVOLVEDOR</S.Developer>
        <S.Quote>{'{ TRANSFORMANDO SOLUÇÕES EM CÓDIGO }'}</S.Quote>
        <hr />
      </S.Content>
      <AniLinkButton to="/#portfolio" margin={128}>
        Portfólio
      </AniLinkButton>
      <S.DownArrow to="/#sobre">
        <FaAngleDown />
      </S.DownArrow>
    </S.Wrapper>
  )
}

export default Header
