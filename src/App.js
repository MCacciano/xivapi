import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';

import Navbar from './components/layout/Navbar';

import Lodestone from './components/lodestone/Lodestone';
import EntryDetail from './components/lodestone/devBlog/EntryDetail';
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
            <Route
              exact
              path='/lodestone/devBlog/:title'
              component={EntryDetail}
            />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
