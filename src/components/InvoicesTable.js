import React, { useState, useEffect } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableItem from './TableItem'
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './actions';
// TODO: hide arrow down when there is no Invoices
export default function CollapsibleTable() {
    const items = useSelector(state => state.items)
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(items)
    }, [items])
    console.log(data);
    
    const dispatch = useDispatch();
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
                        <TableCell align="right">Edit</TableCell>
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