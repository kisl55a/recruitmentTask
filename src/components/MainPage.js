import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from './actions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import externalData from './data';
import { deleteCompany, deleteInvoice } from './actions';

import InvoicesTable from './InvoicesTable'
import Alert from './Alert';
// Check logs react
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
  const items = useSelector(state => state.items)
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false)
  const [name, setName] = useState(false)
  const [update, setUpdate] = useState(true)
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    // Here is supposed to be a first initial request
    // to the API to load data
    // also make requests(GET) to reload data after deletion 
    if (items.length === 0)
      setData(externalData)
    else
      setData(items)
  }, [items, update]);

  useEffect(() => {
    if (items.length === 0)
      dispatch(loadData(data))
  }, [data])

  const deleteModal = ({ id, name }) => {
    setOpen(true);
    if (id) {
      setId(id)
    }
    if (name) {
      setName(name)
    }
  };

  const handleClose = (reply) => {
    setOpen(false);
    if (reply) {
      (name) ? deleteInv(id, name) : deleteCom(id)
    }
  };

  // Here is supposed to be delete requests to the external API
  const deleteCom = async (id) => {
    await dispatch(deleteCompany(id))
    setUpdate(!update)
  }
  const deleteInv = async (companyId, name) => {
    await dispatch(deleteInvoice(companyId, name))
    setUpdate(!update)
  }

  return (
    <React.Fragment>
      <main>
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
                  <RouterLink to='/createCompany' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                      Create new company
                  </Button>
                  </RouterLink>
                </Grid>
                <Grid item>
                  <RouterLink to='/createInvoice' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">
                      Create new invoice
                  </Button>
                  </RouterLink>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <InvoicesTable
          deleteItem={deleteModal}
        />
      </main>
      <Alert
        open={open}
        handleClose={handleClose}
      />
    </React.Fragment>
  );
}