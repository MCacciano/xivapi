import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';

import Lodestone from './components/lodestone/Lodestone';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' />
            <Route exact path='/lodestone' component={Lodestone} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
