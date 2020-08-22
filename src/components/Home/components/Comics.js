import React from 'react'
import { useParams } from 'react-router-dom'
import ComicsDetails from './ComicDetails'
import { useStateValue } from '../../../context'


const Comics = () => {

  const { id } = useParams()
  const [state] = useStateValue()

  console.log(id, state)

  return <div />
  //return <ComicsDetails data={state.comics} />

}

export default Comics
