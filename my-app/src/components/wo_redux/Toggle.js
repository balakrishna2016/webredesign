import React,{Component} from 'react';


class Toggle extends Component{
    constructor(){
      super();
      this.state = {
        isClicked : false
      }
    }

    switch_toggle(value){
      this.setState({isClicked : value})
    }


    render(){
        return(
            <div>
            {
            !this.state.isClicked ?
            <i className="fa fa-toggle-on"
            aria-hidden="true"
            style={{
              fontSize : this.props.size, 
              color : this.props.color
            }}
            onClick={()=>{
              this.switch_toggle(true)
            }}
            ></i>
            :
            <i className="fa fa-toggle-off" aria-hidden="true" style={{
              fontSize : this.props.size, 
              color : this.props.color
            }}
            onClick={()=>{
              this.switch_toggle(false)
            }}
            ></i>

            }
            </div>
        )
    }
}




export default Toggle;
