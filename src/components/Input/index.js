import React from 'react'
import * as S from './styles'

const Input = ({ label, textarea, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      {textarea ? <S.TextArea {...rest} /> : <S.Input {...rest} />}
    </S.Wrapper>
  )
}

export default Input
