import React from 'react'
import {FaExclamationTriangle} from 'react-icons/fa'
import ExternalButton from '../components/ExternalButton'

const ProjectHeader = ({children, title, refApp, refGithub, labelOrg, refOrg, isInDev='false', refs}) => {
    function inDevWarning() {
        return (isInDev === 'false'  ? '' : 
            <>
                <FaExclamationTriangle className='inline text-yellow-600 mb-1' /> Project is still in dev
            </>
        )
    }

  return (
    <section>
        <h1 className='text-5xl font-bold my-20'>{title}</h1>
        {children}
        
        <div className='mt-16'>
            {inDevWarning()}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 text-center'>
            {refs.map(r => <ExternalButton label={r.label} ref={r.ref} isGithub={r.isGithub}/>)}
        </div>
    </section>
  )
}

export default ProjectHeader