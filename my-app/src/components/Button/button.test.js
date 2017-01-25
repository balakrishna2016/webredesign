import React from 'react';
import ReactDOM from 'react-dom';

import Button from './index.js'
import expect from 'expect'
import { shallow } from 'enzyme'


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