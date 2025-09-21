import React from 'react'
import {FaExclamationTriangle} from 'react-icons/fa'
import AppButton from '../components/AppButton'
import GithubButton from '../components/GithubButton'
import ExternalButton from '../components/ExternalButton'

const ProjectHeader = ({children, title, refApp, refGithub, labelOrg, refOrg, isInDev='false'}) => {
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

        <div className='grid grid-cols-3 gap-8 mt-6 text-center'>
            {refApp === undefined ? '' : <AppButton ref={refApp} />}
            {refGithub === undefined ? '' : <GithubButton ref={refGithub} />}
            {refOrg === undefined ? '' : <ExternalButton label={labelOrg} ref={refOrg} />}
        </div>
    </section>
  )
}

export default ProjectHeader