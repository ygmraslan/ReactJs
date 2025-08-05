import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function MUIDrawer() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsOpen(true)}>Open</Button>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <Box sx={{ width: '400px' }}>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ducimus vero ipsam eveniet dicta quaerat repellendus eligendi laboriosam minus est sed sit cumque, ex possimus vitae dolor, excepturi a dolorem.</p>
                </Box>
            </Drawer>
        </div>
    )
}

export default MUIDrawer