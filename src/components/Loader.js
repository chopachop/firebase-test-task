import React from 'react';
import {Box, Button, Container, Grid} from "@material-ui/core";

const Loader = () => {
    return (
        <Container>
            <Grid container className={'login-grid'}>

                <Grid className={'login-button-grid'}>
                    <div className="lds-circle">
                        <div></div>
                    </div>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Loader;
