import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchInputContainer, StyledForm, StyledInput } from '../../../../styles'
import { setGlobalState } from '../../../../utils'
import { useStateValue } from '../../../../context'

const SearchInput = () => {

  const [search, setSearch] = useState()
  const [, dispatch] = useStateValue();

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
        <FontAwesomeIcon icon={faSearch} />
        <StyledInput name="search" type="text" onChange={onChange} />
      </StyledForm>
    </SearchInputContainer>
  )
}

export default SearchInput
