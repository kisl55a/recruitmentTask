import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import { DatePicker } from 'formik-material-ui-pickers';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { addInvoice } from './actions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
// TODO when createInvoice is opened at first it doesnt upload the companies
// because they are uploaded on the main page
// TODO add trim form validation
// TODO delete ID addition when submiting invoice

interface Values {
  name: string,
  street: string,
  zip: number,
  city: string,
  due_date: dateFns
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
}));

export default function CompanyForm(props) {
  const items = useSelector(state => state.items)
  const classes = useStyles();
  const dispatch = useDispatch();
  //Here is supposed to be function to sending post
  //request to the API
  const sendData = async (values) => {
    let previousData = items;
    dispatch(addInvoice(values))
  }

  return (
    <Formik
      initialValues={{
        company: 1,
        quantity: 0,
        currency: "EUR",
        unit_price: 0,
        unit_of_measurement: "kpl",
        vat: 0,
        name: ""
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.company) {
          errors.company = "Required";
        }
        if (!values.quantity) {
          errors.quantity = "Required";
        }
        if (!values.currency) {
          errors.currency = "Required";
        }
        if (!values.unit_price) {
          errors.unit_price = "Required";
        }
        if (!values.unit_of_measurement) {
          errors.unit_of_measurement = "Required";
        }
        if (!values.vat) {
          errors.vat = "Required";
        } else if (values.vat < 0) {
          errors.vat = "Should be positive"
        }
        if (!values.name) {
          errors.name = "Required";
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          sendData(values)
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Card variant="outlined" >
          <Form>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Invoice
            </Typography>
            <br />
            <FormControl>
              <InputLabel>Company</InputLabel>
              <Field
                component={Select}
                name="company"
              >
                {
                items.map((item, key) => {
                return <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                })
                }
              </Field>
            <br />
            <Field
              component={TextField}
              name="quantity"
              type="number"
              label="Quantity"
            />
            <br />
            <FormControl>
              <InputLabel htmlFor="age-simple">Currency</InputLabel>
              <Field
                component={Select}
                name="currency"
              >
                <MenuItem value={"EUR"}>EURO</MenuItem>
                <MenuItem value={"DOL"}>DOLLAR</MenuItem>
              </Field>
            </FormControl>
            <br />
            <Field
              component={TextField}
              name="unit_price"
              type="number"
              label="Price per unit"
            />
            <br />
            <FormControl>
              <InputLabel>Unit of measurement</InputLabel>
              <Field
                component={Select}
                name="unit_of_measurement"
              >
                <MenuItem value={"kpl"}>kpl</MenuItem>
                <MenuItem value={"lkp"}>lkp</MenuItem>
              </Field>
            </FormControl>
            <br />
            <Field
              component={TextField}
              name="vat"
              type="number"
              label="VAT"
            />
            <br/>
              <Field
              component={TextField}
              name="name"
              type="text"
              label="Name"
            />
            <br />
            </FormControl>

            {isSubmitting && <LinearProgress />}
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
            <br />
            <br />
          </Form>
        </Card>
      )}
    </Formik>
  );
}
