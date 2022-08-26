import React, { useState } from 'react';
import ApptCard from './ApptCard';

function EditForm({ clients, appointments, setAppointments, reservedTimes, setReservedTimes }){
  const [ apptsToDisplay, setApptsToDisplay ] = useState([]);
  const [ userNotFoundAlert, setUserNotFoundAlert] = useState(false);
  const [ userHasNoAppt, setUserHasNoAppt] = useState(false);
  const [ isDeleteConfirmVisible, setIsDeleteConfirmVisible ] = useState(false);
  const [ formData, setFormData ] = useState({
    email: ''
  });

  const handleDeleteClick = (appt) => {
    if(window.confirm("Are you sure you want to cancel?")){
      cancelAppt(appt);
    }
  }

  const apptComponents = apptsToDisplay.map( appt => {
      return <ApptCard
        key={ appt.id }
        appt={ appt }
        handleDeleteClick={ handleDeleteClick }
        reservedTimes={ reservedTimes }
        setReservedTimes={ setReservedTimes }
      />
    })

  const getClientAppts = (client_id) => {
    return appointments.filter( a => a.client_id === client_id )
  }
  
  const cancelAppt = (appt) => {
    fetch(`http://localhost:9292/appointments/${appt.id}`, {
      method: 'DELETE'
    })
      .then( () => {
        setAppointments([...appointments.filter( a => a.id !== appt.id )])
        setApptsToDisplay(() => apptsToDisplay.filter( a => a.id !== appt.id));

        setIsDeleteConfirmVisible(true);

        setTimeout(() => {
          setIsDeleteConfirmVisible(false);
        }, 4000);
      })
  }

  function getAppts(email){
    const client = clients.find( c => c.email === email )
    
    if (!client) {
      setUserNotFoundAlert(true);
    } else {
      const appts = getClientAppts(client.id);
      if (appts.length === 0) {
        setUserHasNoAppt(true);
      } else {
        setApptsToDisplay(() => appts);
      }
    }

    setTimeout(() => {
      setUserNotFoundAlert(false);
      setUserHasNoAppt(false);
    }, 3000);
  }

  const handleChange = (e) => {
    setFormData({
      email: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setApptsToDisplay([]);

    getAppts(formData.email);
  }

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
              <p className="text-2xl font-bold text-pink-600"> 555 404 5555 </p>

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
                <div className='alert-inner'>
                  There is no client with that email
                  <span className="closebtn black" onClick={() => setUserNotFoundAlert(false)}>&times;</span>
                </div>
              </div>}
              {userHasNoAppt && <div className='alert-container'>
                <div className='alert-inner'>
                  This user has no appointments
                  <span className="closebtn black" onClick={() => setUserHasNoAppt(false)}>&times;</span>
                </div>
              </div>}
              {isDeleteConfirmVisible && <div className='delete-confirm-container'>
                <div className='delete-confirm-inner'>
                  <strong>Appointment cancelled</strong>
                  <span className="closebtn white" onClick={() => setIsDeleteConfirmVisible(false)}>&times;</span> 
                </div>
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

