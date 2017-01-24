import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import expect from 'expect'
import { shallow } from 'enzyme'
import ClassButton from './components/ClassButton'

it('renders button with the passed props', () => {

  const wrapper = shallow(<ClassButton name="XYZ" />)
  expect(wrapper.props().children).toEqual("XYZ")
  console.log(wrapper.props())
});










