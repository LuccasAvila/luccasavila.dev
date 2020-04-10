import React from 'react'
import * as S from './styles'
import Title from '../Title'
import ProjectCard from './ProjectCard'
import { useStaticQuery, graphql } from 'gatsby'

const Portfolio = () => {
  const { projects } = useStaticQuery(graphql`
    {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              title
              featuredImage {
                childImageSharp {
                  fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <S.Wrapper>
      <Title title="Portfólio" subtitle="Conheça mais do meu trabalho" center />
      <S.ProjectList>
        {projects.edges.map(({ node: { fields, id, frontmatter } }) => (
          <ProjectCard key={id} slug={fields.slug} data={frontmatter} />
        ))}
      </S.ProjectList>
    </S.Wrapper>
  )
}

export default Portfolio
