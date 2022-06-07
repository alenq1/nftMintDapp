import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {dappConfig} from '../../config/dappConfig'



export const StyledFaq = {
  padding: 1,
  // maxwidth: "1800px",
  height: "auto",    
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1
}

export const accordionContent = [
  {
      name: 'panel1',
      ariaControls:'panel1d-content',
      id:"panel1d-header",
      title: "Collapsible Group Item #1",
      accordionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
      sit amet blandit leo lobortis eget.`
  },
  {
      name: 'panel2',
      ariaControls:'panel2d-content',
      id:"panel2d-header",
      title: "Collapsible Group Item #2",
      accordionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
      sit amet blandit leo lobortis eget.`
  },
  {
      name: 'panel3',
      ariaControls:'panel3d-content',
      id:"panel3d-header",
      title: "Collapsible Group Item #3",
      accordionText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
      sit amet blandit leo lobortis eget.`
  },
  
]


export const FaqContainer = {

  padding: 10,
  height: "auto",    
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center", 
  background: dappConfig.projectInfoBg,
  backgroundBlendMode: "darken"
  
}


export const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      marginTop: "35px",
      maxwidth: "1000px",
      background:" rgba(255, 255, 255, 0.19)",
      borderRadius: "16px",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter: "blur(3.6px)",
      WebkitBackdropFilter: "blur(3.6px)",
      border: "1px solid rgba(255, 255, 255, 0.21)",
      padding: 15,
      color: 'white'

  }));

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
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

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

