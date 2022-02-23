import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {HOMEPAGE_ROUTE, ACCOUNT_ROUTE} from "../utils/consts";
import {privateRoutes, publicRoutes} from "../routes";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    console.log(user);

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true}/>
                )}
                <Redirect to={ACCOUNT_ROUTE}/>
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, Component}) =>
                    <Route path={path} component={Component} exact={true}/>
                )}
                <Redirect to={HOMEPAGE_ROUTE}/>
            </Switch>
        )
}

export default AppRouter;
