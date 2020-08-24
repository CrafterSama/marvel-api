import React from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import {
  NavbarImageContainer,
  ImageBox,
  IconImageMoon,
  IconImageSun,
} from '../../../../styles';
import { useStateValue } from '../../../../context';
import { changeTheme } from '../../../../context/actions';
import { THEME_LIGHT, LOCALSTORAGE_THEME, THEME_DARK } from '../../../../constants';

const ChangeTheme = () => {

  const [state, dispatch] = useStateValue()

  const handleChangeTheme = () => {
    if(state.theme === THEME_DARK) {
      localStorage.setItem(LOCALSTORAGE_THEME, THEME_LIGHT);
      changeTheme(THEME_LIGHT, dispatch)
    } else {
      localStorage.setItem(LOCALSTORAGE_THEME, THEME_DARK);
      changeTheme(THEME_DARK, dispatch)
    }
  };

  return (
    <NavbarImageContainer>
      <ImageBox onClick={handleChangeTheme}>
        {state.theme === THEME_DARK
          ? <IconImageSun icon={faSun} />
          : <IconImageMoon icon={faMoon} />
        }
      </ImageBox>
    </NavbarImageContainer>
  );
};

export default ChangeTheme;
