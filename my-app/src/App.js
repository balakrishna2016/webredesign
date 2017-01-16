/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TickBox from '../src/components/wo_redux/TickBox'
import Toggle from '../src/components/wo_redux/Toggle'
import RadioButton from '../src/components/wo_redux/RadioButton'
import styles from './styles/styles.css'



class App extends Component {
  


  render() {
    return (

      
        <div>
            <div className="appcontainer">
              <TickBox size={25} color={'rgba(12, 183, 222,1)'}/>
              <RadioButton size={25} color={'rgba(12, 183, 222,1)'}/>
              <Toggle size={25} color={'rgba(12, 183, 222,1)'}/>

          </div>
        </div>
    

    );
  }
}

export default App;
