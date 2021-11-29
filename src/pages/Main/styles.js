import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        justifyContent: 'center'
    },
    buttons: {
        fontSize: "20px",
        textDecoration: "none",
        textTransform: 'none',
        fontWeight: '400',
        borderRadius: '20px',
        padding: '5px 30px',
        webkitTransition: 'all 150ms ease-in-out',
        transition: 'all 150ms ease-in-out',
    },
    btnSignin: {
        border: '2px solid lightgreen',
        borderColor: 'lightgreen',
        boxShadow: '0 0 40px 40px lightgreen inset, 0 0 0 0 lightgreen',
        '&:hover': {
            boxShadow: '0 0 10px 0 lightgreen inset, 0 0 10px 4px lightgreen'
        }
    },
    btnLogout: {
        border: '2px solid #ec407a',
        borderColor: '#ec407a',
        boxShadow: '0 0 40px 40px #ec407a inset, 0 0 0 0 #ec407a',
        '&:hover': {
            boxShadow: '0 0 10px 0 #ec407a inset, 0 0 10px 4px #ec407a'
        }
    }
}));

export default useStyles;
