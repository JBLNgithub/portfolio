import React from 'react'
import ExternalButton from './ExternalButton'

const AppButton = ({ref}) => {
  return (
    <ExternalButton ref={ref} label='Project' />
  )
}

export default AppButton