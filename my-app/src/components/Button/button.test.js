import React from 'react';
import ReactDOM from 'react-dom';
import Button from './index.js'


import expect from 'expect'
import { shallow } from 'enzyme'

it('renders button without crashing', () => {

  const props = {
    label : "test",
    onClickButton : () => {}
  }

  

  expect(
    shallow(
      <Button {...props}/>
      ).length
  ).toEqual(1)
});

it('has  class button style class',()=>{
  const props = {
    label : "test",
    onClickButton : () => {}
  }
  expect(
    shallow(<Button {...props}/>).hasClass('_my-button')
  ).toEqual(false)
});