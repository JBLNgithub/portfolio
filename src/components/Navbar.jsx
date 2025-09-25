import React from 'react'
import NavButton from '../components/NavButton'
import { FiMenu } from 'react-icons/fi'
import toggleMenu from '../utils/toggleMenu'

const Navbar = () => {

  return (
    <div className='text-neutral-200 bg-neutral-800 size-full'>

      <div className='text-center md:hidden'>
        <FiMenu 
          onClick={() => toggleMenu() } 
          className='inline mt-5' />
      </div>

      <div className='nav-links hidden md:block fixed top-5 left-16 md:top-100 md:left-20'>
        <ul className='flex flex-col gap-6 items-center bg-neutral-800 py-5 px-1 rounded-2xl'>
          <li>
            <NavButton label='About Me' ref='/' />
          </li>
          <li>
            <NavButton label='Stockemoise' ref='/stockemoise' />
          </li>
          <li>
            <NavButton label='Portfolio' ref='/port-folio' />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar