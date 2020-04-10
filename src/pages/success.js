import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout'
import ContactSent from '../components/ContactSent'

const Success = () => {
  return (
    <Layout>
      <SEO title="Contato enviado com sucesso" />
      <ContactSent />
    </Layout>
  )
}

export default Success
