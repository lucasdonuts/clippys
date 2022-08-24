import React from 'react';

const ServiceCard = ({ service }) => {
  const packageDetails = {
    '1': {
      name: "Basic Haircut",
      price: 15,
      imageUrl: 'https://images.pexels.com/photos/897254/pexels-photo-897254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    '2': {
      name: "Shave and a Haircut",
      price: 35,
      imageUrl: 'https://images.pexels.com/photos/2062463/pexels-photo-2062463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    '3': {
      name: "Deluxe Makeover",
      price: 75,
      imageUrl: 'https://images.pexels.com/photos/3998399/pexels-photo-3998399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  }

  const { name, price, imageUrl } = packageDetails[service]

  return(
    <div
      className="block bg-white p-4 rounded-lg shadow-sm shadow-indigo-100"
    >
      <img
        alt="haircut"
        src={ imageUrl }
        className="object-cover w-full h-56 rounded-md"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">
              Package
            </dt>

            <dd className="font-medium">
              {
                name
              }
            </dd>
          </div>

          <div>
            <dt className="sr-only">
              Price
            </dt>

            <dd className="text-sm text-gray-500">
              ${ price }
            </dd>
          </div>
        </dl>

        <dl className="flex-center mt-6 space-x-8 text-xs">
          {/* <div className="sm:inline-flex sm:items-center sm:shrink-0">
            <div>
                consider adding date and a "time not available" alert
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
                consider adding date and a "time not available" alert
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
          </div> */}
        </dl>
      </div>
    </div>
  )
}

export default ServiceCard;