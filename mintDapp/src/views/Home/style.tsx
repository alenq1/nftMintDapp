import BackgroundPix from '../../assets/img/PolyGrid.png'
import { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

export const StyledMain = {
  padding: 1,
  maxWidth: "1800px",
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1

}

export const Stages = {
  margin: "0px",
  height: "100vh",    
  width: "75%",
  display: "flex",
  // flexDirection: "row",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"


}

export const Descriptions = {
  margin: "0px 0px 30px 0px",
  height: "100vh",    
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around"


}

export const OtherDescriptions = {
  margin: "20px 0px",
  padding: "10px",
  height: "100%",    
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
  background: `url(${BackgroundPix})`,
  backgroundSize: "contain"

}

export const RoadMapContainer = {
  padding: 0,
  margin: 0,
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center", 
}

export const RoadMap = {
  padding: 0,
  height: "auto",    
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center", 
}

export const RoadMapLeft: any = {
  margin: "10px 60px",
  height: "auto",      
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center", 
  
  '& div':{
    padding: 5,
    width: "450px",
    height: "300px",
    border: "1px solid rgba(255, 255, 255, 0.21)",
    color: "white",
    background: "black"
  },
  '& h1':{
    margin: "100px 0px"
  }
}

export const RoadMapRight: any = {
  margin: "-120px 60px",
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center", 

  '& div':{
    padding: 5,
    width: "450px",
    height: "300px",
    // border: "1px solid rgba(255, 255, 255, 0.21)",
    color: "white",
    background: "black"
  },
  '& h1':{
    margin: "100px 0px"
  }

}

export const RoadMapLine = {
  width: 3,
  height: "100%",
  background: "black",
}


export const FaqContainer = {

  padding: 10,
  height: "auto",    
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  background: `url(${BackgroundPix})`,
}


const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  maxWidth: "1000px",
  background:" rgba(255, 255, 255, 0.19)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(3.6px)",
  WebkitBackdropFilter: "blur(3.6px)",
  border: "1px solid rgba(255, 255, 255, 0.21)",

}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  background: "transparent",
    // theme.palette.mode === 'dark'
    //   ? 'rgba(255, 255, 255, .05)'
    //   : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export function CustomizedAccordions() {
  const [expanded, setExpanded] = useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Collapsible Group Item #1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}