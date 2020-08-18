import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer } from '../../styles'
import Main from './components/Main'
import Character from './components/Character'

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
