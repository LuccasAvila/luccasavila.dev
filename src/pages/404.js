import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import NotFound from '../components/NotFound'

const NotFoundPage = () => (
  <Layout>
    <SEO title="Página não encontrada" />
    <NotFound />
  </Layout>
)

export default NotFoundPage
