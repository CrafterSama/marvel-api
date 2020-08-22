import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchInputContainer, StyledForm, StyledInput, IconImage } from '../../../../styles'
import { useStateValue } from '../../../../context'
import { getCharacters, getComics, getComicByURL, getComicById, getCharactersRandomly } from '../../../../context/actions'

const SearchInput = () => {

  const location = useLocation();
  const [search, setSearch] = useState();
  const [state, dispatch] = useStateValue();

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    marvelData()
  }

  const marvelData = () => {
    if(!search && !location.search) {
      getCharactersRandomly(dispatch);
    }
    if (!search && location.search) {
      const urlParams = new URLSearchParams(location.search);
      const browser = {
        character: urlParams.get('character'),
        comic: urlParams.get('comic').trim(),
        hash: window.location.hash,
      };
      getComicByURL(browser, dispatch);
    }
    if (search && search.includes('www.marvel.com')) {
      const searchArray = search.split('/');
      getCharacters(search, dispatch);
      getComicById(searchArray[5], dispatch);
    }
    if (search && !search.includes('www.marvel.com')) {
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
        <IconImage icon={faSearch} darkmode={state.darkMode} />
        <StyledInput
          name='search'
          type='text'
          placeholder="Search"
          onChange={onChange}
          darkmode={state.darkMode}
        />
      </StyledForm>
    </SearchInputContainer>
  );
}

export default SearchInput
