import User from "./User"
import UserClass from "./UserClass"
import React from "react"

// with class component

class About extends React.Component{
    constructor(props){
        super(props)

        console.log("parent constructor");
        
    }
    componentDidMount(){
        console.log("Parent Component");
        
    }

    render () {
        
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User/> */}
            
                
                <UserClass/>

            </div>
        )
    }
}

// with functional component

// const About = () => {

//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is Namaste React Web Series</h2>
//             {/* <User/> */}

//             <UserClass name={"Chandrashekher"} location ={"Aya Nagar New Delhi"} contact = {"@CP"} />
//         </div>
//     )
// } 


export default About