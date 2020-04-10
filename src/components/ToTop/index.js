import React from 'react'
import * as S from './styles'
import { FaCaretUp } from 'react-icons/fa'

const ToTop = () => {
  const goToTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <S.Wrapper onClick={goToTop}>
      <FaCaretUp size={32} />
    </S.Wrapper>
  )
}

export default ToTop
