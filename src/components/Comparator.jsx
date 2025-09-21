import React from 'react'
import ComparatorTile from './ComparatorTile'

const Comparator = ({label1, label2, img1, img2}) => {
  return (
    <div className='mt-30'>
        <div className='grid grid-cols-2 text-center gap-4'>
            <div className='m-5'>
                <ComparatorTile label={label1} img={img1} />
            </div>
            <div className='m-5'>
                <ComparatorTile label={label2} img={img2} />
            </div>
        </div>
    </div>
  )
}

export default Comparator