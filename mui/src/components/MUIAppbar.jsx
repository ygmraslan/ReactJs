import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, Stack } from '@mui/material';

function MUIAppbar() {
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e) => {
        setAnchorEl(e.currentTarget);

    }
    const closeMenu = () => {
        setAnchorEl(null);

    }
    const openControl = anchorEl ? true : false
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton>
                    <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
                <Typography variant='h6'>MUI</Typography>

                <Stack direction="row" sx={{ marginLeft: 'auto' }}>
                    <Button sx={{ color: 'white' }}>Home Page</Button>
                    <Button sx={{ color: 'white' }}>About</Button>
                    <Button sx={{ color: 'white' }} onClick={openMenu}>Products</Button>
                    <Button sx={{ color: 'white' }}>Contact</Button>
                </Stack>
                <Menu anchorEl={anchorEl} open={openControl} onClose={closeMenu}>
                    <MenuItem>Short</MenuItem>
                    <MenuItem>Tshirt</MenuItem>
                    <MenuItem>Pants</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MUIAppbar