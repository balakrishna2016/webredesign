import React, { Component } from 'react';

class NewButton extends Component{

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }




    render(){
        return(
            <div className="my-button">
                <button
                style={{backgroundColor : this.props.color, margin : this.props.margin}}
                onClick={
                    ()=> {
                        this.setState({
                            count : this.state.count + 1
                        })
                    }
                }
                >
                {this.props.name} 
                </button>

                <div className="count">Count : {this.state.count}</div>
                <div className="state_target">{this.state.count}</div>
            </div>
        );
    }
}


export default NewButton