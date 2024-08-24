import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


// const styleCard={
//     backgroundColor:"#f0f0f0",
// }



// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



/* // * We can also use index as the key to the JSX child elemnt - which is the 2nd parameter of the map() method, but is not a recommended practice - react official Docs declared this*/
// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.
// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(HeadingComponent)//cannot render it like this as it is a component
root.render(<AppLayout/>)//this syntax is understood by babel