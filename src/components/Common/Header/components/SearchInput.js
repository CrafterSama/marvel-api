import React, { useState } from 'react'
import { SearchInputContainer } from '../../../../styles'

const SearchInput = () => {

  const [search, setSearch] = useState([])

  const onChange = (e) => {

    let data = {...search}

    data[e.target.name] = e.target.value

    setSearch(data)

  }

  const onSubmit = (event) => {
    event.preventDefault()

    //fetchData(search)

  }

  return (
    <SearchInputContainer>
      <form onSubmit={onSubmit}>
        <input name="search" type="text" onChange={onChange} />
      </form>
    </SearchInputContainer>
  )
}

export default SearchInput
