import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Home from '../Home'
import {
  Layout
} from '../../styles'
import { useStateValue } from '../../context'

const PrincipalLayout = (props) => {
  const [state] = useStateValue()
  return (
    <Layout darkmode={state.darkMode}>
      <Header />
      <Home />
      <Footer />
    </Layout>
  )
}

export default PrincipalLayout
