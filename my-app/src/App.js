/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './styles/styles.css'



import Button from '../src/components/Button'
// import AlertButton from '../src/components/AlertButton'
// import ClassButton from '../src/components/ClassButton'


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

            
        </div>
    

    );
  }
}

export default App;
