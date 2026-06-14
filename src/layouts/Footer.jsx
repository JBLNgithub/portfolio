import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
    return (
        <footer>
            <h2>Contact</h2>

            <a href='mailto:jashbalon@gmail.com' target="_blank" className='hover:text-neutral-800 hover:bg-sky-500 px-3 py-2 rounded-2xl'>
                <MdOutlineEmail className='inline mb-1 mr-1' />
                jashbalon@gmail.com
            </a>
        </footer>
    )
}

export default Footer