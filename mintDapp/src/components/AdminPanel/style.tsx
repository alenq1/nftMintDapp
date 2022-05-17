
// import Slider, { SliderProps } from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

// interface IAdminCards  { 
//   padding: any
// }


export const StyledAdminPanel = {
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 20,
    margin: "5em 0em"
  
  }

export const AdminCards = styled(Card)({
  padding:40,
  /* From https://css.glass */
  background:" rgba(255, 255, 255, 0.19)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.6px)",
  WebkitBackdropFilter: "blur(3.6px)",
  border: "1px solid rgba(255, 255, 255, 0.21)",
  
})

export const AdminCardFields = {
  margin: 3
}


export const StyledAdminForm = {
  height: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 3

}


export const FormFields = {
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"

}
  