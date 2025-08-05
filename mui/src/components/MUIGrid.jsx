import Grid from '@mui/material/Grid';
import React from 'react';

function MUIGrid() {
    return (

        <Grid rowSpacing={2} columnSpacing={2}>
            <Grid xs={12} sm={6} md={8} lg={9}>
                <div>ITEM 1</div>
            </Grid>
            <Grid xs={12} sm={6} md={4} lg={3}>
                <div>ITEM 2</div>
            </Grid>
        </Grid>
    )
}

export default MUIGrid;