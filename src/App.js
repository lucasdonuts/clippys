import React, { useState, useEffect } from 'react';
import './stylesheets/App.css';
import Landing from './components/Landing';
import MakeAppt from './components/MakeAppt';
import NavBar from './components/NavBar';
import EditForm from './components/EditForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  const [ appointments, setAppointments ] = useState([]);
  const [ clients, setClients ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )

    fetch('http://localhost:9292/clients')
      .then( res => res.json() )
      .then( setClients )
  }, []);

  return (
    <Router>
      <div className="App bg-gray-100 pb-5">
        <NavBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/new'>
            <MakeAppt appointments={ appointments } setAppointments={ setAppointments } />
          </Route>
          <Route path='/edit'>
            <EditForm clients={ clients } appointments={ appointments } />
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
