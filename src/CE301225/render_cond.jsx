import React,{ Component } from "react";

class RenderCond extends Component{
    constructor(props){
        super(props);
        this.state={
            isOn: false,
        };
    }

        toggle = () => {
            this.setState({isOn: !this.state.isOn});
        };
        render (){
            return <>
                <button onClick={this.toggle}>
                    {this.state.isOn ? "ON" : "OFF"}
                </button>
                <p>Status : {this.state.isOn ? "Active" : "Inactive"}</p>
            </>;
        };

    }


export default RenderCond;