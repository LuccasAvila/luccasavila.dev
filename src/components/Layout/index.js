import React, { useState } from 'react'
import * as S from './styles'

import GlobalStyles from '../../styles/global'
import Background from './Background'
import Navbar from './Navbar'
import Footer from './Footer'
import Contact from '../Contact'
import Menu from '../Menu'
import ToTop from '../ToTop'

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(old => !old)
  }

  return (
    <S.Wrapper>
      <Background />
      <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
      {children}
      <Contact id="contact" />
      <Footer />
      <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
      <ToTop />
      <GlobalStyles />
    </S.Wrapper>
  )
}

export default Layout
