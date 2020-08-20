import React, { useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FavoriteContainer, StarImageBox, StarImage } from '../../../../styles'


const Favorite = () => {

  // eslint-disable-next-line
  const [ isFavorite, setIsFavorite ] = useState(false)

  return (
    <FavoriteContainer>
      <StarImageBox>
        <StarImage icon={faStar} active={isFavorite} />
      </StarImageBox>
    </FavoriteContainer>
  );
}

export default Favorite
