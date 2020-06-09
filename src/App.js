import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Header from './components/Header';
import CreateNewItem from './components/CreateNewItem';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/createItem" component={CreateNewItem} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
