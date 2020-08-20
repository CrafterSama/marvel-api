import React from 'react'
import { FooterContainer } from '../../../styles'
import { useStateValue } from '../../../context';

const Footer = () => {
  const [state] = useStateValue()
  return (
    <FooterContainer darkmode={state.darkMode}>
      <p>
        Made by <a href="htttps://craftersama.com" target="_blanc">Julmer Olivero</a>
      </p>
    </FooterContainer>
  );
}

export default Footer
