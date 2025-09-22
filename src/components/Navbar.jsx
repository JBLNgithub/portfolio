import React from 'react'
import NavButton from '../components/NavButton'

const Navbar = () => {
  return (
    <div className='text-neutral-200 bg-neutral-800 size-full'>
      <div className='fixed top-100 left-20'>
        <ul className='flex flex-col gap-6 items-center'>
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