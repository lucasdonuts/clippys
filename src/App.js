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

export const TIMES = ['12:00', '12:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30']

function App() {
  const [ appointments, setAppointments ] = useState([]);
  const [ clients, setClients ] = useState([]);
  const [ reservedTimes, setReservedTimes ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( appts => {
        setAppointments(appts);
      });
  }, []);

  useEffect( () => {
    fetch('http://localhost:9292/clients')
      .then( res => res.json() )
      .then( setClients )
    
    setReservedTimes( () => {
      return appointments.map( appt => appt.time )
    })
  }, [appointments])

  function isSlotTaken(time){
    return reservedTimes.includes(time);
  }

  const addAppointment = (apptData) => {
    fetch('http://localhost:9292/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apptData)
    })
      .then(res => res.json() )
      .then( newAppt => setAppointments([
        ...appointments,
        newAppt
      ]) )
  };

  return (
    <Router>
      <div className="App bg-gray-100 pb-5">
        <NavBar />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/new'>
            <MakeAppt
              addAppointment={ addAppointment }
              isSlotTaken={ isSlotTaken }
            />
          </Route>
          <Route path='/edit'>
            <EditForm
              clients={ clients }
              appointments={ appointments }
              setAppointments={ setAppointments }
              isSlotTaken={ isSlotTaken }
              reservedTimes={ reservedTimes }
              setReservedTimes={ setReservedTimes }
            />
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
