import React from 'react'
import { CharacterModal, CharacterModalName, CharacterDescription, ComicList, ComicListItem } from '../../../styles'


const CharacterComicsInfo = ({ data }) => {
  return (
    <CharacterModal>
      <CharacterModalName>{data.name}</CharacterModalName>
      <CharacterDescription>{data.description}</CharacterDescription>
      <ComicList>
        {data.comics.items.map((comic, key) => (
          <ComicListItem key={key}>{comic.name}</ComicListItem>
        ))}
      </ComicList>
    </CharacterModal>
  );
}

export default CharacterComicsInfo
