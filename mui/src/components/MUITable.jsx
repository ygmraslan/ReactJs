import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {

    const users = [
        { id: 1, firstName: "Yağmur", lastName: "Aslan", age: 23 },
        { id: 2, firstName: "Ahmet", lastName: "Yılmaz", age: 27 },
        { id: 3, firstName: "Ayşe", lastName: "Demir", age: 21 },
        { id: 4, firstName: "Mehmet", lastName: "Kaya", age: 30 },
        { id: 5, firstName: "Elif", lastName: "Şahin", age: 25 },
        { id: 6, firstName: "Burak", lastName: "Aydın", age: 28 },
        { id: 7, firstName: "Zeynep", lastName: "Koç", age: 24 },
        { id: 8, firstName: "Emre", lastName: "Çelik", age: 26 },
        { id: 9, firstName: "Selin", lastName: "Aksoy", age: 22 },
        { id: 10, firstName: "Kerem", lastName: "Eren", age: 29 }
    ];

    return (
        <Table>
            <TableHead>
                <TableRow key={Math.random() * 99999}>
                    <TableCell>ID</TableCell>
                    <TableCell>NAME</TableCell>
                    <TableCell>SURNAME</TableCell>
                    <TableCell>AGE</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map((user, index) => (
                    <TableRow>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.firstName}</TableCell>
                        <TableCell>{user.lastName}</TableCell>
                        <TableCell>{user.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default MUITable