import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Swan from '../images/image.jpg'

function MUISkelton() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);

        }, 3000)
    })

    return (
        <div>
            {
                loading ? <Skeleton variant='rounder' width={250} height={150} animation='wave' /> :
                    <img src={Swan} width={250} height={150} />
            }

        </div>
    )
}

export default MUISkelton