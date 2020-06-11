import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField, Select } from "formik-material-ui";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";


interface Values {
  name: string;
  street: string;
  zip: number;
  city: string;
  due_date: dateFns;
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
}));

export default function CompanyForm(props) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={
        props.invoice
          ? props.invoice
          : {
            company: 1,
            quantity: 0,
            currency: "EUR",
            unit_price: 0,
            unit_of_measurement: "kpl",
            vat: 0,
            name: "",
          }
      }
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
        }
        if (!values.name) {
          errors.name = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          props.sendData(values);
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Card variant="outlined">
          <Form>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Invoice
            </Typography>
            <br />
            <FormControl>
              <InputLabel>Company</InputLabel>
              <Field 
              component={Select} 
              disabled={(props.invoice && props.invoice.company) ? true : false} 
              name="company">
                {props.items.map((item, key) => {
                  return (
                    <MenuItem key={key} value={item.id}>
                      {item.name}
                    </MenuItem>
                  );
                })}
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
                <Field component={Select} name="currency">
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
                <Field component={Select} name="unit_of_measurement">
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
              <br />
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
