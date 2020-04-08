import React from 'react'
import * as S from './styles'
import { FaTerminal, FaEnvelope, FaGithub, FaTwitter } from 'react-icons/fa'
import Input from '../Input'
import Button from '../Button'

const Contact = () => {
  return (
    <S.Wrapper>
      <S.Title>Contato</S.Title>
      <S.Text>Gostou do meu Trabalho?</S.Text>
      <S.Text>Entre em contato para conversarmos!</S.Text>
      <S.Content>
        <div>
          <S.Me>
            <FaTerminal /> Luccas Avila
          </S.Me>
          <S.Ways>
            <S.Link>
              <FaEnvelope />
              <a href="mailto:hey@luccasavila.dev">hey@luccasavila.dev</a>
            </S.Link>
            <S.Link>
              <FaGithub />
              <a href="https://github.com/LuccasAvila">LuccasAvila</a>
            </S.Link>
            <S.Link>
              <FaTwitter />
              <a href="https://twitter.com/luccasdev">@LuccasDev</a>
            </S.Link>
          </S.Ways>
        </div>
        <S.Form>
          <Input label="Seu nome" />
          <Input label="Seu e-mail" />
          <Input label="Sua mensagem" textarea />
          <Button margin={16} block>
            Enviar
          </Button>
        </S.Form>
      </S.Content>
      <hr />
    </S.Wrapper>
  )
}

export default Contact