import React from 'react'
import { HeaderContainer } from '../../../styles'
import Logo from './components/Logo'
import SearchInput from './components/SearchInput'
import Favorite from './components/Favorite'
import DarkMode from './components/DarkMode'
import { useStateValue } from '../../../context'

const Header = () => {

  const [state] = useStateValue()

  return (
    <HeaderContainer darkmode={state.darkMode}>
      <Logo />
      <SearchInput />
      <Favorite />
      <DarkMode />
    </HeaderContainer>
  )
}

export default Header
