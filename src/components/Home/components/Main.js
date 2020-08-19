import React from 'react'
import { MainGrid, MainGridItem } from '../../../styles'

const Main = () => {

  const array = [1,3,4,5,6,7,8,9,0]

  return (
    <MainGrid>
      {array.map((x, key) => (
        <MainGridItem>
          <div></div>
        </MainGridItem>
      ))}
    </MainGrid>
  )
}

export default Main
