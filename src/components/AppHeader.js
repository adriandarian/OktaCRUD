import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    withStyles,
} from '@material-ui/core';
import LoginButton from './LoginButton';

const styles = {
    flex: {
        flex: 1,
    }
}


const AppHeader = () => (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                Okta CRUD React App
            </Typography>
            <div className={ classes.flex } />
            <LoginButton />
        </Toolbar>
    </AppBar>
);

export default withStyles(styles)(AppHeader);