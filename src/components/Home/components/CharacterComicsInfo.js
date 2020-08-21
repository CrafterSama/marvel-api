import React from 'react'
import { Link } from 'react-router-dom'
import { SpinnerCircularFixed } from 'spinners-react';
import {
  CharacterModal,
  CharacterModalName,
  CharacterDescription,
  ComicList,
  ComicListItem,
  ComicImage,
  ComicTitle,
  LoadingBox
} from '../../../styles'
import { useStateValue } from '../../../context'
import { strToSlug } from '../../../helpers'

const CharacterComicsInfo = ({ data, toggle }) => {

  const [state] = useStateValue()

  return (
    <CharacterModal>
      <CharacterModalName>{data.name}</CharacterModalName>
      <CharacterDescription>
        {data.description ? data.description : 'No Description'}
      </CharacterDescription>
      {state.loadingModal ? (
        <LoadingBox>
          <SpinnerCircularFixed
            size={50}
            thickness={100}
            speed={100}
            color='rgba(236, 29, 36, 1)'
            secondaryColor='rgba(204, 204, 204, 1)'
          />
        </LoadingBox>
      ) : (
        <ComicList>
          <h4>Comics:</h4>
          {state.characterDetails.length > 0 ? (
            state.characterDetails.map((comic, key) => (
              <ComicListItem key={key}>
                <ComicImage>
                  <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                  />
                </ComicImage>
                <ComicTitle>
                  <Link
                    to={`/characters/${strToSlug(data.name)}/comics/${strToSlug(
                      comic.title
                    )}`}
                    onClick={toggle}
                  >
                    {comic.title}
                  </Link>
                  <p>
                    {comic.description
                      ? `${comic.description.substring(0, 150)}...`
                      : 'No Description'}
                  </p>
                </ComicTitle>
              </ComicListItem>
            ))
          ) : (
            <p>No Comics Associated</p>
          )}
        </ComicList>
      )}
    </CharacterModal>
  );
}

export default CharacterComicsInfo
