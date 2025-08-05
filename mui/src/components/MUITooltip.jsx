import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function MUITooltip() {
    return (
        <Tooltip title="delete">
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}

export default MUITooltip