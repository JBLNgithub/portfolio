import React from 'react'
import {FaGithub} from 'react-icons/fa'

const ExternalButton = ({label, ref, isGithub='false'}) => {
  const addButtonClass = isGithub == 'false' ? 'bg-blue-700 hover:text-neutral-800 hover:bg-sky-500' : 'bg-neutral-800 hover:text-neutral-800 hover:bg-sky-500'
  const buttonClass = `text-neutral-200 text-center rounded-md px-3 py-2 mt-4 ${addButtonClass}`

  return (
    <div>
      <a className={buttonClass} href={ref} target='_blank'>
      {isGithub == 'false' ? '' : <FaGithub className='text-neutral-200 inline mr-1 mb-1' /> }
      {label}
      </a>
    </div>
  )
}

export default ExternalButton