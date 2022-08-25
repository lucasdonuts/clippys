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
    
    if (client == null) {
      setUserNotFoundAlert(true);
    } else {
      const appts = appointments.filter( appt => appt.client_id === client.id )
      if (appts.length === 0) {
        setUserHasNoApp(true);
      } else {
        return appts.map( appt => {
          return <ApptCard key={ appt.id } appt={ appt } handleDeleteClick={ handleDeleteClick } />
        })
      }
    }
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
    e.target.reset();
  }

  const [ userNotFoundAlert, setUserNotFoundAlert] = useState(false);
  const [ userHasNoApp, setUserHasNoApp] = useState(false);

setTimeout(() => {
    setUserNotFoundAlert(false);
    setUserHasNoApp(false);
  }, 3000);

  return(
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="m-auto max-w-xl text-lg">
              Need to change an appointment?
              Enter your email address below to view and update your appointments
              or give us a call.
            </p>

            <div>
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

              {userNotFoundAlert && <div className='alert-container'>
                  <div className='alert-inner'>There is no client with that email</div>
                </div>}
                {userHasNoApp && <div className='alert-container'>
                  <div className='alert-inner'>This user has no appointments</div>
                </div>}
    

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

