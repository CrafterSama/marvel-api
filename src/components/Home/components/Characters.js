import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from "react-router-dom";
import { useStateValue } from '../../../context'
import { SET_CHARACTERS } from '../../../context/types'
import useMarvelData from '../../../hooks/useMarvelData'
import useGetData from '../../../hooks/useGetData'
import { MainGrid, MainGridItem } from '../../../styles'
import CharacterCard from './CharacterCard'

const Main = () => {

  const [data, loading] = useMarvelData()

  return (
    <MainGrid>
      {data.map((item, key) => (
        <MainGridItem key={key}>
          <CharacterCard data={item} />
        </MainGridItem>
      ))}
    </MainGrid>
  )
}

export default Main
