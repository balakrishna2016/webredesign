/* eslint-disable */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styles from './styles/styles.css'



import Button from '../src/components/Button'
import AlertButton from '../src/components/AlertButton'
import ClassButton from '../src/components/ClassButton'


class App extends Component {
  constructor(props) {
    super(props);
    this.props = {
      checked: true
    }
    this.onClickButton = this.onClickButton.bind(this);
    this.onCheckboxClick = this.onCheckboxClick.bind(this);
  }


onClickButton() {
    alert('button is clicked!');
  }
  onCheckboxClick() {
    this.setState({ checked: !this.props.checked });
    alert('Checkbox is clicked!');
  }


  onClickAlertButton(){
    alert("Clicked  function")
  }


  render() {
    return (

      
        <div>
            <Button label="Button" onClickButton={this.onClickButton} />
            <AlertButton onClickButton={this.onClickButton}/>
            <br />
            <br />
            
            <ClassButton name="ABCD"/>
        </div>
    

    );
  }
}

export default App;
