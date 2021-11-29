import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Container, Grid } from '@material-ui/core';
import SigninForm from './SigninForm';
import { useStyles } from './styles';
import { useHistory } from 'react-router-dom';
import ImgLogin from './pictures/img-login.png';

const userLoginSelector = (state) => state.userLogin;

const Signin = () => {
    const { userInfo } = useSelector(userLoginSelector);
    const history = useHistory();
    const classes = useStyles();

    const redirect = () => {
        setTimeout(() => {
            history.push('/');
        }, 1000)
    }

    return (
        <Container className={classes.container}>
            {userInfo
                ? (
                    <Box>
                        <h2>Login successful</h2>
                        {redirect()}
                    </Box>
                ) : (
                    <Grid
                        container
                        spacing={2}
                        className={classes.gridContainer}
                    >
                        <Grid item xs={12} sm={6} md={6} className={classes.imgLogin}>
                            <img
                                alt='ImgLogin'
                                src={ImgLogin}
                                width={200}
                                height={200}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} className={classes.mainLogin}>
                            <h2>Member Login</h2>
                            <SigninForm />
                            <Box className={classes.forgotNamePassText}><span style={{ color: 'lightgray' }}>Forgot</span> Username/Password?</Box>
                            <Box className={classes.createAccountText}>Create your Account &rarr;</Box>
                        </Grid>
                    </Grid>
                )}
        </Container>
    );
};

export default Signin;
