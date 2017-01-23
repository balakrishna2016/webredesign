
import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';

import RadioButton from './wo_redux/RadioButton'

describe('<RadioButton />', () => {
  it('check button class', () => {
  
    const wrapper = mount(<RadioButton />);
    expect(wrapper.containsAllMatchingElements([
      <i class="fa fa-square-o" aria-hidden="true" style="font-size: 25px; color: rgb(12, 183, 222);"></i>
    ]).toEqual(true)
    );
  });
})