import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";
import {Context} from "../index";
import firebase from "firebase/compat/app";

const Login = () => {
    const {auth} = useContext(Context);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const {user} = await auth.signInWithPopup(provider)
        console.log(user);
    }

    return (
        <Container>
            <Grid container className={'login-grid'}>

                <Grid className={'login-button-grid'}>
                    <Box className={'login-button-box'}>
                        <Button onClick={login} variant={'outlined'}>Войти с Google</Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;