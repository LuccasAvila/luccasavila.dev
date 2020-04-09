import React from 'react'
import * as S from './styles'

const Title = ({ title, subtitle }) => {
  return (
    <S.Wrapper>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}

export default Title
