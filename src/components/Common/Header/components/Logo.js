import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../../assets/marvel-logo.svg'
import { LogoContainer, ImageContainer } from '../../../../styles'

const Logo = () => {
  return (
    <LogoContainer>
      <ImageContainer>
        <Link to='/'>
          <img src={logo} alt='Marvel Logo' />
        </Link>
      </ImageContainer>
    </LogoContainer>
  );
}

export default Logo
