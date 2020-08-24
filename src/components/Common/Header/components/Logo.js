import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import logo from '../../../../assets/marvel-logo.svg'
import { LogoContainer, ImageContainer } from '../../../../styles'
import { useStateValue } from '../../../../context'
import { getCharactersRandomly } from '../../../../context/actions'

const Logo = () => {

  const [, dispatch] = useStateValue()

  const toHome = () => {
    getCharactersRandomly(dispatch);
    return <Redirect to='/' />;
  }

  return (
    <LogoContainer>
      <ImageContainer>
        <Link to='/' onClick={toHome}>
          <img src={logo} alt='Marvel Logo' />
        </Link>
      </ImageContainer>
    </LogoContainer>
  );
}

export default Logo;
