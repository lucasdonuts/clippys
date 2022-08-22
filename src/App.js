import React from 'react';
import './stylesheets/App.css';
import Landing from './components/Landing';
import MakeAppt from './components/MakeAppt';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello World</h1>
        <Switch>
          <Route path='/new'>
            <MakeAppt />
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
