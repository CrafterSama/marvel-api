import React from 'react'
import PropTypes from 'prop-types'
import { Card, Overlayer, CharacterInfo, CharacterName } from '../../../styles'

const CharacterCard = ({ data, showCharacterInfo, setData  }) => {

  const showModal = () => {
    setData(data)
    showCharacterInfo()
  }

  return (
    <Card background={data.thumbnail}>
      <Overlayer />
      <CharacterInfo onClick={showModal}>
        <CharacterName>
          <span>{data.name}</span>
        </CharacterName>
        <div className='character-favorite'></div>
      </CharacterInfo>
    </Card>
  );
}

CharacterCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default CharacterCard
