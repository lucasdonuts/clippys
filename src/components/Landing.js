import React from "react";

const Landing = () => {

  return(
    <section>
      <div className="px-4 py-16 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                className="border border-solid border-4 border-black rounded-2xl absolute inset-0 object-cover w-full h-full"
                src="https://images.pexels.com/photos/3162022/pexels-photo-3162022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Barber pole"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span
              className="hidden lg:inset-y-0 lg:absolute lg:w-16 lg:bg-gray-100 lg:block lg:-left-16"
            ></span>

            <div className="m-auto p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Welcome to Clippy's!
              </h2>

              <p className="mt-4 text-gray-600">
                You seem to be looking for a barber. Can I help you with that?
              </p>

              <a
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring"
                href="/new"
              >
                Yes, please assist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing;