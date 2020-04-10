import React from 'react'
import * as S from './styles'
import Button from '../Button'

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
      <Button margin={128}>Voltar para a página inicial</Button>
    </S.Wrapper>
  )
}

export default NotFound
