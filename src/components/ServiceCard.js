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
        </dl>
      </div>
    </div>
  )
}

export default ServiceCard;