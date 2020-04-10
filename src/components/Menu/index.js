import React from 'react'
import * as S from './styles'

const Menu = ({ menuOpen, toggleMenu }) => {
  return (
    <S.Wrapper opened={menuOpen}>
      <S.Content>
        <S.Item>
          <S.MenuLink onClick={toggleMenu} to="/#sobre">
            Sobre
          </S.MenuLink>
        </S.Item>
        <S.Item>
          <S.MenuLink onClick={toggleMenu} to="/#skills">
            Habilidades
          </S.MenuLink>
        </S.Item>
        <S.Item>
          <S.MenuLink onClick={toggleMenu} to="/#softskills">
            Minhas Competências
          </S.MenuLink>
        </S.Item>
        <S.Item>
          <S.MenuLink onClick={toggleMenu} to="/#portfolio">
            Portfólio
          </S.MenuLink>
        </S.Item>
        <S.Item>
          <S.MenuLink onClick={toggleMenu} to="#contato">
            Contato
          </S.MenuLink>
        </S.Item>
      </S.Content>
    </S.Wrapper>
  )
}

export default Menu
