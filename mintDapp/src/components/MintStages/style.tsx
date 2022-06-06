import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

// export const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopwidth: 3,
//     borderRadius: 1,
//   },
// }));

// export const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
//   ({ theme, ownerState }) => ({
//     color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//     display: 'flex',
//     height: 22,
//     alignItems: 'center',
//     ...(ownerState.active && {
//       color: '#784af4',
//     }),
//     '& .QontoStepIcon-completedIcon': {
//       color: '#784af4',
//       zIndex: 1,
//       fontSize: 18,
//     },
//     '& .QontoStepIcon-circle': {
//       width: 8,
//       height: 8,
//       borderRadius: '50%',
//       backgroundColor: 'currentColor',
//     },
//   }),
// );

export const MintStageContainer = {
    width: '100%',
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  '& h1': {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
  },
  '& button': {
    marginTop: "15px"
  }
}

export const MintStagesTitle = {
  width: '100%', 
  marginTop: "40px" 
}

export const StyledStepper = {
  overflowX: "auto",
}

export const SelectedStage = {
  color: 'white',
  textShadow: '2px 2px 8px #000'
}


export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,121,9,1) 35%, rgba(161,255,0,1) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,121,9,1) 35%, rgba(161,255,0,1) 100%)',
      
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 5,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

export const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 40,
  height: 40,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,121,9,1) 35%, rgba(161,255,0,1) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    width: 50,
    height: 50,
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,121,9,1) 35%, rgba(161,255,0,1) 100%)',      
  }),
}));