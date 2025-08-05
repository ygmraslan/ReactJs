import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { TextField } from '@mui/material';

function MUISelect() {

    const [currency, setCurrency] = useState('');
    const [currencies, setCurrencies] = useState([]);

    return (
        <div>
            <FormControl sx={{ width: '200px', marginTop: '30px' }}>
                <InputLabel>Country</InputLabel>
                <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                    <MenuItem value="Türkiye">Türkiye</MenuItem>
                    <MenuItem value="South-Korea">South-Korea</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                </Select>
            </FormControl>

            <TextField
                SelectProps={{ multiple: true }}
                value={currencies} onChange={(e) => setCurrencies(e.target.value)} sx={{ width: '300px', marginTop: '30px' }} label="Country" select >
                <MenuItem value="Türkiye">Türkiye</MenuItem>
                <MenuItem value="South-Korea">South-Korea</MenuItem>
                <MenuItem value="USA">USA</MenuItem>

            </TextField>
        </div>
    )
}

export default MUISelect