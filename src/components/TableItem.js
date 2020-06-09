import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';


const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});
// TODO: change to proper props
// TODO: set default values to prevent null in table cells 
Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired,
            }),
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired,
    }).isRequired,
};

export default function Row(props) {
    const { row } = props;
    const item = row;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {item.name}
                </TableCell>
                <TableCell align="right">{item.street}</TableCell>
                <TableCell align="right">{item.zip}</TableCell>
                <TableCell align="right">{item.city}</TableCell>
                <TableCell align="right">{item.due_date}</TableCell>
                <TableCell align="right">
                    <Button variant="outlined" color="primary">
                        Edit
                  </Button>
                </TableCell>

            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Invoices
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Currency</TableCell>
                                        <TableCell align="right">Price</TableCell>
                                        <TableCell align="right">Unit of measurement</TableCell>
                                        <TableCell align="right">VAT</TableCell>
                                        <TableCell align="right">Name</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {item.rows.map((row) => (
                                        <TableRow key={row.quantity}>
                                            <TableCell component="th" scope="row">
                                                {row.quantity}
                                            </TableCell>
                                            <TableCell>{row.currency}</TableCell>
                                            <TableCell align="right">{row.unit_price}</TableCell>
                                            <TableCell align="right">
                                                {row.unit_of_measurement}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.vat}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.name}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}