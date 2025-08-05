import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {
    const [expanded, setExpended] = useState(false);
    const handleChange = (panalname) => (event, expanded) => {
        setExpended(expanded ? panalname : false);

    }
    return (
        <div>
            <Accordion expanded={expanded == 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Part 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus impedit libero eveniet nesciunt qui quod. Tenetur amet veniam eum animi neque, rem saepe quia placeat fugit, aperiam, eius incidunt magni doloribus beatae omnis ducimus ad tempora recusandae consequatur iure eveniet quis earum quaerat quae. Velit alias sequi odio est.</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded == 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Part 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus impedit libero eveniet nesciunt qui quod. Tenetur amet veniam eum animi neque, rem saepe quia placeat fugit, aperiam, eius incidunt magni doloribus beatae omnis ducimus ad tempora recusandae consequatur iure eveniet quis earum quaerat quae. Velit alias sequi odio est.</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded == 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Part 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque doloribus impedit libero eveniet nesciunt qui quod. Tenetur amet veniam eum animi neque, rem saepe quia placeat fugit, aperiam, eius incidunt magni doloribus beatae omnis ducimus ad tempora recusandae consequatur iure eveniet quis earum quaerat quae. Velit alias sequi odio est.</AccordionDetails>
            </Accordion>
        </div>
    )
}

export default MUIAccordion