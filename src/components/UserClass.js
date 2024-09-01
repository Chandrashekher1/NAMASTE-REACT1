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
    
        const data = await fetch("https://api.github.com/users/akshaymarch7")
        const json = await data.json()

        this.setState ({
            userInfo:json
        })
        console.log(json);
        
    }

    componentDidUpdate(){
        console.log("componenet did call");
        
    }

    render () {
        const {name, location } = this.state.userInfo 
       
        return (
            <div className="user-card">
                <h2>Name: {name}</h2>
                <h3>location: {location}</h3>
                <h4>Contact: @CP</h4>
            </div>
        )
    }
}

export default UserClass