import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header className="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative z-50">
        <div className="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
          <NavLink to="/" className="hidden items-center gap-1 sm:flex">
            <img
              className="inline-block w-8 object-cover"
              src="./assets/myProfile/ankitVertical.JPG"
              alt="Aleksandr Hovhannisyan"
            />
            <span className="font-fira text-lg font-bold text-white">Ankit Kumar</span>
          </NavLink>

          <div className="flex sm:gap-2">
            <NavLink to="/" className="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:hidden sm:px-3">Home</NavLink>
            <NavLink to="/moreAbout" className="block flex-1 bg-neutral-700 py-2 text-center text-lg text-white sm:px-3">About</NavLink>
            {/* <a href="#" className="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3">Service</a> */}
            <a href="/#project" className="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3">Project</a>
            <a href="/#contact" className="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3">Connect</a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar

