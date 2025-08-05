import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function MUIDialog() {
    const [dialogOpen, setDialogOpen] = useState(false);
    const type = {
        YES: "YES",
        NO: "NO"
    }
    const result = (type) => {
        console.log("User result", type)
        setDialogOpen(false);
    }
    return (
        <div>
            <Button onClick={() => setDialogOpen(true)}>Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Question</DialogTitle>
                <DialogContent>
                    <DialogContentText>Are you sure about that?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => result(type.YES)}>Yes</Button>
                    <Button onClick={() => result(type.NO)}>No</Button>
                </DialogActions>

            </Dialog>
        </div>
    )
}

export default MUIDialog