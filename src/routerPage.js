import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/register';



export default function RouterPage() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </BrowserRouter>
    )
}
