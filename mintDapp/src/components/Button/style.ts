import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';


export const StyledButton = styled(Button)({
  width: "auto",
  background: "green",
  "&:hover":{
    background: "#3fbc3f",
  }

})