import {ACCOUNT_ROUTE, HOMEPAGE_ROUTE, LOGIN_ROUTE} from "./utils/consts";
import Login from "./components/Login";
import MyAccount from "./views/MyAccount";
import HomePage from "./views/HomePage";

export const publicRoutes = [
    {
        path: HOMEPAGE_ROUTE,
        Component: HomePage
    },
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: ACCOUNT_ROUTE,
        Component: MyAccount
    }
]