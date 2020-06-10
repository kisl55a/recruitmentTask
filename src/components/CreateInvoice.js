import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InvoiceForm from './InvoiceForm';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function CreateInvoice() {

  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          Create new invoice
          </Typography>
        <InvoiceForm />
      </Container>
    </div>
  )
}
