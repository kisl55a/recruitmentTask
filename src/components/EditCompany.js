import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useSelector, useDispatch } from "react-redux";
import CompanyForm from "./CompanyForm";
import { editCompany } from './actions';


const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function EditCompany(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
	const company = useSelector(state => state.items).filter(company => company.id == props.match.params.companyId)[0];
	const sendData = async (company) => {
		company.due_date = JSON.stringify(company.due_date).substring(1,11);
		dispatch(editCompany(company))
    }

  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm" align="center">
        <Typography variant="h2" align="center" color="textSecondary" paragraph>
          Edit company
        </Typography>
        <CompanyForm sendData={sendData} company={company}/>
      </Container>
    </div>
  );
}
