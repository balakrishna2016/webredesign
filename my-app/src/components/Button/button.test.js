import React from 'react';
import ReactDOM from 'react-dom';

import Button from './index.js'
import expect from 'expect'
import sinon from 'sinon'
import { shallow } from 'enzyme'


it('Simulates button click', ()=>{
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button 
        name="test" 
        onClickButton={onButtonClick} 
        color = 'red' 
        margin = '50px' 
        />);

        wrapper.find('button').simulate('click')
        expect(onButtonClick.calledOnce).toEqual(1)
})


it('renders Button with all props', () => {

  var onClickFunc = () => {};
  expect(shallow(
      <Button 
        name="test" 
        onClickButton={onClickFunc} 
        color = 'red' 
        margin = '50px' 
        />).contains(
                <div className="my-button">
                    <button
                    style={{backgroundColor : 'red', margin : '50px'}}
                    onClick={onClickFunc}
                    >
                    test
                    </button>
                </div>
            )).toBe(true)
  

});