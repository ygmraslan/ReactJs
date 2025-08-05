import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Swan from '../images/image.jpg'

function MUICard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200px"
                image={Swan}
                title="black swan"
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Swan
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. At sequi officiis praesentium adipisci non explicabo voluptas. Laboriosam earum omnis dolores eaque nihil quos facilis, accusamus libero sequi ducimus, qui quas deserunt est sunt similique ut magni esse quia beatae ex illo. Fugit veritatis animi et asperiores fugiat ipsa, nemo nostrum.
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    )
}

export default MUICard