import React from 'react';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import {
  NavbarImageContainer,
  ImageBox,
  IconImageMoon,
  IconImageSun,
} from '../../../../styles';
import { useStateValue } from '../../../../context';
import { activeDarkMode } from '../../../../utils';

const DarkMode = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useStateValue()

  const handleDarkMode = () => {
    if(state.darkMode === 'on') {
      activeDarkMode('', dispatch)
    } else {
      activeDarkMode('on', dispatch)
    }
  };

  return (
    <NavbarImageContainer>
      <ImageBox onClick={handleDarkMode} darkmode={state.darkMode}>
        <IconImageMoon icon={faMoon} darkmode={state.darkMode} />
        <IconImageSun icon={faSun} darkmode={state.darkMode} />
      </ImageBox>
    </NavbarImageContainer>
  );
};

export default DarkMode;
