import React from 'react'
import * as S from './styles'

import GlobalStyles from '../../styles/global'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <Navbar />
      {children}
      <GlobalStyles />
    </S.Wrapper>
  )
}

export default Layout
