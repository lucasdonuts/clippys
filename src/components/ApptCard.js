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
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>

            <div className="sm:ml-3 mt-1.5 sm:mt-0">
              <dt className="text-gray-500">
                Bathroom
              </dt>

              <dd className="font-medium">
                2 rooms
              </dd>
            </div>
          </div>

          <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <svg
              className="w-4 h-4 text-indigo-700"
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>

            <div className="sm:ml-3 mt-1.5 sm:mt-0">
              <dt className="text-gray-500">
                Bedroom
              </dt>

              <dd className="font-medium">
                4 rooms
              </dd>
            </div>
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