import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SignUp from './pages/register/signup';


// const SignUp = React.lazy(() => import("./pages/register/signup"));

export default function RouterPage() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </BrowserRouter>
    )
}
