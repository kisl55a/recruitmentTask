import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadData } from './actions';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { deleteCompany, deleteInvoice } from './actions';

import InvoicesTable from './InvoicesTable'
import Alert from './Alert';

// TODO add loader
// TODO move sendData function to parent components to increase reusability of children
// TODO set default value of state to prevent mistakes
// TODO add popups
// TODO add comments
// TODO check other files for TODOS
// TODO change the redux states
// TODO rerouting when the form is submitted 
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

const dataJson = [
  {
    "id": 1,
    "name": "Test company",
    "street": "Testikatu 1",
    "zip": "00100",
    "city": "Helsinki",
    "due_date": "2020-08-01",
    "rows": [
      {
        "quantity": 3,
        "currency": "EUR",
        "unit_price": 1.24,
        "unit_of_measurement": "kpl",
        "vat": 24,
        "name": "Sample invoice row 1"
      },
      {
        "quantity": -1,
        "currency": "EUR",
        "unit_price": 2.48,
        "unit_of_measurement": "kpl",
        "vat": 24,
        "name": "Sample invoice row 2"
      }
    ]
  },
  {
    "id": 2,
    "name": "Another test company",
    "street": "Testikatu 3",
    "zip": "00100",
    "city": "Helsinki",
    "due_date": "2020-08-05",
    "rows": [
      {
        "quantity": 1,
        "currency": "EUR",
        "unit_price": 150,
        "unit_of_measurement": null,
        "vat": 0,
        "name": "Sample row"
      }
    ]
  }
]

export default function MainPage() {
  const items = useSelector(state => state.items)
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(false)
  const [name, setName] = useState(false)
  const [update, setUpdate] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    // Here is supposed to be a first initial request
    // to the API to load data
    // also make requests to reload data after deletion 
    if (items.length === 0)
      setData(dataJson)
    else
      setData(items)
  }, [items, update]);

  useEffect(() => {
    if (items.length === 0)
      dispatch(loadData(data))
  }, [data])

  const deleteModal = ({id, name}) => {
    setOpen(true);
    if(id) {
      setId(id)
    }
    if(name){
      setName(name)
    }
  };

  const handleClose = (reply) => {
    console.log('reply: ', reply);
    setOpen(false);
    if(reply){
      console.log('name: ', name, id);
      (name) ? deleteInv(id, name) : deleteCom(id)
    }
  };

  const deleteCom = async (id) => {
    await dispatch(deleteCompany(id))
    setUpdate(!update)
  }

  const deleteInv = async (companyId, name) => {
    await dispatch(deleteInvoice(companyId, name))
    setUpdate(!update)
  }




  const classes = useStyles();

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