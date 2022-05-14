import React from 'react'
import {useToast } from './utils';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});



export const Toast = () => {

    const {
        open,         
        type,        
        message,        
        closeToast
    } = useToast()

    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={closeToast}        
        >
        <Alert onClose={closeToast} severity={type} sx={{ width: '100%' }}>
            {message}
        </Alert>
        </Snackbar>
    )
}

export default Toast