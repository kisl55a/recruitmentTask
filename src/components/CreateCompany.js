import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch } from 'react-redux';
import { addCompany } from './actions';
import { useHistory } from "react-router-dom";

import CompanyForm from './CompanyForm';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function CreateItem() {
  const dispatch = useDispatch();
  const history = useHistory()

  //Here is supposed to be function to sending post
  //request to the API
  const sendData = async (values) => {
    values.due_date = JSON.stringify(values.due_date).substring(1, 11);
    values.rows = [];
    //"Request"
    await dispatch(addCompany(values));
    history.push('/');
  }
  const classes = useStyles();

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          Create new company
          </Typography>
        <CompanyForm sendData={sendData} />
      </Container>
    </div>
  )
}
