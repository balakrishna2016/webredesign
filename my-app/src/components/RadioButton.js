import React,{Component} from 'react';

import {connect} from 'react-redux'
import * as actions from '../redux/actions'
class RadioButton extends Component{

    render(){
        // console.log(this.props);
        return(
            <div>
                {
                    !this.props.Radio ?
                    <i className="fa fa-circle-o" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{
                      this.props.RadioON()
                    }}
                    ></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{
                      this.props.RadioOFF()
                    }}
                    ></i>
                }

            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    Radio : state.Radio
  }
}

export default connect(mapStateToProps,actions)(RadioButton);
