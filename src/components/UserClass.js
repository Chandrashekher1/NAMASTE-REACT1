// this is class based component not javascript fucntion it is normal javascript class

import React from "react";
import User from "./User";

class UserClass extends React.Component{

    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="user-card">
                <h2>{this.props.name}</h2>
                <h3>{this.props.location}</h3>
                <h4>{this.props.contact}</h4>
            </div>
        )
    }
}

export default UserClass