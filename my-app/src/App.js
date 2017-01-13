/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TickBox from '../src/components/TickBox'
import Toggle from '../src/components/Toggle'
import RadioButton from '../src/components/RadioButton'


import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'


import reducers from './redux/reducers'

class App extends Component {
  render() {
    return (

      <Provider store={createStore(reducers)}>
        <div>
          <TickBox />
          <Toggle />
          <RadioButton />
        </div>
      </Provider>

    );
  }
}

export default App;
