import { useState } from "react";
import Typography from '@mui/material/Typography';
import {Accordion, AccordionSummary, AccordionDetails, accordionContent} from './style'


export function CustomizedAccordions() {
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            {
                accordionContent.map( (item: any)=>
                
                    <Accordion expanded={expanded === item.name} onChange={handleChange(item.name)}>
                        <AccordionSummary aria-controls={item.ariaControls} id={item.id}>
                            <Typography>{item.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {item.accordionText}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            }
        
        </div>
    );
}