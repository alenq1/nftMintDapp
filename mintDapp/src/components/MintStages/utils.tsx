import { useEffect, useState } from "react";
import { useContract } from "../../hooks/useContract";
import { useWeb3React } from "@web3-react/core";
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import GradeIcon from '@mui/icons-material/Grade';
import GroupsIcon from '@mui/icons-material/Groups';
import WbIridescentIcon from '@mui/icons-material/WbIridescent';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { StepIconProps } from '@mui/material/StepIcon';
import { ColorlibStepIconRoot, ColorlibConnector } from './style'
import { useSnackbar } from 'notistack';


enum MintStage {
    INITIATED,
    WHITEMINT,
    PUBLICMINT,
    REVEAL,
    FINISHED,
}
    
export const steps = [
    'Preparing contract', 
    'Start WhiteList Sale', 
    'Start PublicSale',
    'Reveal Collection',
    'Finished'
];

export  const useMintStages = () => {
    
    const {active, account, chainId} = useWeb3React()
    const{ contract}: any = useContract()
    const [isPaused, setIsPaused] = useState<boolean>(false)
    const [stage, setStage] = useState<MintStage>(MintStage.INITIATED)
    const { enqueueSnackbar } = useSnackbar();

    const getStages = async() => {

        // console.log(await contract.methods.isPaused().call(), "PAUSED")
        const checkIsPaused = await contract.isPaused()
        setIsPaused(checkIsPaused)
        // console.log(await contract.stage().call(), "CONTRACT STAGE", MintStage.INITIATED, "MINTSTAgE")
        
        const checkStage = await contract.stage()
        setStage(checkStage)
        
    }

    useEffect(() => {
        // console.log(active, "ACTIVE", contract, "contract")
        if(active && contract){
            getStages()
        }        
        else{
            setStage(0)
            setIsPaused(true)
        }
    
    },[isPaused, stage, contract, chainId])

    // console.log(stage, "STAGE REFRESHH")

    const nextStage = async() => {
        try {
            const tx = await contract.nextStage()  
            enqueueSnackbar(`transaction send: ${tx.hash} `, {variant: 'info'})
            // console.log(tx,"TTTTTTTTTTTTTTXXXXXXXXXXXXXX" )
            tx.wait().then((result: any) => {
                setStage(stage +1)
                enqueueSnackbar(`transaction confirmed: ${name} check on:${result.blockHash}`, {variant: 'success'})            
                // console.log(result, "RESULT WWWWWWWWWWWAAAAAAITTTT")
            })    
        } 
        catch (error) {
            // console.log(`ERROR nextStage`, error.message)
            enqueueSnackbar(`error: ${error?.message}`, {variant: 'error'})
        }
    }

    return {
        contract, 
        isPaused, 
        stage, 
        account,
        nextStage
    }

}


export function ColorlibStepIcon(props: StepIconProps) {
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



