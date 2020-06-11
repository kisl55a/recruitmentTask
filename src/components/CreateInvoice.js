import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import { addInvoice } from "./actions";
import { useHistory } from "react-router-dom";

import InvoiceForm from "./InvoiceForm";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function CreateInvoice() {
  const dispatch = useDispatch();
  const history = useHistory();
  const items = useSelector((state) => state.items);
  const classes = useStyles();
  
  //Here is supposed to be function to sending post
	//request to the API
  const sendData = async (values) => {
    //"Request"
    await dispatch(addInvoice(values));
    history.push('/');
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
