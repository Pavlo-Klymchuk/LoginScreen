import React, { useCallback } from 'react';
import { useActions } from '../../../hooks/useActions';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@material-ui/core';
import { useStyles } from './styles';
import ImgEmail from '../pictures/img-email.png';
import ImgLock from '../pictures/img-lock.png';

const requiredMessage = 'Обязательно';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Не верный email')
        .required(requiredMessage)
        .default(''),
    password: Yup.string()
        .required(requiredMessage)
        .default('')
});

const SigninForm = () => {
    const { login } = useActions();
    const classes = useStyles();
    const submitHandler = useCallback(async (values) => login(values), [login]);

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={submitHandler}
            validationSchema={SignupSchema}
        >
            {({ errors, touched }) => (
                <Form>
                    <Grid
                        container
                        spacing={2}
                        className={classes.gridContainerForm}
                    >
                        <Grid item xs={12} sm={12} md={12} style={{ position: 'relative' }}>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Email"
                                className={classes.formInput}
                            />
                            <img
                                alt='ImgEmail'
                                src={ImgEmail}
                                width={15}
                                height={15}
                                className={classes.imgForInput}
                            />
                        </Grid>
                        {errors.email && touched.email ? (
                            <div className={classes.errorsInputForm}>{errors.email}</div>
                        ) : null}
                        <Grid item xs={12} sm={12} md={12} style={{ position: 'relative' }}>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Password"
                                type="password"
                                className={classes.formInput}
                            />
                            <img
                                alt='ImgLock'
                                src={ImgLock}
                                width={15}
                                height={15}
                                className={classes.imgForInput}
                            />
                        </Grid>
                        {errors.password && touched.password ? (
                            <div className={classes.errorsInputForm}>{errors.password}</div>
                        ) : null}
                        <Grid item xs={12} sm={12} md={12} className={classes.formBtn} style={{ padding: 0 }}>
                            <button type="submit">Login</button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default SigninForm;
