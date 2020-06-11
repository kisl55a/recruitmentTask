import React from "react";

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
  const dispatch = useDispatch();
  const company = props.match.params.companyId
  console.log(props.match.params.companyId, props.match.params.invoiceName);
  const items = useSelector((state) => state.items)
  const invoice = useSelector((state) => state.items)
    .filter((company) => company.id == props.match.params.companyId)[0]
    .rows.find((i) => i.name == props.match.params.invoiceName);
  console.log("invoice: ", invoice);

  const sendData = async (invoice) => {
	console.log("values: ", invoice);
	invoice.company = company;
	dispatch(editInvoice(invoice))
  };
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          Edit invoice
        </Typography>
        <InvoiceForm sendData={sendData}
		invoice={{company, ...invoice}}
		items={items}/>
      </Container>
    </div>
  );
}
