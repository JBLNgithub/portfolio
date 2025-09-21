import React from 'react'
import { NavLink } from 'react-router-dom'
import topThePage from '../utils/TopThePage'

const NavButton = ({label, ref}) => {
  const linkClass= (({isActive}) => {
    let activeClass = isActive ? 'bg-blue-700' : 'bg-neutral-800';
    return(`hover:text-neutral-800 hover:bg-sky-500 rounded-2xl px-3 py-2 ${activeClass}`)
  })

  return (
    <div>
      <NavLink to={ref} className={linkClass} onClick={topThePage}>
        {label}
      </NavLink>
    </div>
  )
}

export default NavButton