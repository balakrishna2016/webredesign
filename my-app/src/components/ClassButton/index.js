import React, {Component} from 'react'

class ClassButton extends Component{
    render(){
        return(

                <button>
                {this.props.name}
                </button>
            
        );
    }
}




export default ClassButton