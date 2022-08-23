import React from 'react';

const Footer = () => {
  return(
    <footer class=" w-full bottom-0 bg-white">
      <div class="max-w-screen-xl pb-2 mx-auto sm:px-6 lg:px-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <div class="flex justify-center text-teal-600 sm:justify-start">
              <img
                src="https://cdn.icon-icons.com/icons2/1465/PNG/512/598barberpole_100227.png"
                alt='home'
                id='logo'
              />
          </div>

          <p class="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;