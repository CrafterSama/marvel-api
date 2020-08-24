import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../../context';
import EmptyResults from '../EmptyResults';
import CharacterCard from '../../Character/components/CharacterCard';
import CharacterModal from '../../Character/components/CharacterModal';
import ComicDetails from '../../Details/Comics/components/ComicDetails';
import {
  MainGrid,
  MainGridItem,
  Card,
  CardInfo,
  CardName,
  SectionTitle,
  Overlayer,
} from '../../../styles';

const SearchResults = () => {

  const [state] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);
  const [isFade, setIsFade] = useState(false);
  const [characterData, setCharacterData] = useState();

  const handleToggleModal = () => {
    setIsFade(!isFade);
    setIsOpen(!isOpen);
  }

  return (
    <>
      {state.characters && state.characters.length > 0 ?
        <>
          {/* <SectionTitle>Characters</SectionTitle> */}
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
      : (
        <MainGrid>
          <EmptyResults />
        </MainGrid>
      )}
      {state.comics &&
        <>
          <SectionTitle>Comics</SectionTitle>
          <MainGrid>
            {state.comics.map((item, key) => (
              <MainGridItem key={key}>
                <Card background={item.thumbnail}>
                  <Overlayer />
                  <Link to={`/comics/${item.id}`}>
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
        <>
          {/* <SectionTitle>Marvel Issue</SectionTitle> */}
          <MainGrid>
            {state.comic.map((item, key) => (
              <ComicDetails data={item} key={key} />
            ))}
          </MainGrid>
        </>
      }
      <CharacterModal
        isOpen={isOpen}
        data={characterData}
        toggle={handleToggleModal}
      />
    </>
  );
};

export default SearchResults;
