import React, {useContext} from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {LOGIN_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const Navbar = () => {
    const { auth } = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <AppBar className={'appbar'}>
            <Toolbar>
                <Grid container className={'in-out-button'}>
                    {user ?
                        <Button onClick={() => auth.signOut()} className={'btn'}>Log out</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button className={'btn'}>Log in</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
