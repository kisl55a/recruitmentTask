import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableItem from './TableItem'

const dataJson = [
    {
        "id": 1,
        "name": "Test company",
        "street": "Testikatu 1",
        "zip": "00100",
        "city": "Helsinki",
        "due_date": "2020-08-01",
        "rows": [
            {
                "quantity": 3,
                "currency": "EUR",
                "unit_price": 1.24,
                "unit_of_measurement": "kpl",
                "vat": 24,
                "name": "Sample invoice row 1"
            },
            {
                "quantity": -1,
                "currency": "EUR",
                "unit_price": 2.48,
                "unit_of_measurement": "kpl",
                "vat": 24,
                "name": "Sample invoice row 2"
            }
        ]
    },
    {
        "id": 2,
        "name": "Another test company",
        "street": "Testikatu 3",
        "zip": "00100",
        "city": "Helsinki",
        "due_date": "2020-08-05",
        "rows": [
            {
                "quantity": 1,
                "currency": "EUR",
                "unit_price": 150,
                "unit_of_measurement": null,
                "vat": 0,
                "name": "Sample row"
            }
        ]
    }
]



export default function CollapsibleTable() {

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(dataJson)
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Company name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Post Index</TableCell>
                        <TableCell align="right">City</TableCell>
                        <TableCell align="right">Due date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableItem key={row.id} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}