import React, { useState, useEffect } from "react";
import MakeAppt from './MakeAppt';

const Landing = () => {
  const [ appointments, setAppointments ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )
  }, [])

  return(
    <section className='relative'>
    </section>
  )
}

export default Landing;