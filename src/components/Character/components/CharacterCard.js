import React from 'react'
import PropTypes from 'prop-types'
import { Card, Overlayer, CardInfo, CardName } from '../../../styles'
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
      <CardInfo onClick={showModal}>
        <CardName>
          <span>{data.name}</span>
        </CardName>
        <div className='character-favorite'></div>
      </CardInfo>
    </Card>
  );
}

CharacterCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default CharacterCard
