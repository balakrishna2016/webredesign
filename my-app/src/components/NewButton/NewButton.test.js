import React from 'react';
import ReactDOM from 'react-dom';

import NewButton from './index.js'
import expect from 'expect'
import { shallow } from 'enzyme'

it('Simulated Click Successfully', () => {
    const wrapper = shallow(
            <NewButton name="NewButton" 
            color = "green"
            margin = '50'/>
            )
    expect(wrapper.find('.count').text()).toEqual('Count : 0') // checking initial count to be zero
    // console.log(wrapper.find('.count').text())

    wrapper.find('button').simulate('click') // simulating click
    // console.log(wrapper.find('.count').text())
    expect(wrapper.find('.count').text()).toEqual('Count : 1') // checking count to be 1 after click
    
    // wrapper.find('button').simulate('click')
})