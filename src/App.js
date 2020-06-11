import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import CreateCompany from './components/CreateCompany';
import CreateInvoice from './components/CreateInvoice';
import EditCompany from './components/EditCompany';
import EditInvoice from './components/EditInvoice';
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
        <Route path="/createCompany" exact component={CreateCompany} />
        <Route path="/createInvoice" exact component={CreateInvoice} />
		<Route path="/editCompany/:companyId" exact component={EditCompany} />
		<Route path="/editInvoice/:companyId/:invoiceName" exact component={EditInvoice} />
      </Switch>
      <Footer/>
    </Router>
	</MuiPickersUtilsProvider>
  );
}

export default App;
