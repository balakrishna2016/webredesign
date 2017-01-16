import React,{Component} from 'react';


class RadioButton extends Component{

    constructor(){
      super();
      this.state = {
        isClicked : false
      }
    }

    switch_radio(value){
      this.setState({isClicked : value})
    }

    render(){
        // console.log(this.props);
        return(
            <div>
                {
                    !this.state.isClicked ?
                    <i className="fa fa-circle-o" aria-hidden="true" 
                    style={{
                        fontSize : this.props.size, 
                        color : this.props.color
                    }}
                    onClick={()=>{
                      this.switch_radio(true)
                    }}
                    ></i>
                    :
                    <i className="fa fa-circle" aria-hidden="true" 
                    style={{
                        fontSize : this.props.size, 
                        color : this.props.color
                    }}
                    onClick={()=>{
                      this.switch_radio(false)
                    }}
                    ></i>
                }

            </div>
        )
    }
}



export default RadioButton;
