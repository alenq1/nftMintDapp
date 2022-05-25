import Button from '@mui/material/Button';
import {StyledButton} from "./style"

const ButtonApp = (props: any) => {

  
  return (
    <StyledButton 
      variant="contained" 
      onClick={props.action}
      disabled={props.disabled}
      sx={props.styled}
    >
      {props.text}
    </StyledButton>
    )
};

export default ButtonApp;
