import {useState, useEffect} from "react";
import { AlertColor } from '@mui/material/Alert';


export const useToast = () => {

    const [open, setOpen] = useState<boolean>(false);
    const [type, setType] = useState<AlertColor | undefined>()
    const [message, setMessage] = useState<String | undefined>()

    const openToast = () => {
        setOpen(true);
    };

    const closeToast = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
        return;
    }

    setOpen(false);
    };


    useEffect(() => {


    }, [open, type, message])


    return {
        open, 
        setOpen, 
        type,
        setType,
        message,
        setMessage,
        openToast, 
        closeToast
    }

}


