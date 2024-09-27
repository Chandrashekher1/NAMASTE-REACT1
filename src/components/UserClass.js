// this is class based component not javascript fucntion it is normal javascript class

import React from "react";
import User from "./User";

class UserClass extends React.Component{

    constructor(props){
        super(props)

       this.state = {
         userInfo: {
            name: "Dummy",
            location: "Default",
            avatar_url:"https://dummy_url"
         }
       }
        console.log("Child constructor");
        
    }
    async componentDidMount(){
        // this method used to API Call
    
        const data = await fetch("https://api.github.com/users/chandrashekher1")
        const json = await data.json()
        console.log(json);
        this.setState ({
            userInfo:json,
        })   
    }
    componentDidUpdate(){
        console.log("componenet Did Update");
        
    }
    componentWillUnmount(){
        // this component is called when we are leaving the page

    }

    render () {
        const {name, location } = this.state.userInfo 
       
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name: {name}</h2>
                <h3>location: {location}</h3>
                <h4>Contact: @CP</h4>
            </div>
        )
    }
}

export default UserClass