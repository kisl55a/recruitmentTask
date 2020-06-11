import React from "react";

import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import InvoiceForm from "./InvoiceForm";
import { editInvoice } from "./actions";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function EditInvoice(props) {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const company = props.match.params.companyId

  //Here is supposed to be GET request to get invoice data
  const items = useSelector((state) => state.items)

  const invoice = useSelector((state) => state.items)
    .filter((company) => company.id == props.match.params.companyId)[0]
    .rows.find((i) => i.name == props.match.params.invoiceName);

  //Here is supposed to be function to sending DELETE
  //request to the API
  const sendData = async (invoice) => {
    invoice.company = parseInt(company);
    //"Request"
    await dispatch(editInvoice(invoice, props.match.params.invoiceName))
    history.push('/')
  };

  if (items.length !== 0 && invoice) {
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm" align="center">
          <Typography variant="h2" align="center" color="textSecondary" paragraph>
            Edit invoice
          </Typography>
          <InvoiceForm sendData={sendData}
            invoice={{ company, ...invoice }}
            items={items} />
        </Container>
      </div>
    );
  } else {
    return (
      <div>
        <Container maxWidth="sm" align="center">
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            You cant use this application like that, because the task was to use redux
            and when the page is reloaded redux state should be updated from the main page. <br />
          </Typography>
        </Container>
      </div>
    )
  }
}
