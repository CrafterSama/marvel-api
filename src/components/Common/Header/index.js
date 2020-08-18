import React from 'react'
import { HeaderContainer } from '../../../styles'
import Logo from './components/Logo'
import SearchInput from './components/SearchInput'
import Favorite from './components/Favorite'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchInput />
      <Favorite />
    </HeaderContainer>
  )
}

export default Header
