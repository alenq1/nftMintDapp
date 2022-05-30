import {Fragment} from 'react'
import Button from '@mui/material/Button';
import { useNavigate, Link } from 'react-router-dom';




export const actionToast = (props: any) => (
    
    <Fragment>
        <Button>                    
            <Link to='/gallery'>Check Gallery</Link>
        </Button>
    </Fragment>
);





