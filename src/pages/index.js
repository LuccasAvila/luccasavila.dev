import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import Header from '../components/Header'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <Header />
    <About />
    <SEO />
  </Layout>
)

export default IndexPage
