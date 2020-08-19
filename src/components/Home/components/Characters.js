import React/* , { useState, useEffect } */ from 'react'
import { useStateValue } from '../../../context'
import CharacterCard from './CharacterCard'
import { MainGrid, MainGridItem } from '../../../styles'

const Main = () => {

  const [state] = useStateValue()

  return (
    <MainGrid>
      {state.characters && state.characters.map((item, key) => (
        <MainGridItem key={key}>
          <CharacterCard data={item} />
        </MainGridItem>
      ))}
    </MainGrid>
  )
}

export default Main
