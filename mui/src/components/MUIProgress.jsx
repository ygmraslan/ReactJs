import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';

function MUIProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((old) => {
                if (old == 100) {
                    return 0;
                }
                const plusValue = Math.floor(Math.random() * 10)
                return Math.min(old + plusValue, 100);
            })

        }, 500)
        return () => {
            clearInterval(timer);
        }
    }, [])
    return (
        <div>
            <CircularProgress color='secondary' />
            <LinearProgress variant='determinate' value={progress} />
        </div>
    )
}

export default MUIProgress