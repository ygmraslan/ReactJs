import React from 'react'
import Stack from '@mui/material/Stack';
import { Divider } from '@mui/material';

function MUIStack() {
    return (
        <div>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}
                divider={<Divider orientation='horizonal' flexItem />}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </Stack>
        </div>
    )
}

export default MUIStack