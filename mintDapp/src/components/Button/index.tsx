import Button from '@mui/material/Button';
// import {styledButton} from "./style"

const ButtonApp = (props: any) => {

  
  return (
    <Button 
      variant="contained" 
      onClick={props.action}
      disabled={props.disabled}
      sx={props.styled}
    >
      {props.text}
    </Button>
    )
};

export default ButtonApp;
