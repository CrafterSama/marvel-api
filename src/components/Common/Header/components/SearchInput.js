import React, { useState, useEffect } from 'react'
import { SearchInputContainer } from '../../../../styles'
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
      <form onSubmit={onSubmit}>
        <input name="search" type="text" onChange={onChange} />
      </form>
    </SearchInputContainer>
  )
}

export default SearchInput
