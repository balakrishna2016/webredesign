import React,{Component} from 'react';

class CheckBox extends Component{
    constructor(){
      super();
      this.state = {
        isClicked : false
      }
    }

    switch_tick(value){
      this.setState({isClicked : value})
    }

    render(){
        // console.log(this.props);
        // for icons we are using fontawesome !
        return(
            <div>
                {
                    !this.state.isClicked ?
                    
                    <i className="fa fa-square-o" aria-hidden="true" 
                    style={{
                        fontSize : this.props.size, 
                        color : this.props.color
                    }}
                    onClick={()=>{
                      this.switch_tick(true)
                    }}
                    ></i>
                    :
                    <i className="fa fa-check-square-o" aria-hidden="true" 
                    style={{
                        fontSize : this.props.size, 
                        color : this.props.color
                    }}
                    onClick={()=>{
                        this.switch_tick(false)
                    }}
                    ></i>
                }

            </div>
        )
    }
}




export default CheckBox;
