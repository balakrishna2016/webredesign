import React,{Component} from 'react';

import styles from '../styles/styles.css'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'

class Toggle extends Component{
    render(){
      console.log(this.props);
        return(
            <div>
            {
            !this.props.Toggle ?
            <i className="fa fa-toggle-on"
            aria-hidden="true"
            style={{
              fontSize : this.props.size, 
              color : this.props.color
            }}
            onClick={()=>{
              this.props.ToggleON()
            }}
            ></i>
            :
            <i className="fa fa-toggle-off" aria-hidden="true" style={{
              fontSize : this.props.size, 
              color : this.props.color
            }}
            onClick={()=>{
              this.props.ToggleOFF()
            }}
            ></i>

            }
            </div>
        )
    }
}


const mapStateToProps = state => {
  return {
    Toggle : state.Toggle
  }
}

export default connect(mapStateToProps,actions)(Toggle);
