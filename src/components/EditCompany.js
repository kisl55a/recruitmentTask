import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import CompanyForm from "./CompanyForm";
import { editCompany } from './actions';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function EditCompany(props) {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  //Here is supposed to be GET request to get company data
  const company = useSelector(state => state.items).filter(company => company.id == props.match.params.companyId)[0];

  //Here is supposed to be function to sending PUT
  //request to the API
  const sendData = async (company) => {
    company.due_date = JSON.stringify(company.due_date).substring(1, 11);
    //"Request"
    await dispatch(editCompany(company))
    history.push('/')
  }

  if (company) {
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm" align="center">
          <Typography variant="h2" align="center" color="textSecondary" paragraph>
            Edit company
        </Typography>
          <CompanyForm sendData={sendData} company={company} />
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
