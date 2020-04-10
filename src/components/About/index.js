import React from 'react'
import * as S from './styles'
import Title from '../Title'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { useStaticQuery, graphql } from 'gatsby'

const About = () => {
  const { aboutImg } = useStaticQuery(graphql`
    {
      aboutImg: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 420, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper id="sobre">
      <S.MeImage fluid={aboutImg.childImageSharp.fluid} />
      <S.Content>
        <Title title="Sobre" subtitle="Luccas Ávila" />
        <S.Text>
          Desenvolvedor Full-stack, com conhecimentos nas área de back-end,
          front-end e mobile.
          <br />
          <br />
          Apaixonado por programação desde os 13 anos, escrevendo meu primeiro
          "Hello World" em Java, onde decidi a carreira que gostaria de seguir,
          desde lá venho aprimorando meu conhecimento em diversas linguagens.
          <br />
          <br />
          Venho trabalhando como freelancer há 3 anos na área, atendendo uma
          gama de clientes, desenvolvendo de sites institucionais a e-commerces
          com foco na usabilidade e na acessibilidade.
          <br />
          <br />
          Sempre me mantenho em constante aprendizado por paixão e para me
          manter atualizado de acordo com o mercado, tentando sempre oferecer o
          melhor para os meus clientes e parceiros.
        </S.Text>
        <S.SocialMedia>
          <S.SocialText>Minhas redes sociais:</S.SocialText>
          <ul>
            <li>
              <S.SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/LuccasAvila"
                aria-label="Github"
              >
                <FaGithub />
              </S.SocialLink>
            </li>
            <li>
              <S.SocialLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/LuccasDev"
                aria-label="Twitter"
              >
                <FaTwitter />
              </S.SocialLink>
            </li>
          </ul>
        </S.SocialMedia>
      </S.Content>
      <hr />
    </S.Wrapper>
  )
}

export default About
