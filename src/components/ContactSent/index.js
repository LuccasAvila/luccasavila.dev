import React from 'react'
import * as S from './styles'
import AniLinkButton from '../AniLinkButton'

const ContactSent = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <S.Title>Contato enviado com</S.Title>
        <S.Return>Sucesso!</S.Return>
        <S.Quote>Entraremos em contato em breve em seu e-mail!</S.Quote>
        <hr />
      </S.Text>
      <AniLinkButton to="/" margin={128}>
        Voltar para a página inicial
      </AniLinkButton>
    </S.Wrapper>
  )
}

export default ContactSent
