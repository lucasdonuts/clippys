import React, { useState, useEffect } from "react";

const Landing = () => {
  const [ appointments, setAppointments ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )
  }, [])

  return(
    <>
      
    </>
    // <ul>
    //   { appointments.map( appt => {
    //     return <li key={appt.id}>{appt.time}</li>
    //   })}
    // </ul>
  )
}

export default Landing;