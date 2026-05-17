import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
    return (
        <div className='py-10 text-center text-neutral-200 bg-neutral-800'>
            <h1 className='text-2xl mb-4'>Contact</h1>
            
            <a href='mailto:jashbalon@gmail.com' target="_blank" className='hover:text-neutral-800 hover:bg-sky-500 px-3 py-2 rounded-2xl'>
                <MdOutlineEmail className='inline mb-1 mr-1' />
                jashbalon@gmail.com
            </a>
        </div>
    )
}

export default Footer