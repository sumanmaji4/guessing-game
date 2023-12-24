import React from 'react'
import { NavLink } from 'react-router-dom'

function MainNavigation() {
  return (
    <>
      <div className='w-screen h-16 fixed bg-white/90 dark:bg-black/90'> </div>
      <nav className='w-screen fixed flex justify-between px-16 h-16 items-center mb-8 z-10 text-xl font-semibold dark:text-white'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? ' underline' : ' hover:underline'
          }
        >
          Home
        </NavLink>
        <NavLink
          to='/game'
          className={({ isActive }) =>
            isActive ? ' underline' : 'hover:underline'
          }
        >
          Game
        </NavLink>
      </nav>
    </>
  )
}

export default MainNavigation
