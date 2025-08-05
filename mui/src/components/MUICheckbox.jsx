import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';
import { useState } from 'react';

function MUICheckbox() {
    const [isConfirm, setIsConfiem] = useState(false);

    const submit = () => {
        if (!isConfirm) {
            alert("Confirm the term!")
        } else {
            alert("Send successfully!")
        }
    }
    return (
        <div>
            <FormControl>
                <FormLabel>Educational Status</FormLabel>
                <FormGroup>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="Primary School"
                        labelPlacement='end'
                    />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox defaultChecked />}
                        label="High School"
                        labelPlacement='end'
                    />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox />}
                        label="University"
                        labelPlacement='end'
                    />
                </FormGroup>
            </FormControl>

            <FormControl component="fieldset">
                <FormGroup>
                    <FormControlLabel
                        value="top"
                        control={<Checkbox value={isConfirm} onChange={(e) => setIsConfiem(e.target.checked)} />}
                        label="I accept the terms of use"
                        labelPlacement='end'
                    />

                    <Button onClick={submit} variant='contained'>Send Form</Button>
                </FormGroup>
            </FormControl>


        </div>
    )
}

export default MUICheckbox