import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.js'

it('renders button without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button label="Sample Button"/>, div);
});