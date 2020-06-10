import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import CreateCompany from './components/CreateCompany';
import CreateInvoice from './components/CreateInvoice';

import Footer from './components/Footer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
	<MuiPickersUtilsProvider utils={DateFnsUtils}>
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/createCompany" component={CreateCompany} />
        <Route path="/createInvoice" component={CreateInvoice} />
      </Switch>
      <Footer/>
    </Router>
	</MuiPickersUtilsProvider>
  );
}

export default App;
