import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { addInvoice } from "./actions";

import InvoiceForm from "./InvoiceForm";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function CreateInvoice() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const classes = useStyles();
  const sendData = async (values) => {
    dispatch(addInvoice(values));
  };
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          Create new invoice
        </Typography>
        <InvoiceForm sendData={sendData} items={items} />
      </Container>
    </div>
  );
}
