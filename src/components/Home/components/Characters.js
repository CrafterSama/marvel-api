import React, { useState } from 'react'
import { useStateValue } from '../../../context'
import CharacterCard from './CharacterCard'
import CharacterModal from './CharacterModal'
import CharacterComicsInfo from './CharacterComicsInfo'
import ComicDetails from './CharacterComicsInfo'
import {
  MainGrid,
  MainGridItem,
} from '../../../styles'

const Characters = () => {

  const [state] = useStateValue()
  const [isOpen, setIsOpen] = useState(false)
  const [isFade, setIsFade] = useState(false)
  const [characterData, setCharacterData] = useState()

  const handleToggleModal = () => {
    setIsFade(!isFade)
    setIsOpen(!isOpen)
  }

  return (
    <>
      <MainGrid>
        {state.characters &&
          state.characters.map((item, key) => (
            <MainGridItem key={key}>
              <CharacterCard
                data={item}
                setData={setCharacterData}
                showCharacterInfo={handleToggleModal}
              />
            </MainGridItem>
          ))}
        {state.comics &&
          state.comics.map((item, key) => (
            <MainGridItem key={key}>
              <ComicDetails data={item} />
            </MainGridItem>
          ))}
      </MainGrid>
      <CharacterModal open={isOpen} toggle={handleToggleModal}>
        <CharacterComicsInfo data={characterData} toggle={handleToggleModal} />
      </CharacterModal>
    </>
  );
}

export default Characters
