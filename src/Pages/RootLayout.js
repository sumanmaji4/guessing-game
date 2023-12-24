import React from 'react'
import MainNavigation from '../Components/MainNavigation'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <img
        src='/bg2.jpg'
        className='fixed w-screen h-screen object-cover'
        alt=''
      />
      <div className='fixed w-screen h-screen flex flex-col items-center bg-white/50 dark:bg-black/60 overflow-y-scroll'>
        <MainNavigation />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
