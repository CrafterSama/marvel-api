import React from 'react'
import PropTypes from 'prop-types'
import { Card, Overlayer, CharacterInfo, CharacterName } from '../../../styles'
import { getCharactersComics } from '../../../context/actions'
import { useStateValue } from '../../../context'

const CharacterCard = ({ data, showCharacterInfo, setData  }) => {

  const  [state, dispatch] = useStateValue()

  const showModal = (event) => {
    event.preventDefault()
    setData(data)
    getCharactersComics(data.id, state, dispatch)
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
