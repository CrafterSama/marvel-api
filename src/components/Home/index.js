import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomeContainer, LoadingBox } from '../../styles'
import { SpinnerCircularFixed } from 'spinners-react';
import SearchResults from '../Common/SearchResults'
import ComicsDetails from '../Details/components/ComicDetails';
import { useStateValue } from '../../context'

const Home = () => {

  const [state] = useStateValue()

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
          <Route exact path='/' component={SearchResults} />
          <Route
            exact
            path='/comics/:id'
            component={ComicsDetails}
          />
        </Switch>
      )}
    </HomeContainer>
  );
}

export default Home
