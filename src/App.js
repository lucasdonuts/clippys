import React from 'react';
import './stylesheets/App.css';
import Landing from './components/Landing';
import MakeAppt from './components/MakeAppt';
import NavBar from './components/NavBar';
// import Footer from './components/Footer';

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
          <Route exact path='/'>
            <Landing />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
