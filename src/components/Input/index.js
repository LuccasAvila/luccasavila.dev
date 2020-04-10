import React from 'react'
import * as S from './styles'

const Input = ({ label, textarea, ...rest }) => {
  return (
    <S.Wrapper>
      <S.Label>
        {label}
        {textarea ? <S.TextArea {...rest} /> : <S.Input {...rest} />}
      </S.Label>
    </S.Wrapper>
  )
}

export default Input
