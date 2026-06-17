import {FaExclamationTriangle} from 'react-icons/fa'
import ExternalButton from '../components/ExternalButton'


export default function ProjectHeader({children, title, isInDev=false, refs}) {
  return (
    <section>
        <h1>{title}</h1>
        {children}
        <section>
        	{isInDev && inDevWarning()}
            {refs.map((r, id) => <ExternalButton label={r.label} ref={r.ref} isGithub={r.isGithub} key={id}/>)}
        </section>
    </section>
  )
}


function inDevWarning() {
	return <div className='text-center'>
                <FaExclamationTriangle className='inline text-yellow-600 mb-1' /> Project is still in dev
            </div>
}