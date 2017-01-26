import React, { Component } from 'react';

class TestComponent extends Component{
  render(){
    return(
      <div className="testcomponent">
        <ul>
          <li>Home</li>
          <li className="some-class">About</li>
          <li>Services</li>
        </ul>


      </div>
    );
  }
}


export default TestComponent
