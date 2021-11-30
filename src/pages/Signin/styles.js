import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center',
    },
    gridContainer: {
        margin: 0,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '100px 20px 20px',
        maxWidth: '700px'
    },
    imgLogin: {
        textAlign: 'center',
        minWidth: '150px'
    },
    mainLogin: {
        textAlign: 'center'
    },
    titleLogin: {
        marginBottom: '40px'
    },
    forgotNamePassText: {
        marginTop: '20px',
        marginBottom: '90px',
        color: 'gray',
        fontSize: '14px'
    },
    createAccountText: {
        color: 'gray',
        fontSize: '14px'
    },
    [theme.breakpoints.down("xs")]: {
        imgLogin: {
            display: 'none'
        }
    },
    errors: {
        color: 'red',
        marginTop: '10px'
    }
}));
