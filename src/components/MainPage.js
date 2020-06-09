import React from 'react';
import {Link as RouterLink}from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import InvoicesTable from './InvoicesTable'
// TODO: change styles of links 

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Small invoices tracking app
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                This is a recrutment task for me from Nettilasku.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                    <RouterLink to='/createItem' style={{textDecoration: 'none'}}>
                  <Button variant="contained" color="primary">
                    Create a new invoice 
                  </Button>
                  </RouterLink>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Nothing here 
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <InvoicesTable />
      </main>
    </React.Fragment>
  );
}