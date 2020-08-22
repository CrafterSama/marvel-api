import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import logo from '../../../../assets/marvel-logo.svg'
import { LogoContainer, ImageContainer } from '../../../../styles'
import { useStateValue } from '../../../../context'

const Logo = () => {

  const [state] = useStateValue()

  const toHome = () => {
    return <Redirect to='/' />
  }

  return (
    <LogoContainer>
      <ImageContainer darkmode={state.darkMode}>
        <Link to='/' onClick={toHome}>
          <img src={logo} alt='Marvel Logo' />
        </Link>
      </ImageContainer>
    </LogoContainer>
  );
}

export default Logo
