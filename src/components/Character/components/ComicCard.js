import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Overlayer, CardInfo, CardName } from '../../../styles'

const ComicCard = ({ data }) => {

  return (
    <Card background={data.thumbnail}>
      <Overlayer />
      <Link to={`comics/${data.id}`}>
        <CardInfo>
          <CardName>
            <span>{data.name}</span>
          </CardName>
          <div className='character-favorite'></div>
        </CardInfo>
      </Link>
    </Card>
  );
};

ComicCard.propTypes = {
  data: PropTypes.object.isRequired
};

export default ComicCard;
