import React from 'react'
import { Button } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function MUIBUtton() {
    return (
        <div>
            <Button size='small'
                onClick={() => alert("Button worked.")}
                variant='contained'
                color='warning'
                startIcon={<AddCircleOutlineIcon />}>
                Add</Button>
        </div>
    )
}

export default MUIBUtton