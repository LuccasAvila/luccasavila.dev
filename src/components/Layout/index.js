import React from 'react'
import * as S from './styles'

import GlobalStyles from '../../styles/global'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from '../Contact'

const Layout = ({ children }) => {
  return (
    <S.Wrapper>
      <Navbar />
      {children}
      <Contact />
      <Footer />
      <GlobalStyles />
    </S.Wrapper>
  )
}

export default Layout
