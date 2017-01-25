import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div className="my-button">
                <button
                style={{backgroundColor : this.props.color, margin : this.props.margin}}
                onClick={this.props.onClickButton}
                >
                {this.props.name}
                </button>
            </div>
        );
    }
}


export default Button