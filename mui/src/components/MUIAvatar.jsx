import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function MUIAvatar() {
    return (
        <Stack spacing={2}>
            <Avatar src='https://randomuser.me/portraits/men/60.jpg' />

            <Avatar>M</Avatar>
        </Stack>
    )
}

export default MUIAvatar