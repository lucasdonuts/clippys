import React from 'react';
import { NavLink } from 'react-router-dom';

// https://cdn.icon-icons.com/icons2/1465/PNG/512/598barberpole_100227.png

const NavBar = () => {
  return(
    <header className="bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <span className="inline-flex">
                <img
                  src="https://cdn.icon-icons.com/icons2/1465/PNG/512/598barberpole_100227.png"
                  alt='home'
                  className='logo'
                />
                <img
                  src="https://i.imgur.com/btQURSq.png"
                  alt='home'
                  className='logo'
                />
              </span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-labelledby="header-navigation">
              <h2 className="sr-only" id="header-navigation">Header navigation</h2>

              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/new"
                  >
                    Make an Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/edit"
                  >
                    Change an Appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar;