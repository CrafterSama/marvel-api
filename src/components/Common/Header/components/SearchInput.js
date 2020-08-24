import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchInputContainer, StyledForm, StyledInput, IconImage } from '../../../../styles'
import { useStateValue } from '../../../../context'
import { getCharacters, getComics, getComicByURL, getComicById, getCharactersRandomly } from '../../../../context/actions'

const SearchInput = () => {

  let history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState();
  const [, dispatch] = useStateValue();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    marvelData();
  };

  const marvelData = () => {
    if(!search && !location.search) {
      history.push('/');
      getCharactersRandomly(dispatch);
    }
    if (!search && location.search) {
      console.log(window.location.hash);
      const urlParams = new URLSearchParams(location.search);
      const character = urlParams.get('character');
      const comic = urlParams.get('comic') && urlParams.get('comic').trim();
      const browser = {
        character: character,
        comic: comic,
        hash: window.location.hash,
      };
      getComicByURL(browser, dispatch);
    }
    if (search && search.includes('www.marvel.com')) {
      history.push('/');
      const searchArray = search.split('/');
      getComicById(searchArray[5], dispatch);
    }
    if (search && !search.includes('www.marvel.com')) {
      history.push('/');
      getCharacters(search, dispatch);
      getComics(search, dispatch);
    }
  }

  useEffect(() => {
    marvelData()
    // eslint-disable-next-line
  }, [])

  return (
    <SearchInputContainer>
      <StyledForm onSubmit={onSubmit}>
        <IconImage icon={faSearch} />
        <StyledInput
          name='search'
          type='text'
          placeholder="Search"
          onChange={onChange}
        />
      </StyledForm>
    </SearchInputContainer>
  );
}

export default SearchInput
