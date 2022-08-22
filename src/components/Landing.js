import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import MakeAppt from './MakeAppt';

const Landing = () => {
  const [ appointments, setAppointments ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )
  }, [])

  return(
    <>
      <Link to='/new'>
        <h1>Make an Appointment</h1>
      </Link>
    </>
    // <ul>
    //   { appointments.map( appt => {
    //     return <li key={appt.id}>{appt.time}</li>
    //   })}
    // </ul>
  )
}

export default Landing;