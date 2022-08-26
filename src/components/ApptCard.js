import React, { useState, useEffect } from 'react';
import { TIMES } from '../App';
import { packageDetails } from './ServiceCard';

const packageData = {
  1: { name: 'Basic Haircut', price: 15 },
  2: { name: 'Shave and a Haircut', price: 35 },
  3: { name: 'Deluxe Makeover', price: 75 }
}

const ApptCard = ({ appt, handleDeleteClick, reservedTimes, setReservedTimes }) => {
  const [ formData, setFormData ] = useState({...appt})
  const [ appointment, setAppointment ] = useState(appt);
  const [ price, setPrice ] = useState(appt.price);
  const [ myPackage, setMyPackage ] = useState(appt.package);
  const [ time, setTime ] = useState(appt.time);
  const [ isTimeConfirmVisible, setIsTimeConfirmVisible ] = useState(false);
  const [ isPackageConfirmVisible, setIsPackageConfirmVisible ] = useState(false);

  const updateData = (name, value) => {
    switch( name ){
      case 'package':
        setMyPackage(value);
        setPrice(packageData[value].price);
        setIsPackageConfirmVisible(true);
        break;
      case 'time':
        setReservedTimes([
          ...reservedTimes.filter( t => t !== time ),
          value
        ])
        setTime(value);
        setIsTimeConfirmVisible(true);
        break;
    }
    setTimeout(() => {
      setIsTimeConfirmVisible(false);
      setIsPackageConfirmVisible(false);
    }, 4000);
    
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newPrice = packageData[formData.package].price;

    setFormData({
      ...formData,
      price: newPrice,
      [name]: value
    })

    fetch(`http://localhost:9292/appointments/${appt.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...formData,
        price: newPrice,
        [name]: value
      })
    })
      .then( res => res.json() )
      .then( updatedAppt => {
        console.log('formData: ', formData);
        setAppointment(updatedAppt);
        updateData( name, value );
        console.log('updatedAppt: ', updatedAppt);
      })
  }

  const options = TIMES.map( (t, i) => {
      return(
        <option
          key={ i }
          value={ t }
          disabled={ reservedTimes.includes( t ) }
          className="font-medium"
        >
            { t }
        </option>
      )
    })

  return(
    <div
      href="#"
      className="block p-4 rounded-lg shadow-sm shadow-indigo-100"
    >
      <img
        alt="haircut"
        src={ packageDetails[formData.package].imageUrl }
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
                packageData[formData.package].name
              }
            </dd>
          </div>
        </dl>

        <dl className="flex-center mt-3 space-x-8 text-xs">
          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
              <select name="time" id="time-select" onChange={ handleChange } defaultValue={ formData.time }>
                { options }
              </select>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
              <select name="package" id="time-select" onChange={ handleChange } defaultValue={ formData.package }>
                <option value="1">Basic Haircut</option>
                <option value="2">Shave and a Haircut</option>
                <option value="3">Deluxe Makeover</option>
              </select>
              {isTimeConfirmVisible && <div className='update-confirm-container'>
                <div className='update-confirm-inner'>
                  <strong>Appointment time confirmed!</strong>
                  <span className="closebtn white" onClick={() => setIsTimeConfirmVisible(false)}>&times;</span> 
                </div>
              </div>}
              {isPackageConfirmVisible && <div className='update-confirm-container'>
                <div className='update-confirm-inner'>
                  <strong>Appointment service updated!</strong>
                  <span className="closebtn black" onClick={() => setIsPackageConfirmVisible(false)}>&times;</span> 
                </div>
              </div>}
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <button
              onClick={ () => handleDeleteClick(appointment) }
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