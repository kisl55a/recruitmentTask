import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import CreateItem from './components/CreateItem';
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
        <Route path="/createItem" component={CreateItem} />
      </Switch>
      <Footer/>
    </Router>
	</MuiPickersUtilsProvider>
  );
}

export default App;
