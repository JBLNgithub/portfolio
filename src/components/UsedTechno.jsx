import React from 'react'

const UsedTechno = ({children}) => {
  return (
    <>
        <h3 className='text-3xl mt-10'>Technologies used for this project</h3>
        <div className='grid grid-cols-4 mt-4 gap-3'>
            {children}
        </div>
    </>
  )
}

export default UsedTechno