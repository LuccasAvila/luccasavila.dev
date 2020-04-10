import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import SoftSkills from '../components/SoftSkills'
import Portfolio from '../components/Portfolio'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Skills />
    <SoftSkills />
    <Portfolio />
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
