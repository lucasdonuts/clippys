import React, { useState } from 'react';

const Form = () => {
  const [ formData, setFormData ] = useState({});
  const [ selectedOption, setSelectedOption ] = useState('1');

  const makeAppointment = (apptData) => {
    fetch('http://localhost:9292/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(apptData)
    })
      // .then( res => res.json() )
      // .then( data => console.log(data))
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData)
    makeAppointment(formData);
  }
  console.log(formData)
  return(
    <section className="bg-gray-100">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:py-12 lg:col-span-2">
            <p className="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally independent from manufacturer and other group
              control gives you confidence that we will only recommend what is right for you.
            </p>

            <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>

              <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
            </div>
          </div>

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
                  <label htmlFor="option1" className="block w-full p-3 border border-gray-200 rounded-lg" tabIndex="0">
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
                  <label htmlFor="option2" className="block w-full p-3 border border-gray-200 rounded-lg" tabIndex="0">
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
                  <label htmlFor="option3" className="block w-full p-3 border border-gray-200 rounded-lg" tabIndex="0">
                    <span className="text-sm font-medium"> Deluxe Makeover </span>
                  </label>
                </div>
              </div>

              <div>
              <select name="time" id="time-select" onChange={ handleChange }>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
              </select>
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