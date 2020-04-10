import React from 'react'
import { graphql } from 'gatsby'
import * as S from '../styles/products'
import { FaExternalLinkAlt } from 'react-icons/fa'

import SEO from '../components/seo'
import Layout from '../components/Layout'

const PageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <S.Wrapper>
        <S.Container>
          <S.Header>
            <S.Title>{data.markdownRemark.frontmatter.title}</S.Title>
            <S.Description>
              {data.markdownRemark.frontmatter.description}
            </S.Description>
          </S.Header>
          {data.markdownRemark.frontmatter.link && (
            <S.LinkButton
              href={data.markdownRemark.frontmatter.link}
              target="_blank"
              rel="noopener"
            >
              <FaExternalLinkAlt />
              Visitar o site
            </S.LinkButton>
          )}
          <S.Image
            fluid={
              data.markdownRemark.frontmatter.featuredImage.childImageSharp
                .fluid
            }
          />
          <S.Main>
            <div
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </S.Main>
        </S.Container>
      </S.Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query Product($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        description
        title
        link
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 640, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default PageTemplate
