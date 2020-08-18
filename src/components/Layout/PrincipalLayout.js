import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Home from '../Home'
import {
  Layout
} from '../../styles'

const PrincipalLayout = (props) => {
  return (
    <Layout>
      <Header />
      <Home />
      <Footer />
    </Layout>
  )
}

export default PrincipalLayout
