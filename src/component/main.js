import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./home";
import Encounter from "./encounter";
import Register from "./register";
import Report from "./report";

const Main = () => (
    <main> 
        <Switch>
            <Route exact path = '/' component = {Home} />
            <Route path = '/register' component = {Register} />
            <Route path = '/encounter' component = {Encounter}/>
            <Route path = '/report' component = {Report} />   
        </Switch>
    </main>
);

export default Main;
