import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

function MUIBadge() {
    return (
        <div style={{ marginTop: '100px', marginLeft: '100px' }}>
            <Badge badgeContent={12} color='secondary' max={9}>
                <MailIcon />
            </Badge>
        </div>
    )
}

export default MUIBadge