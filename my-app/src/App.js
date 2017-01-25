/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './styles/styles.css'



import Button from '../src/components/Button'
import NewButton from '../src/components/NewButton'


class App extends Component {
  
  onClickButton(){
    alert("Hello, Button Clicked !!! ")
  }

  login(){
    alert("Login !!!")
  }


  render() {
    return (
      
        <div>
            <Button 
            name="Button" 
            color = "green"
            margin = '50'
            onClickButton={this.onClickButton} />

            <Button 
            name="Button" 
            color = "red"
            margin = '50'
            onClickButton={this.onClickButton} />

            <Button 
            name="Button" 
            color = "green"
            margin = '50'
            onClickButton={this.onClickButton} />

            <NewButton 
            name="NewButton" 
            color = "green"
            margin = '50'
            />


        </div>
    

    );
  }
}

export default App;
