import React,{Component} from 'react'


class AlertButton extends Component{

   


    render(){
        console.log(this.props)
        return(
            <button
            onClick={this.props.onClickButton}
            >
            Click me to show alerts !!!
            </button>
        );
    }
}



export default AlertButton