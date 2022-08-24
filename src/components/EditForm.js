import React, { useState, useEffect } from 'react';
import ApptCard from './ApptCard';

function EditForm(){
  const [ formData, setFormData ] = useState({});
  const [ appointments, setAppointments ] = useState([]);
  const [ clients, setClients ] = useState([]);
  const [ apptComponents, setApptComponents ] = useState([]);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )

    fetch('http://localhost:9292/clients')
      .then( res => res.json() )
      .then( setClients )
  }, []);

  
  const handleDeleteClick = (appt) => {
    fetch(`http://localhost:9292/appointments/${appt.id}`, {
      method: 'DELETE'
    })
      .then( () => setApptComponents(() => apptComponents.filter(comp => comp.key !== appt.id)))
  }


  function getAppts(email){
    const client = clients.find( c => c.email === email )
    const appts = appointments.filter( appt => appt.client_id === client.id )

    return appts.map( appt => {
      return <ApptCard key={ appt.id } appt={ appt } handleDeleteClick={ handleDeleteClick } />
    })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setApptComponents( () => getAppts(formData.email) );

    // if(isSlotTaken(formData.time)){
    //   alert("That time slot is taken or invalid.");
    //   return;
    // }
    e.target.reset();
  }

  


  return(
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="m-auto max-w-xl text-lg">
              Welcome to Clippy's! It looks like you're trying to elevate your style. Would you like to set up an appointment? 
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600"> 555 404 5555 </a>

              <address className="mt-2 not-italic">1998 Microsoft Dr. Los Altos, CA 94022</address>
            </div>
          </div>

          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form action="" className="space-y-4" onSubmit={ handleSubmit }>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    required
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    name="email"
                    onChange={ handleChange }
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> See Your Appointments </span>
                </button>
              </div>

              

              <div className="mt-4">
                <div>
                  { apptComponents === [] ? '' : apptComponents }
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditForm;

