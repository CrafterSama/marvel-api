import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchInputContainer, StyledForm, StyledInput, IconImage } from '../../../../styles'
import { useStateValue } from '../../../../context'
import { getCharacters, getComics, getComicByURL } from '../../../../context/actions'

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
    if (location.search) {
      const urlParams = new URLSearchParams(location.search);
      const browser = {
        character: urlParams.get('character'),
        comic: urlParams.get('comic'),
      };
      getComicByURL(browser, dispatch);
    } else {
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
