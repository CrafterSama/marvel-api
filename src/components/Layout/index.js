import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Home from '../Home'
import {
  MainLayout
} from '../../styles'
import { useStateValue } from '../../context'

const Layout = (props) => {
  const [state] = useStateValue()
  return (
    <MainLayout darkmode={state.darkMode}>
      <Header />
      <Home />
      <Footer />
    </MainLayout>
  )
}

export default Layout
