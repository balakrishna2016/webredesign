import React,{Component} from 'react';

import {connect} from 'react-redux'
import * as actions from '../redux/actions'
class CheckBox extends Component{

    render(){
        // console.log(this.props);
        return(
            <div>
                {
                    !this.props.TickBoxState ?
                    <i className="fa fa-square-o" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{
                      this.props.Tick()
                    }}
                    ></i>
                    :
                    <i className="fa fa-check-square-o" aria-hidden="true" style={{fontSize : 25, color : 'black'}}
                    onClick={()=>{
                      this.props.UnTick()
                    }}
                    ></i>
                }

            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    TickBoxState : state.TickBox
  }
}

export default connect(mapStateToProps,actions)(CheckBox);
