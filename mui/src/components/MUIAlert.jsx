import React from 'react'
import Alert from '@mui/material/Alert';

function MUIAlert() {
    return (
        <div>
            <Alert sx={{ width: '250px', marginTop: '5px' }} severity='info'>Information Alert</Alert>
            <Alert sx={{ width: '250px', marginTop: '5px' }} severity='error'>Error Alert</Alert>
        </div>
    )
}

export default MUIAlert