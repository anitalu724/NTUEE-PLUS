import React, {Component} from "react";
import {Route} from "react-router-dom";
//import {Home_in_page} from "./pages_in"
import { NavBar_in } from "../component/AppBar_in";
import {Home_in_page,Column_page,Career_page,Study_page} from "./pages_in"
//import Column from "./column";
//import Home_in from "./Home_in";

class App_in extends Component{
    render(){
        return(
            <div className="container">
                <NavBar_in/>
                    <Route path="/Home_in" exact component = {Home_in_page} />
                    <Route path="/Column" component = {Column_page} />
                    <Route path="/Career" component = {Career_page} />
                    <Route path="/Study" component = {Study_page} />
            </div>
        );
    }
}

export default App_in;