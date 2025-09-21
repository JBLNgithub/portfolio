import React from 'react'
import ExternalButton from './ExternalButton'

const GithubButton = ({ref}) => {
  return (
    <ExternalButton ref={ref} label='Github' isGithub='true' />
  )
}

export default GithubButton