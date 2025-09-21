import React from 'react'
import getImageURL from '../utils/getImageURL'

const ComparatorTile = ({label, img}) => {
  return (
    <>
        <h3 className='text-2xl font-bold mb-5'>{label}</h3>
        <img src={getImageURL(img)} className='rounded-2xl border-2' />
    </>
  )
}

export default ComparatorTile