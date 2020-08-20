import React, { useState, useEffect } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchInputContainer, StyledForm, StyledInput, IconImage } from '../../../../styles'
import { setGlobalState } from '../../../../utils'
import { useStateValue } from '../../../../context'

const SearchInput = () => {

  const [search, setSearch] = useState()
  const [state, dispatch] = useStateValue();

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault()
    marvelData()
  }

  const marvelData = () => {
    setGlobalState(search, dispatch)
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
          onChange={onChange}
          darkmode={state.darkMode}
        />
      </StyledForm>
    </SearchInputContainer>
  );
}

export default SearchInput
