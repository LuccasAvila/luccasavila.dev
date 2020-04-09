import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <Skills />
    <SEO />
  </Layout>
)

export default IndexPage
