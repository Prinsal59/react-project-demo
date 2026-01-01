import React,{Component} from "react";
class StringState extends Component{
    constructor(){
        super();
        this.state={
            name:"",
            email:"",
            age:"",

        };
    }
    handleNameChang=(e)=>{
        this.setState({name: e.target.value});
    };
    handleEmailChange=(e)=>{
        this.setState({email:e.target.value});
    };
    handleAgeChange=(e)=>{
        this.setState({age:e.target.value
        });
    }
    consolelog=()=>{
        console.log(this.state.name);
        console.log(this.state.email);
        console.log(this.state.age);
    };
    render(){
        const {name , email , age}=this.state;
        return <>
            <input type="text" value={name} onChange={this.handleNameChang} />
            <input type="text" value={email} onChange={this.handleEmailChange} />
            <input type="text" value={age} onChange={this.handleAgeChange} />
            <button onClick={this.consolelog}>click me</button>
            <h2>name : {name}</h2>
            <h2>email: {email} </h2>
            <h2>age: {age} </h2>
        
        
        </>
    }
}
export default StringState;