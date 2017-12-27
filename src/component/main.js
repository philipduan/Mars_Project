import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Encounter from "./encounter";
import Register from "./register";
import Report from "./report";

class Main extends Component{
    constructor(props){
        super(props);
        var id = sessionStorage.getItem('colonist') == null ? "" : JSON.parse(sessionStorage.getItem('colonist')).id;
        this.state = {
            id : id,
        }
        this.saveId =  this.saveId.bind(this);
    }

    saveId(id){
        this.setState({
            id:id,
        });
    }

    render(){

        return(
            <main> 
            <Switch>
                <Route exact path = '/' component = {Home} />
                <Route exact path = '/register' render={() => <Register  saveId ={this.saveId}/>} />
                <Route exact path = '/encounter' component = {Encounter}/>
                <Route exact path = '/report' render={() => <Report  saveId={this.state.id}/>} />   
            </Switch>
        </main>
        )
    }
}

/*const Main = () => (
    <main> 
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route exact path = '/register' component = {Register} />
            <Route exact path = '/encounter' component = {Encounter}/>
            <Route exact path = '/report' component = {Report} />   
        </Switch>
    </main>
);*/

export default Main;
