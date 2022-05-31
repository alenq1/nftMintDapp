import Button from '@mui/material/Button';
import {StyledButton} from "./style"

interface IButton {
  action: any,
  disabled: boolean,
  styled: any | undefined,
  text: string
}

const ButtonApp = (props: IButton) => {

  const {action, disabled, styled, text} = props

  return (
    <StyledButton 
      variant="contained" 
      onClick={action}
      disabled={disabled}
      sx={styled ? styled : ''}
    >
      {text}
    </StyledButton>
    )
};

export default ButtonApp;
