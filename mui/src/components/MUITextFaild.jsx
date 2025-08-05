import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function MUITextFaild() {
    return (
        <div>
            <TextField InputProps={{
                startAdornment: <InputAdornment>
                    <AccountCircleIcon />
                </InputAdornment>
            }}
                label="Name"
                variant='standard' />
        </div>
    )
}

export default MUITextFaild