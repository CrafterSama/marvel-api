import React, { useState } from 'react'
import { FavoriteContainer, StarImageBox, StarImage } from '../../../../styles'

const Favorite = () => {

  // eslint-disable-next-line
  const [ isFavorite, setIsFavorite ] = useState(false)

  return (
    <FavoriteContainer>
      <StarImageBox>
        <StarImage active={isFavorite} />
      </StarImageBox>
    </FavoriteContainer>
  );
}

export default Favorite
