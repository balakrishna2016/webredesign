/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TickBox from '../src/components/TickBox'
import Toggle from '../src/components/Toggle'
import RadioButton from '../src/components/RadioButton'
import styles from './styles/styles.css'

import { Provider } from 'react-redux'
import { createStore , combineReducers } from 'redux'


import reducers from './redux/reducers'

class App extends Component {
  render() {
    return (

      <Provider store={createStore(reducers)}>
        <div>
            <div className="appcontainer">
              <TickBox size={25} color={'rgba(12, 183, 222,1)'}/>
              <Toggle size={25} color={'rgba(12, 183, 222,1)'}/>
              <RadioButton size={25} color={'rgba(12, 183, 222,1)'}/>
          </div>
        </div>
      </Provider>

    );
  }
}

export default App;
