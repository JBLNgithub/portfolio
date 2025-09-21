import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <div className='grid grid-cols-6 gap-8'>
        <div className='col-span-1'>
            <Navbar />
        </div>
        <div className='col-span-5 container m-auto py-10 px-6'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout