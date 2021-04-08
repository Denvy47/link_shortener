import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailPage";
import {AuthPage} from "./pages/AuthPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return(
            <Switch>
                <Route path="/links">
                    <LinksPage/>
                </Route>
                <Route path="/create">
                    <CreatePage/>
                </Route>
                <Route path="/detail">
                    <DetailPage/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/">
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}