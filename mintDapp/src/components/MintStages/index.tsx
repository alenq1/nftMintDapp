import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box} from '@mui/system';
import Stack from '@mui/material/Stack';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import GradeIcon from '@mui/icons-material/Grade';
import GroupsIcon from '@mui/icons-material/Groups';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { StepIconProps } from '@mui/material/StepIcon';
import Button from '../Button';
import { ColorlibStepIconRoot, ColorlibConnector, 
  MintStageContainer, MintStagesTitle, StyledStepper, SelectedStage,
  StepText
} from './style'
import { useSnackbar } from 'notistack';
import {useMintStages, steps, ColorlibStepIcon } from './utils'



export default function MintStages({isAdmin}: any) {

  const {contract, isPaused, stage, account, nextStage} = useMintStages()

  // console.log(isPaused, "IS PAUSED", stage, "STAGE")

  return (

    <Box sx={MintStageContainer}>
    <h1 style={MintStagesTitle}>Current Stage</h1>
    <Stack sx={{ width: '100%' }} spacing={4}>      
      <Stepper sx={StyledStepper} alternativeLabel activeStep={stage} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon} sx={StepText}>{
              index === stage ?              

              <h3 style={SelectedStage}>{label}</h3>
              :
              label
              
            }</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
    {
      isAdmin &&
      <Button text={"Go to Next Stage"} action={() =>nextStage()}
        disabled={stage >= 4 || isPaused}
        styled={''}
      />
    }
    
    </Box>
  );
}
