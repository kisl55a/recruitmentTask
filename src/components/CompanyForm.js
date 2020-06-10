import * as React from "react";
import { Formik, Form, Field } from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
import { DatePicker } from 'formik-material-ui-pickers';
import Card from "@material-ui/core/Card";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


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
		minWidth: 165,
	  },
}));

export default function CompanyForm(props) {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        name: "",
        street: "",
		zip: "",
		city: "",
		due_date: new Date(),
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.name) {
          errors.name = "Required";
        }
		if (!values.street) {
          errors.street = "Required";
		}
		if (!values.zip) {
          errors.zip = "Required";
		} else if (
			!/^((\d{5}-\d{4})|(\d{5})|([AaBbCcEeGgHhJjKkLlMmNnPpRrSsTtVvXxYy]\d[A-Za-z]\s?\d[A-Za-z]\d))$/i.test(values.zip)
		){
			errors.zip = "Wrong post number"
		}
		if (!values.city) {
          errors.zip = "Required";
		}
		if (!values.due_date) {
          errors.due = "Required";
		}
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Card variant="outlined" >
          <Form>
		  <Typography variant="h6" align="center" color="textSecondary" paragraph>
               Company
            </Typography>
            <br />
            <Field
              component={TextField}
              name="name"
              type="text"
              label="Company name"
            />
            <br />
            <Field
              component={TextField}
              type="text"
              label="Street"
              name="street"
            />
			<br />
            <Field
              component={TextField}
              name="zip"
              type="number"
			  max = "5"
              label="Zip"
            />
            <br />
            <Field
              component={TextField}
              name="city"
              type="text"
              label="City"
            />
			<br />
            <Field
              component={DatePicker}
              name="due_date"
              label="Due date"
            />
            <br />

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
