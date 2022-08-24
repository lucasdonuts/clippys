import React, { useState, useEffect } from 'react';

const Form = () => {
  const [ formData, setFormData ] = useState({});
  const [ selectedOption, setSelectedOption ] = useState('1');
  const [ appointments, setAppointments ] = useState([]);
  const [ isTakenAlertVisible, setIsTakenAlertVisible ] = useState(false);
  const [ isInvalidAlertVisible, setIsInvalidAlertVisible ] = useState(false);
  const [ isConfirmedVisible, setIsConfirmedVisible ] = useState(false);

  useEffect( () => {
    fetch('http://localhost:9292/appointments')
      .then( res => res.json() )
      .then( setAppointments )
  }, []);

  const makeAppointment = (apptData) => {
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

  function isSlotTaken(time){
    return appointments.some( appt => {
      return appt.time === time
    })
  }

  setTimeout(() => {
    setIsTakenAlertVisible(false);
    setIsInvalidAlertVisible(false);
  }, 3000);

  const handleChange = (e) => {
    if(e.target.name === 'package'){ setSelectedOption(e.target.value) }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSlotTaken(formData.time)){
      setIsTakenAlertVisible(true);
      // alert("That time slot is taken");
      return;
    } else if(!formData.time || formData.time === ''){
      setIsInvalidAlertVisible(true);
      // alert("Please select a time for your appointment.");
      return;
    }

    makeAppointment(formData);
    e.target.reset();
    setIsConfirmedVisible(true);
  }
  
  return(
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
            <form action="" className="space-y-4" onSubmit={ handleSubmit }>
              <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                  required
                  className="w-full p-3 text-sm border-gray-200 rounded-lg"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="name"
                  onChange={ handleChange }
                />
              </div>
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
                <div>
                  <label className="sr-only" htmlFor="phone">Phone</label>
                  <input
                    required
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                    name="phone"
                    onChange={ handleChange }
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                <div>
                  <input
                    className="sr-only"
                    id="option1"
                    type="radio"
                    tabIndex="-1"
                    name='package'
                    value='1'
                    onChange={ handleChange }
                  />
                  <label
                    htmlFor="option1"
                    className={
                      selectedOption === '1' ?
                        "block w-full p-3 text-white bg-black border border-white-500 rounded-lg" : 
                        "block w-full p-3 border border-gray-200 rounded-lg"
                    }
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Basic Cut </span>
                  </label>
                </div>
                <div>
                  <input
                    className="sr-only"
                    id="option2"
                    type="radio"
                    tabIndex="-1"
                    name='package'
                    value='2'
                    onChange={ handleChange }
                  />
                  <label
                    htmlFor="option2"
                    className={
                      selectedOption === '2' ?
                        "block w-full p-3 text-white bg-black border border-white-500 rounded-lg" : 
                        "block w-full p-3 border border-gray-200 rounded-lg"
                    }
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Shave and a Haircut </span>
                  </label>
                </div>
                <div>
                  <input
                    className="sr-only"
                    id="option3"
                    type="radio"
                    tabIndex="-1"
                    name='package'
                    value='3'
                    onChange={ handleChange }
                  />
                  <label
                    htmlFor="option3"
                    className={
                      selectedOption === '3' ?
                        "block w-full p-3 text-white bg-black border border-white-500 rounded-lg" : 
                        "block w-full p-3 border border-gray-200 rounded-lg"
                    }
                    tabIndex="0"
                  >
                    <span className="text-sm font-medium"> Deluxe Makeover </span>
                  </label>
                </div>
              </div>
              <div className="inline-flex flex-center">
                {/* consider adding date and a "time not available" alert */}
                <select name="time" id="time-select" onChange={ handleChange } defaultValue=''>
                  <option value=''>Select a Time</option>
                  <option value="12:00">12:00</option>
                  <option value="12:30">12:30</option>
                  <option value="1:00">1:00</option>
                  <option value="1:30">1:30</option>
                  <option value="2:00">2:00</option>
                  <option value="2:30">2:30</option>
                  <option value="3:00">3:00</option>
                  <option value="3:30">3:30</option>
                  <option value="4:00">4:00</option>
                  <option value="4:30">4:30</option>
                </select>
                {isTakenAlertVisible && <div className='alert-container'>
                  <div className='alert-inner'>That time slot is taken</div>
                </div>}
                {isInvalidAlertVisible && <div className='alert-container'>
                  <div className='alert-inner'>Please select a time</div>
                </div>}
                {isConfirmedVisible && <div className='confirm-container'>
                  <div className='confirm-inner'><strong>Appointment confirmed!</strong></div>
                </div>}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                >
                  <span className="font-medium"> Send Enquiry </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Form;