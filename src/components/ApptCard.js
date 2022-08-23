import React, { useState, useEffect } from 'react';

const ApptCard = ({ appt }) => {
  const { package: myPackage, time, price } = appt;
  
  const [ imageUrl, setImageUrl ] = useState('');
  const [ packageName, setPackageName ] = useState('');

  // const handleClick = () => {
  //   fetch(`http://localhost:9292/appointments/${appt.id}`)
  // }

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
      // onClick={ handleClick }
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

          <div>
            <dt className="sr-only">
              Address
            </dt>

            <dd className="font-medium">
              {
                packageName
              }
            </dd>
          </div>
        </dl>

        <dl className="flex items-center mt-6 space-x-8 text-xs">
          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
                {/* consider adding date and a "time not available" alert */}
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
                {/* consider adding date and a "time not available" alert */}
              <select name="package" id="time-select" onChange={ handleChange } defaultValue={ myPackage }>
                <option value="1">Basic Haircut</option>
                <option value="2">Shave and a Haircut</option>
                <option value="3">Deluxe Makeover</option>
              </select>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <button class="relative inline-block text-sm font-medium text-white group focus:outline-none focus:ring">
              <span class="absolute inset-0 border border-red-400 group-active:border-red-500"></span>
              <span class="block px-5 py-2 transition-transform bg-red-600 border border-red-600 active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                Download
              </span>
            </button>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default ApptCard;


// useEffect( () => {
  //   setCardInfo();
  // }, [appt])

  // const setUrl = () => {
  //   console.log(myPackage)
  //   switch(myPackage) {
  //     case '1':
  //       return 'https://images.pexels.com/photos/897254/pexels-photo-897254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //       break;
  //     case '2':
  //       return 'https://images.pexels.com/photos/2062463/pexels-photo-2062463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //       break;
  //     case '3':
  //       return 'https://images.pexels.com/photos/3998399/pexels-photo-3998399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  //       break;
  //   }
  // }

  // const setCardInfo = () => {
  //   switch(myPackage) {
  //     case '1':
  //       setPackageName('Basic Haircut')
  //       setImageUrl('https://images.pexels.com/photos/897254/pexels-photo-897254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  //       break;
  //     case '2':
  //       setPackageName('Shave and a Haircut')
  //       setImageUrl('https://images.pexels.com/photos/2062463/pexels-photo-2062463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  //       break;
  //     case '3':
  //       setPackageName('Deluxe Makeover')
  //       setImageUrl('https://images.pexels.com/photos/3998399/pexels-photo-3998399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
  //       break;
  //   }
  // }