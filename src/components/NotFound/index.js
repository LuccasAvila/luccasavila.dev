import React from 'react'
import * as S from './styles'
import AniLinkButton from '../AniLinkButton'

const NotFound = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <S.Title>Página não encontrada</S.Title>
        <S.Error>Erro 404</S.Error>
        <S.Quote>
          A página que você deseja não está disponível ou não existe
        </S.Quote>
        <hr />
      </S.Text>
      <AniLinkButton to="/" margin={128}>
        Voltar para a página inicial
      </AniLinkButton>
    </S.Wrapper>
  )
}

export default NotFound
