import React from 'react'
import * as S from './styles'
import Button from '../../components/Button'

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
      <Button margin={128}>Portfólio</Button>
    </S.Wrapper>
  )
}

export default Header
