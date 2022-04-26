import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from './pages/register/register';



export default function RouterPage() {
    return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/register" component={Register} />
                </Switch>
            </BrowserRouter>
    )
}
