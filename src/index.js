import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children :[
            {
                path: "/",
                element:<Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path:"/ReataurantMenu/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error/>
    },
    
    
])

const root= ReactDOM.createRoot(document.getElementById("root"))
// root.render(HeadingComponent)//cannot render it like this as it is a component
root.render(<RouterProvider router={appRouter}/>) //this syntax is understood by babel