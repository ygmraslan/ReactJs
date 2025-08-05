import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import CustomTabPanel from './CustomTabPanel';


function MUITabs() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                ITEM 1
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                ITEM 2
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                ITEM 3
            </CustomTabPanel>

        </Box>
    )
}

export default MUITabs