import React from 'react'
import { HeaderContainer } from '../../../styles'
import Logo from './components/Logo'
import SearchInput from './components/SearchInput'
import Favorite from './components/Favorite'
import ChangeTheme from './components/ChangeTheme'

const Header = () => {

  return (
    <HeaderContainer>
      <Logo />
      <SearchInput />
      <Favorite />
      <ChangeTheme />
    </HeaderContainer>
  )
}

export default Header
