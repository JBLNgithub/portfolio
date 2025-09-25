import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'


const MainLayout = () => {
  return (
    <div className='grid grid-cols-9 md:grid-cols-6'>
        <div className='col-span-1'>
            <Navbar />
        </div>
        <div className='col-span-8 md:col-span-5 container m-auto px-8'>
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout