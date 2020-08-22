import React from 'react'
import PropTypes from 'prop-types'
import {
  ComicDetail,
  ComicImageBox,
  ComicInfo,
  ComicCreators,
  ComicDescription,
  ComicWriters,
  ComicPencilers,
  ComicArtists
} from '../../../styles'

const ComicDetails = ({ data }) => {
  return (
    <ComicDetail>
      <ComicImageBox>
        <img
          src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
          alt={data.title}
        />
      </ComicImageBox>
      <ComicInfo>
        <h2>{data.title}</h2>
        <ComicCreators>
          <ComicWriters>
            Writers: {data}
          </ComicWriters>
          <ComicPencilers></ComicPencilers>
          <ComicArtists></ComicArtists>
        </ComicCreators>
        <ComicDescription>
          {data.description}
        </ComicDescription>
      </ComicInfo>
    </ComicDetail>
  )
}

ComicDetails.propTypes = {
  data: PropTypes.object.isRequired
}

export default ComicDetails
