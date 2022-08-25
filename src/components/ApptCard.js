import React, { useState} from 'react';

const ApptCard = ({ appt, handleDeleteClick }) => {
  const { package: myPackage, time, price } = appt;

  const packageName = {
    1: 'Basic Haircut',
    2: 'Shave and a Haircut',
    3: 'Deluxe Makeover'
  }

  const handleChange = (e) => {
    fetch(`http://localhost:9292/appointments/${appt.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...appt,
        [e.target.name]: e.target.value
      })
    })
      .then( res => res.json() )
      .then( data => console.log(data) )
  }

  return(
    <div
      href="#"
      className="block p-4 rounded-lg shadow-sm shadow-indigo-100"
    >
      <img
        alt="haircut"
        src='https://images.pexels.com/photos/897254/pexels-photo-897254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        className="object-cover w-full h-56 rounded-md"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">
              Price
            </dt>

            <dd className="text-sm text-gray-500">
              ${ price }
            </dd>
          </div>

          <div className="">
            <dt className="sr-only">
              Package
            </dt>

            <dd className="font-medium">
              {
                packageName[myPackage]
              }
            </dd>
          </div>
        </dl>

        <dl className="flex-center mt-3 space-x-8 text-xs">
          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
              <select name="time" id="time-select" onChange={ handleChange } defaultValue={ time }>
                <option>Select a Time</option>
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
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
              <select name="package" id="time-select" onChange={ handleChange } defaultValue={ myPackage }>
                <option value="1">Basic Haircut</option>
                <option value="2">Shave and a Haircut</option>
                <option value="3">Deluxe Makeover</option>
              </select>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <button
              onClick={ () => handleDeleteClick(appt) }
              className="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring"
            >
              <span className="absolute inset-0 border border-red-400 group-active:border-red-500"></span>
              <span className="block px-5 py-2 transition-transform bg-red-600 border border-red-600 active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Cancel Appointment
              </span>
            </button>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ApptCard;