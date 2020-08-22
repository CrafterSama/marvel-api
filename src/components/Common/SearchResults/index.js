import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../../context'
import CharacterCard from '../../Home/components/CharacterCard'
import CharacterModal from '../../Home/components/CharacterModal'
import ComicDetails from '../../Home/components/CharacterComicsInfo'
import {
  MainGrid,
  MainGridItem,
  Card,
  CardInfo,
  CardName,
  SectionTitle,
  Overlayer
} from '../../../styles'

const SearchResults = () => {

  const [state] = useStateValue()
  const [isOpen, setIsOpen] = useState(false)
  const [isFade, setIsFade] = useState(false)
  const [characterData, setCharacterData] = useState()

  const handleToggleModal = () => {
    setIsFade(!isFade)
    setIsOpen(!isOpen)
  }

  console.log(state)

  return (
    <>
      {state.characters &&
        <>
          <SectionTitle>Characters</SectionTitle>
          <MainGrid>
            {state.characters.map((item, key) => (
              <MainGridItem key={key}>
                <CharacterCard
                  data={item}
                  setData={setCharacterData}
                  showCharacterInfo={handleToggleModal}
                />
              </MainGridItem>
            ))}
          </MainGrid>
        </>
      }
      {state.comics &&
        <>
          <SectionTitle>Comics</SectionTitle>
          <MainGrid>
            {state.comics.map((item, key) => (
              <MainGridItem key={key}>
                <Card background={item.thumbnail}>
                  <Overlayer />
                  <Link push to={`/comics/${item.id}`}>
                    <CardInfo>
                      <CardName>
                        <span>{item.title}</span>
                      </CardName>
                      <div className='favorite'></div>
                    </CardInfo>
                  </Link>
                </Card>
              </MainGridItem>
            ))}
          </MainGrid>
        </>
      }
      {state.comic &&
        <MainGrid>
          {state.comic.map((item, key) => (
            <ComicDetails data={item} key={key} />
          ))}
        </MainGrid>
      }
      <CharacterModal
        isOpen={isOpen}
        data={characterData}
        toggle={handleToggleModal}
      />
    </>
  );
}

export default SearchResults
