import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import RadioButton from './wo_redux/RadioButton'
import TickBox from './wo_redux/TickBox'
import Toggle from './wo_redux/Toggle'

it('renders RadioButton without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RadioButton />, div);
});


it('renders TickBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TickBox />, div);
});


it('renders TickBox without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toggle />, div);
});

