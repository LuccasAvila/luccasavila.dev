import React from 'react'
import * as S from './styles'
import AniLinkButton from '../../components/AniLinkButton'

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
    </S.Wrapper>
  )
}

export default Header
