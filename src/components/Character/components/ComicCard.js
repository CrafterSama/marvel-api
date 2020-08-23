import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Overlayer, CharacterInfo, CharacterName } from '../../../styles'

const ComicCard = ({ data }) => {

  return (
    <Card background={data.thumbnail}>
      <Overlayer />
      <Link to={`comics/${data.id}`}>
        <CharacterInfo>
          <CharacterName>
            <span>{data.name}</span>
          </CharacterName>
          <div className='character-favorite'></div>
        </CharacterInfo>
      </Link>
    </Card>
  );
};

ComicCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComicCard;
