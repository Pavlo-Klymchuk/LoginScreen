import React from 'react';
import { Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useStyles from './styles.js';
import { useActions } from '../../hooks/useActions.js';

const userLoginSelector = (state) => state.userLogin;

const Header = () => {
    const classes = useStyles();
    const { logout } = useActions()
    const { userInfo } = useSelector(userLoginSelector);

    return (
        <Container className={classes.container}>
            {!userInfo
                ?
                <button aria-label='signin-btn' className={`${classes.buttons} ${classes.btnSignin}`} >
                    <NavLink to='/signin' style={{ textDecoration: 'none' }}>
                        Войти
                    </NavLink>
                </button >
                :
                <button onClick={logout} aria-label='logout-btn' className={`${classes.buttons} ${classes.btnLogout}`}>
                    Выйти
                </button>
            }
        </Container>
    );
};

export default Header;