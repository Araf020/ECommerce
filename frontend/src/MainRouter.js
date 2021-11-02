import React from 'react'
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Index from './AdminDashboard/Index'

function MainRouter() {
    return (
    <Router>
        <Switch>
            <Route path="/" component={Index} />
        </Switch>
    </Router>
    )
}

export default MainRouter
