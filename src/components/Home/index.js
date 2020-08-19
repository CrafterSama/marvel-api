import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer } from '../../styles'
import Main from './components/Characters'
import Character from './components/CharactersDetails'

const Home = () => {
  return (
    <HomeContainer>
      <Switch>
        <Route path='/' component={Main} />
        <Route path='/character' component={Character} />
      </Switch>
    </HomeContainer>
  )
}

export default Home
