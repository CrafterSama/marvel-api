import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';
import Header from '../../components/Common/Header';
/* import Footer from '../../components/Common/Footer'; */
import {
  MainLayout, LoadingBox
} from '../../styles';
import Home from '../../pages/Home';
import Details from '../../pages/Details';
import { useStateValue } from '../../context';

const Layout = () => {

  const [state] = useStateValue();

  return (
    <MainLayout darkmode={state.darkMode}>
      <Header />
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
            <Route exact path='/' component={Home} />
          <Route
            path='/comics/:id'
            component={Details}
          />
        </Switch>
      )}
      {/* <Footer /> */}
    </MainLayout>
  );
};

export default Layout;
