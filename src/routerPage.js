import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './pages/landingPage/LandingPage';
import ViewBlog from './pages/landingPage/viewBlog';
import Blog from './pages/landingPage/viewLandingPage';
import Login from './pages/login/Login';
import Register from './pages/register/register';

// const LandingPage = React.lazy(() =>import("./pages/landingPage/LandingPage"));
// const Login = React.lazy(() =>import("./pages/login/Login"));
// const Register = React.lazy(() =>import("./pages/register/register"));

export default function RouterPage() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/register" component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/blog/:id" component={ViewBlog} />
                </Switch>
            </BrowserRouter>
    )
}
