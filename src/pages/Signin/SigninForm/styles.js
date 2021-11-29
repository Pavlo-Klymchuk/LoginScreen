import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() => ({
    gridContainerForm: {
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        margin: 0,
    },
    formInput: {
        width: '75%',
        padding: '10px 0px 10px 20%',
        border: 'none',
        borderRadius: '40px',
        backgroundColor: '#e0e0e0',
    },
    errorsInputForm: {
        color: 'red',
        display: 'flex'
    },
    imgForInput: {
        position: 'absolute',
        top: 18,
        left: '12%',
    },
    formBtn: {
        width: '90%',
        marginTop: '10px',
        '& button': {
            width: '90%',
            padding: '10px 0px',
            border: 'none',
            borderRadius: '40px',
            backgroundColor: '#4caf50',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            cursor: 'pointer',
            '&:hover': {
                boxShadow: '0 0 10px 0 lightgreen inset, 0 0 10px 4px lightgreen',
                color: 'black',
                backgroundColor: 'white'
            }
        }
    }
}));
