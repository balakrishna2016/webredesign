import React from 'react';
import ReactDOM from 'react-dom';

import TestComponent from './index.js'
import expect from 'expect'
import { shallow } from 'enzyme'

it('Has all paragraphs correctly', () => {

  const wrapper = shallow(<TestComponent />)
  // expect(wrapper.find('ul').childAt(0).text()).toEqual('Home')
  // expect(wrapper.find('ul').childAt(1).text()).toEqual('About')
  // expect(wrapper.find('ul').childAt(2).text()).toEqual('Services')

  expect(wrapper.find('ul').children().length).toBe(3)

  //
  // to.have => toHave
  //
  // to.be => toBe()

  expect(wrapper.find('.some-class').exists()).toBe(true)
  // console.log(wrapper.find('.some-class').exists())


  //console.log(wrapper.find('.some-class').parent().is('ul'))


  expect(wrapper.find('.some-class').parent().is('ul')).toBe(true)//checking parent node

  //console.log(wrapper.find('.some-class').parents().length)

  expect(wrapper.find('.some-class').parents().length).toBe(2)





});


it('renders with out crashing', ()=>{

  const wrapper = shallow(<TestComponent/>)

  expect(wrapper.find('.testcomponent').length).toBe(1)
  // console.log(wrapper.find('.testcomponent').length);

} )
