import React from 'react';
import './stylesheets/App.css';
import Landing from './components/Landing';
import MakeAppt from './components/MakeAppt';
import NavBar from './components/NavBar';
import EditForm from './components/EditForm';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/new'>
            <MakeAppt />
          </Route>
          <Route path='/edit'>
            <EditForm />
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
