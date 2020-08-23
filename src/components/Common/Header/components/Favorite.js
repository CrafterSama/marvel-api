import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavbarImageContainer, ImageBox, IconImage } from '../../../../styles'
import { useStateValue } from '../../../../context';
import { SET_CHARACTERS } from '../../../../context/types';


const Favorite = () => {

  const [state, dispatch] = useStateValue()

  const saveToFavorites = () => {
    if(!localStorage.getItem('favorites')){
      localStorage.setItem('favorites', JSON.stringify(state.characters));
    } else {
      dispatch({
        type: SET_CHARACTERS,
        characters: JSON.parse(localStorage.getItem('favorites'))
      })
    }
  }

  return (
    <NavbarImageContainer>
      <ImageBox darkmode={state.darkMode} onClick={saveToFavorites}>
        <IconImage faicon="faStart" icon={faStar} />
      </ImageBox>
    </NavbarImageContainer>
  );
}

export default Favorite
