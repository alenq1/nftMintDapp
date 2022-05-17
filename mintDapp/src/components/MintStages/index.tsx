import * as React from 'react';
import { styled } from '@mui/material/styles';

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
import { useMintStages } from "./utils";
import { ColorlibStepIconRoot, ColorlibConnector } from './style'
import { createNextState } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';



function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  

  const icons: { [index: string]: React.ReactElement } = {
    1: <NoteAltIcon />,
    2: <GradeIcon />,
    3: <GroupsIcon />,
    4: <WbIridescentIcon />,
    5: <SportsScoreIcon />
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  'Preparing contract', 
  'Start WhiteList Sale', 
  'Start PublicSale',
  'Reveal Collection',
  'Finished'
];

export default function MintStages({isAdmin}: any) {

  const {contract, isPaused, stage, account, setStage} = useMintStages()
  // stage = 0
  const { enqueueSnackbar } = useSnackbar();

  const nextStage = async() => {
    try {
      const tx = await contract.nextStage()  
      enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
            console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
            tx.wait().then((result: any) => {
                setStage(stage +1)
                enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                console.log(result, "RESULT WWWWWWWWWWWAAAAAAITTTT")
            })    
    } 
    catch (error) {
        console.log(`ERROR nextStage`, error.message)
        enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
    }
    
    // .on("trnasactionHash", (result: any) => console.log("transactionHash",result))
    // .on("receipt", (result:any) => {
    //     console.log("resultTx",result.status,"txnHash", result.transactionHash )    
    //     setStage(stage +1)
    // })
    // .on("error", (error: any) => alert(error.message))
    // .catch((error:any) => alert(error.message))
  }
  console.log(isPaused, "IS PAUSED", stage, "STAGE")

  return (

    <>
    <h1 style={{ width: '100%', marginTop: "40px" }}>Current Stage</h1>
    <Stack sx={{ width: '100%' }} spacing={4}>
      
      <Stepper alternativeLabel activeStep={stage} connector={<ColorlibConnector />}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{
              index === stage ?              

              <h2>{label}</h2>
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
      />
    }
    
    </>
  );
}
