import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import GroupMasterAdd from './components/groupMaster/GroupMasterAdd.tsx'
// your components
const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const MissingPage = () => <h1>404</h1>;

const routes = (
    <Switch>
        <Route path="/about" exact component={GroupMasterAdd} />
        <Route path="/about" component={About} />
        <Route component={MissingPage} />
    </Switch>
);

export default routes;
