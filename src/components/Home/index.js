import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoadingBox } from '../../styles'
import { SpinnerCircularFixed } from 'spinners-react';
import Main from './components/Characters'
import Character from './components/CharactersDetails'
import { useStateValue } from '../../context'

const Home = () => {

  const [state] = useStateValue()

  console.log(state)

  return (
    <HomeContainer>
      {state.loading ? (
        <LoadingBox>
          <SpinnerCircularFixed
            size={100}
            thickness={100}
            speed={100}
            color='rgba(236, 29, 36, 1)'
            secondaryColor='rgba(204, 204, 204, 1)'
          />
        </LoadingBox>
      ) : (
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/character' component={Character} />
        </Switch>
      )}
    </HomeContainer>
  );
}

export default Home
