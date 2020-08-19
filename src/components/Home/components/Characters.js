import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from "react-router-dom";
import { useStateValue } from '../../../context'
import { SET_CHARACTERS } from '../../../context/types'
import useGetData from '../../../hooks/useGetData'
import { MainGrid, MainGridItem } from '../../../styles'
import CharacterCard from './CharacterCard'

const Main = () => {

  const getData = useGetData()
  const { slug } = useParams()
  const [state, dispatch] = useStateValue()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const marvelData = useCallback(async () => {
    setLoading(false)
    if (!slug) {
      const characters = await getData();
      console.log(characters)
      dispatch({
        type: SET_CHARACTERS,
        characters: characters.data.results
      })
      setData(characters.data.results)
    } else {
      setData(state.characters)
    }
  }, [setData, setLoading, getData, dispatch, slug, state])

  useEffect(() => {
    if (loading) {
      marvelData()
    }
  }, [loading, marvelData])

  console.log(state)

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
