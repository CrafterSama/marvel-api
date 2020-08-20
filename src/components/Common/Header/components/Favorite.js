import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { NavbarImageContainer, ImageBox, IconImage } from '../../../../styles'
import { useStateValue } from '../../../../context';


const Favorite = () => {

  // eslint-disable-next-line
  const [state] = useStateValue()

  return (
    <NavbarImageContainer>
      <ImageBox darkmode={state.darkMode}>
        <IconImage icon={faStar} />
      </ImageBox>
    </NavbarImageContainer>
  );
}

export default Favorite
