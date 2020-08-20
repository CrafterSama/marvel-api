import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/marvel-logo.svg'
import { LogoContainer, ImageContainer } from '../../../../styles'
import { useStateValue } from '../../../../context'

const Logo = () => {

  const [state] = useStateValue()

  return (
    <LogoContainer>
      <ImageContainer darkmode={state.darkMode}>
        <Link to='/'>
          <img src={logo} alt='Marvel Logo' />
        </Link>
      </ImageContainer>
    </LogoContainer>
  );
}

export default Logo
