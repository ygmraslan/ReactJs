import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function MUISNackbar() {
    const [openSnackbar, setOpenSnackbar] = useState(false)

    const handleClick = () => {
        setOpenSnackbar(true)
    }
    const handleClose = () => {
        setOpenSnackbar(false)
    }
    const action = (
        <>
            <Button size='small' color='info' onClick={handleClose}>Close</Button>
            <IconButton sx={{ color: 'white' }} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
        </>
    )
    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar open={openSnackbar}
                message="An error occurred"
                action={action}
                autoHideDuration={3000}
                onClose={handleClose} />
        </div>

    )
}

export default MUISNackbar